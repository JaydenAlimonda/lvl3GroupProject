
import React from 'react';

export default function Meme({ meme, handleChange, getMemeImage }) {
  return (
    <main>
      <div className="current--meme">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="form--button" onClick={getMemeImage}>
        Get a new meme image
      </button>
      </div>
      <div className="meme">
        <img src={meme.img} className="meme--image" />
        <h2 className="currentMeme--topText">{meme.topText}</h2>
        <h2 className="currentMeme--bottomText">{meme.bottomText}</h2>
      </div>
      
    </main>
  );
}
