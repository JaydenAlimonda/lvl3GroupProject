import React, { useState } from 'react';

export default function CreatedMemes({ createdMemes, editMeme, deleteMeme }) {
  const [editIndex, setEditIndex] = useState(null);
  const [editTopText, setEditTopText] = useState('');
  const [editBottomText, setEditBottomText] = useState('');

  const startEditing = (index) => {
    const memeToEdit = createdMemes[index];
    setEditIndex(index);
    setEditTopText(memeToEdit.topText);
    setEditBottomText(memeToEdit.bottomText);
  };

  const finishEditing = (index) => {
    editMeme(index, editTopText, editBottomText);
    setEditIndex(null);
  };

  return (
    <ul className='memeContainer'>
      {createdMemes.map((createdMeme, index) => (
        <li className="memeList" key={index}>
          <img src={createdMeme.img} alt={`Created Meme ${index}`} />
          {editIndex === index ? (
            <form>
              <input
                type="text"
                value={editTopText}
                onChange={(e) => setEditTopText(e.target.value)}
              />
              <input
                type="text"
                value={editBottomText}
                onChange={(e) => setEditBottomText(e.target.value)}
              />
              <button onClick={() => finishEditing(index)}>Save</button>
            </form>
          ) : (
            <>
              <p className='createdMeme--topText'>{createdMeme.topText}</p>
              <p className='createdMeme--bottomText'>{createdMeme.bottomText}</p>
              <button onClick={() => startEditing(index)}>Edit</button>
              <button onClick={() => deleteMeme(index)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
