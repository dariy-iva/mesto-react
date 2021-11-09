import React from "react";
import { api } from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import ImagePopup from "./ImagePopup/ImagePopup";
import EditProfilePopup from "./EditProfilePopup/EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup/EditAvatarPopup";
import AddPostPopup from "./AddPostPopup/AddPostPopup";
import DeletePostPopup from "./DeletePostPopup/DeletePostPopup";

export default function App() {
  const [currentUser, setCurrentUser] = React.useState({});

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPostPopupOpen, setIsAddPostPopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpenen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isDeletePostPopupOpenen, setIsDeletePostPopupOpenen] =
    React.useState(false);
  const [isImagePopupOpenen, setIsImagePopupOpenen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data);
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

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPostClick() {
    setIsAddPostPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpenen(true);
  }

  function handleCardDeleteClick(card) {
    setIsDeletePostPopupOpenen(true);
    setSelectedCard(card);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api.changeLikePostStatus(card._id, isLiked).then((newPost) => {
      setPosts((state) => state.map((c) => (c._id === card._id ? newPost : c)));
    });
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPostPopupOpen(false);
    setIsDeletePostPopupOpenen(false);
    setIsImagePopupOpenen(false);
    setSelectedCard(null);
  }

  function handleUpdateUser(data) {
    api
      .setUserInfo(data)
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => console.log(err));
  }

  function handleUpdateAvatar(data) {
    api
      .setUserAvatar(data)
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => console.log(err));
  }

  function handleAddPost(data) {
    api
      .setPost(data)
      .then((newPost) => {
        setPosts([newPost, ...posts]);
      })
      .catch((err) => console.log(err));
  }

  function handleDeletePost(card) {
    api.deletePost(card._id).then(() => {
      setPosts((state) => state.filter((c) => c._id !== card._id));
    });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPost={handleAddPostClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDeleteClick={handleCardDeleteClick}
          posts={posts}
        />
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <AddPostPopup
          isOpen={isAddPostPopupOpen}
          onClose={closeAllPopups}
          onAddPost={handleAddPost}
        />
        <DeletePostPopup
          isOpen={isDeletePostPopupOpenen}
          onClose={closeAllPopups}
          card={selectedCard}
          onDeletePost={handleDeletePost}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpenen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <ImagePopup
          isOpen={isImagePopupOpenen}
          card={selectedCard}
          onClose={closeAllPopups}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}
