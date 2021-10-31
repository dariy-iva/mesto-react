import React from "react";

export default function PopupWithForm(props) {
  return (
    <div className={`popup popup_content_form-${props.name} ${props.isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>
        <form action="#" name={props.name} className={`popup__form popup__form_contain_${props.name}`}>
          {props.children}
          <button type="submit" className="popup__submit-button">Сохранить</button>
          <button type="reset" className="popup__reset-button" onClick={props.onClose}></button>
        </form>
      </div>
    </div>
  );
}