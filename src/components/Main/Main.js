import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Card from "../Card/Card";

export default function Main({
  onEditAvatar,
  onEditProfile,
  onAddPost,
  onCardClick,
  onCardLike,
  onCardDelete,
  posts,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <img
          src={currentUser.avatar || ""}
          alt="аватар"
          className="profile__avatar"
        />
        <div className="profile__edit-avatar" onClick={onEditAvatar}></div>
        <div className="profile__info">
          <h1 className="profile__name">
            {currentUser.name || "Пользователь не найден"}
          </h1>
          <p className="profile__about-me">
            {currentUser.about || "Пользователь не найден"}
          </p>
          <button
            className="profile__edit-button"
            type="button"
            onClick={onEditProfile}
          ></button>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={onAddPost}
        ></button>
      </section>
      <section className="posts">
        {posts.map((post) => (
          <Card
            card={post}
            onCardClick={onCardClick}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
            key={post._id}
          />
        ))}
      </section>
    </main>
  );
}