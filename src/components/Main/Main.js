import React from "react";
import { api } from "../../utils/Api";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Card from "../Card/Card";

export default function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const { onEditAvatar, onEditProfile, onAddPost, onCardClick } = props;
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    api
      .getPosts()
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api.changeLikePostStatus(card._id, isLiked).then((newPost) => {
      setPosts((state) => state.map((c) => (c._id === card._id ? newPost : c)));
    });
  }

  function handleCardDelete(card) {
    api.deletePost(card._id).then(() => {
      setPosts((state) => state.filter((c) => (c._id !== card._id)));
    });
  }

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
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            key={post._id}
          />
        ))}
      </section>
    </main>
  );
}
