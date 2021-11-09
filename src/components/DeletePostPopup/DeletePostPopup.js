import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

export default function DeletePostPopup({ isOpen, onClose, card, onDeletePost }) {
  // const [mesto, setMesto] = React.useState("");
  // const [link, setLink] = React.useState("");

  // function handleChangeInputMesto(e) {
  //   setMesto(e.target.value);
  // }

  // function handleChangeInputLink(e) {
  //   setLink(e.target.value);
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();

  //   onAddPost({
  //     mesto,
  //     link,
  //   });

  //   onClose();
  //   setMesto("");
  //   setLink("");
  // }
  function handleSubmit(e) {
    e.preventDefault();

    onDeletePost(card);

    onClose();
  }

  return (
    <PopupWithForm
      name="delete-post"
      title="Вы уверены?"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
}
