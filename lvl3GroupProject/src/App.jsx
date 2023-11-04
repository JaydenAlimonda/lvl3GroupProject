import React, { useEffect, useState } from 'react';
import Meme from './components/Meme';
import CreatedMemes from './components/CreatedMemes';
import axios from 'axios';

export default function App() {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    img: '',
  });

  const [allMemes, setAllMemes] = useState([]);
  const [createdMemes, setCreatedMemes] = useState([]);

  useEffect(() => {
    axios.get('https://api.imgflip.com/get_memes')
      .then((response) => {
        setAllMemes(response.data.data.memes);
      })
      .catch((error) => {
        console.error('Error fetching memes:', error);
      });
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme({
      ...meme,
      img: url,
    });
  }

  function saveMeme() {
      const newMeme = {
        topText: meme.topText,
        bottomText: meme.bottomText,
        img: meme.img,
      };
      setCreatedMemes((prevMemes) => [...prevMemes, newMeme]);
  }

  return (
    <div className="app-container">
      <h1 className="title">Meme Generator</h1>
      <Meme meme={meme} handleChange={handleChange} getMemeImage={getMemeImage} />
      <button className="save-button" onClick={saveMeme}>
        Save
      </button>
      <CreatedMemes createdMemes={createdMemes} />
    </div>
  );
}

