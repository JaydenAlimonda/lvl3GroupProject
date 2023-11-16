import React, { useEffect, useState } from 'react';
import Meme from './components/Meme';
import CreatedMemes from './components/CreatedMemes';
import axios from 'axios';

export default function App() {
  // SET CURENT MEME STATE
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    img: 'https://miro.medium.com/v2/resize:fit:640/1*WpB-1uJaKyvY3Kb3SOsQfg.jpeg',
  });

// SET ALL MEMES STATE
  const [allMemes, setAllMemes] = useState([]);

  // SET CREATED MEMES STATE
  const [createdMemes, setCreatedMemes] = useState([]);

  // GET MEME DATA FROM DATABASE 
  useEffect(() => {
    axios.get('https://api.imgflip.com/get_memes')
      .then((response) => {
        setAllMemes(response.data.data.memes);
      })
      .catch((error) => {
        console.error('Error fetching memes:', error);
      });
  }, []);

// HANDEL CHANGE OF VALUES
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

// NEW MEME FUNCTION + CLEAR INPUT
  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme({
      ...meme,
      img: url,
      topText: '',
      bottomText: ''
    });
  }

// SAVE MEME AND ADD TO CREATED MEME STATE
  function saveMeme() {
      const newMeme = {
        topText: meme.topText,
        bottomText: meme.bottomText,
        img: meme.img,
      };
      setCreatedMemes((prevMemes) => [...prevMemes, newMeme]);
  }

// Function to edit a created meme
function editMeme(index, newTopText, newBottomText) {
  const updatedMemes = [...createdMemes];
  updatedMemes[index].topText = newTopText;
  updatedMemes[index].bottomText = newBottomText;
  setCreatedMemes(updatedMemes);
}

// Function to delete a created meme
function deleteMeme(index) {
  const updatedMemes = [...createdMemes];
  updatedMemes.splice(index, 1);
  setCreatedMemes(updatedMemes);
}

  return (
    <div className="app-container">
      <h1 className="title">Meme Generator</h1>
      <Meme meme={meme} handleChange={handleChange} getMemeImage={getMemeImage} />
      <button className="save--button" onClick={saveMeme}>
        Save
      </button>
      <CreatedMemes
  createdMemes={createdMemes}
  editMeme={editMeme}
  deleteMeme={deleteMeme}
/>
    </div>
  );
}

