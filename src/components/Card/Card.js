import React from 'react';

export default function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <article className="post">
      <img src={props.card.link} alt={props.card.name} className="post__photo" onClick={handleClick} />
      <p className="post__caption">{props.card.name}</p>
      <div className="post__likes">
        <button type="button" className="post__like-button"></button>
        <p className="post__likes-number">{props.card.likes.length}</p>
      </div>
      <button type="button" className="post__del-button"></button>
    </article>
  );
}