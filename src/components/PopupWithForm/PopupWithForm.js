import React from "react";

export default function PopupWithForm(props) {
  const { name, title, children, isOpen, onClose } = props;
  const popupClass = `popup ${isOpen && "popup_opened"}`;
  const formClass = `popup__form popup__form_contain_${name}`;
  return (
    <div className={popupClass}>
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <form name={name} className={formClass}>
          {children}
          <button type="submit" className="popup__submit-button">
            Сохранить
          </button>
          <button
            type="reset"
            className="popup__reset-button"
            onClick={onClose}
          ></button>
        </form>
      </div>
    </div>
  );
}
