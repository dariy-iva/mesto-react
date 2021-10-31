import React from "react";

export default function ImagePopup(props) {
  return (
    <div className={`popup popup_content_photo ${props.card && 'popup_opened'}`} id="popup-open-photo">
      <div className="popup__photo-box">
        <img src={props.card ? props.card.link : '#'} alt={props.card ? props.card.name : ''} className="popup__photo" />
        <p className="popup__caption-photo">{props.card ? props.card.name : ''}</p>
        <button type="button" className="popup__reset-button" onClick={props.onClose}></button>
      </div>
    </div>
  );
}