import React from 'react';

export default function CreatedMemes({ createdMemes }) {
  return (
    <ul>
      {createdMemes.map((createdMeme, index) => (
        <li className="created-memes">
          <img src={createdMeme.img} alt={`Created Meme ${index}`} />
          <p>{createdMeme.topText}</p>
          <p>{createdMeme.bottomText}</p>
        </li>
      ))}
    </ul>
  );
}
