import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import PopupWithForm from './PopupWithForm/PopupWithForm';
import ImagePopup from './ImagePopup/ImagePopup';

export default function App() {
	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
	const [isAddPostPopupOpen, setIsAddPostPopupOpen] = React.useState(false);
	const [isEditAvatarPopupOpenen, setIsEditAvatarPopupOpen] = React.useState(false);
	const [selectedCard, setselectedCard] = React.useState();

	function handleEditAvatarClick() {
		setIsEditAvatarPopupOpen(!isEditAvatarPopupOpenen);
	}

	function handleEditProfileClick() {
		setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
	}

	function handleAddPostClick() {
		setIsAddPostPopupOpen(!isAddPostPopupOpen);
	}

	function handleCardClick(card) {
		setselectedCard(card);
	}

	function closeAllPopups() {
		setIsEditAvatarPopupOpen(false);
		setIsEditProfilePopupOpen(false);
		setIsAddPostPopupOpen(false);
		setselectedCard();
	}

	return (
		<div className="page">
			<Header />
			<Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPost={handleAddPostClick} onCardClick={handleCardClick} />
			<Footer />
			<PopupWithForm name="edit-profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}
				children={(<fieldset className="popup__fieldset">
					<label className="popup__field">
						<input type="text" className="popup__input popup__input_content_name" placeholder="Имя" name="name" required
							minLength="2" maxLength="40" id="name-input" />
						<span className="popup__error name-input-error"></span>
					</label>
					<label className="popup__field">
						<input type="text" className="popup__input" placeholder="Профессиональная деятельность" id="about-me-input"
							name="about" required minLength="2" maxLength="200" />
						<span className="popup__error about-me-input-error"></span>
					</label>
				</fieldset>)} />
			<PopupWithForm name="add-post" title="Новое место" isOpen={isAddPostPopupOpen} onClose={closeAllPopups}
				children={(<fieldset className="popup__fieldset">
					<label className="popup__field">
						<input type="text" className="popup__input" placeholder="Название" id="place-input" name="mesto" required
							minLength="2" maxLength="30" />
						<span className="popup__error place-input-error"></span>
					</label>
					<label className="popup__field">
						<input type="url" className="popup__input" placeholder="Ссылка на картинку" id="link-input" name="link"
							required />
						<span className="popup__error link-input-error"></span>
					</label>
				</fieldset>)} />
			<PopupWithForm name="delete-post" title="Вы уверены?" />
			<PopupWithForm name="edit-avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpenen} onClose={closeAllPopups}
				children={(<fieldset className="popup__fieldset">
					<label className="popup__field">
						<input type="url" className="popup__input" placeholder="Ссылка на аватар" id="avatar-input" name="avatar"
							required />
						<span className="popup__error avatar-input-error"></span>
					</label>
				</fieldset>)} />
			<ImagePopup card={selectedCard} onClose={closeAllPopups}/>
		</div>
	);
}