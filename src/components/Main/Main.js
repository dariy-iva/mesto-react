import React from "react";
import { api } from "../../utils/Api";
import Card from "../Card/Card";

export default function Main(props) {
  const {onEditAvatar, onEditProfile, onAddPost, onCardClick} = props;
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => console.log(err));
  }, []);

  React.useEffect(() => {
    api
      .getPosts()
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <img src={userAvatar} alt="аватар" className="profile__avatar" />
        <div
          className="profile__edit-avatar"
          onClick={onEditAvatar}
        ></div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <p className="profile__about-me">{userDescription}</p>
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
          <Card card={post} onCardClick={onCardClick} key={post._id} />
        ))}
      </section>
    </main>
  );
}
