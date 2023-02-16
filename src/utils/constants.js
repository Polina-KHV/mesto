// Объявляем переменные
export const popupProfileInfoSelector = '.popup_type_profile-information';
export const popupProfileInfoOpenButtonElement = document.querySelector('.profile__edit-button');

export const popupPlaceAdditionSelector = '.popup_type_place-addition';
export const popupPlaceAdditionOpenButtonElement = document.querySelector('.profile__add-button');

export const popupAvatarUpdateSelector = '.popup_type_avatar-update';
export const popupAvatarUpdateOpenButtonElement = document.querySelector('.profile__avatar-cover');

export const popupWithConfirmationSelector = '.popup_type_delete-confirmation';

export const avatarForm = document.forms['avatar-update'];
export const profileForm = document.forms['profile-information'];

export const profileNameSelector = '.profile__name';
export const profileJobSelector = '.profile__job';
export const profileAvatarSelector = '.profile__avatar';

export const cardGridSelector = '.card-grid__container';
export const cardForm = document.forms['place-addition'];
export const cardSelector = '#card-template';
export const popupCardSelector = '.popup_type_card';

export const validationConfig = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

