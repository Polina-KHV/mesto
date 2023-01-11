// Импортируем файлы
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { cardGridArray } from './cardGridArray.js'


// Объявляем переменные
const popupProfileInfoElement = document.querySelector('.popup_type_profile-information');
const popupProfileInfoOpenButtonElement = document.querySelector('.profile__edit-button');

const popupPlaceAddElement = document.querySelector('.popup_type_place-addition');
const popupPlaceAddOpenButtonElement = document.querySelector('.profile__add-button');

const profileForm = document.forms['profile-information'];
const nameInput = profileForm.elements['name'];
const jobInput = profileForm.elements['job'];

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

const cardGridElement = document.querySelector('.card-grid__container');

const cardForm = document.forms['place-addition'];
const placeInput = cardForm.elements['place'];
const linkInput = cardForm.elements['link'];

export const popupCardElement = document.querySelector('.popup_type_card');
export const popupCardImage = popupCardElement.querySelector('.popup__image');
export const popupCardImageCaption = popupCardElement.querySelector('.popup__image-caption');

const validationConfig = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};



//Валидация форм
//Прописываем алгоритм валидации форм
function formValidation(form) {
  return new FormValidator(validationConfig, form)
};

// Валидируем форму данных профиля
const profileFormValidator = formValidation(profileForm);
profileFormValidator.enableValidation();

// Валидируем форму добавления карточки
const cardFormValidator = formValidation(cardForm);
cardFormValidator.enableValidation();



//Popup
// Прописываем открывание и закрывание popup
export function openPopup(popup) {

  popup.classList.add('popup_opened');

  popup.addEventListener('mousedown', closePopupByEvent);
  document.addEventListener('keydown', closePopupByKey);
};

// Прописываем закрывание popup
function closePopup(popup) {
  popup.classList.remove('popup_opened')

  popup.removeEventListener('mousedown', closePopupByEvent)
  document.removeEventListener('keydown', closePopupByKey)
};

function closePopupByEvent(evt) {
  if(evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close-button')) {
    closePopup(evt.currentTarget)
  }
}

function closePopupByKey(evt) {
  if(evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup)
  }
};



//Popup Profile Info
// Добавляем обработчик событий для открывания Popup Profile Info 
popupProfileInfoOpenButtonElement.addEventListener('click', function() {

  profileFormValidator.updateValidation();

  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;

  openPopup(popupProfileInfoElement);
  });

// Добавляем редактирование данных профиля в Popup Profile Info
function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  
  const newNameInput = nameInput.value;
  const newJobInput = jobInput.value;

  profileName.textContent = newNameInput;
  profileJob.textContent = newJobInput;

  closePopup(popupProfileInfoElement)
};

profileForm.addEventListener('submit', handleProfileFormSubmit);



//Popup Place Addition
// Добавляем обработчик событий для открывания Popup Place Addition
popupPlaceAddOpenButtonElement.addEventListener('click', function() {

  cardFormValidator.deactivateSubmitButton();

  openPopup(popupPlaceAddElement)
});

// Прописываем алгоритм создания новых карточек
function createNewCard(cardData) {
  const card = new Card('#card-template', cardData);
  return card.createCard();
};

// Создаем новые карточки в Popup Place Addition
function handleCardFormSubmit (evt) {
  evt.preventDefault();
  
  const newPlaceInput = placeInput.value;
  const newLinkInput = linkInput.value;

  const newCard = {
    source: newLinkInput,
    description: newPlaceInput,
    name: newPlaceInput
  };

  cardGridElement.prepend(createNewCard(newCard));

  evt.target.reset();

  closePopup(popupPlaceAddElement)
};

cardForm.addEventListener('submit', handleCardFormSubmit);

// Создаем карточки в Popup Place Addition из массива
cardGridArray.forEach((item) => {
  cardGridElement.append(createNewCard(item));
});



//_______@@@_____________@@@________
//____@_______@_______@______@______
//___@__________@___@_________@_____
//___@____________@____________@____
//____@________СПАСИБО_______ @_____
//_____@_________ЗА__________@______
//______ @______РЕВЬЮ______@________
//________ @_____________@__________
//___________@_________@____________
//_____________@_____@______________
//________________@_________________