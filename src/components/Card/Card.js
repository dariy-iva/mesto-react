import React from "react";

export default function Card(props) {
  const {
    card: { link, name, likes }
  } = props;

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <article className="post">
      <img
        src={link}
        alt={name}
        className="post__photo"
        onClick={handleClick}
      />
      <p className="post__caption">{name}</p>
      <div className="post__likes">
        <button type="button" className="post__like-button"></button>
        <p className="post__likes-number">{likes.length}</p>
      </div>
      <button type="button" className="post__del-button"></button>
    </article>
  );
}
