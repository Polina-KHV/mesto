import './index.css';

import { api } from '../components/Api.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import {
  cardGridSelector,
  validationConfig,
  profileForm,
  cardForm,
  profileNameSelector,
  profileJobSelector,
  profileAvatarSelector,
  popupProfileInfoSelector,
  popupProfileInfoOpenButtonElement,
  popupPlaceAdditionSelector,
  popupPlaceAdditionOpenButtonElement,
  popupCardSelector,
  cardSelector,
  popupAvatarUpdateSelector,
  popupAvatarUpdateOpenButtonElement,
  popupWithConfirmationSelector,
  avatarForm
} from '../utils/constants.js'



// Валидируем формы
// Валидируем форму обновления аватара
const avatarFormValidator = new FormValidator(validationConfig, avatarForm);
avatarFormValidator.enableValidation();

// Валидируем форму данных профиля
const profileFormValidator = new FormValidator(validationConfig, profileForm);
profileFormValidator.enableValidation();

// Валидируем форму добавления карточки
const cardFormValidator = new FormValidator(validationConfig, cardForm);
cardFormValidator.enableValidation();



// UserInfo
// Создаем экземпляр класса UserInfo
const currentUserInfo = new UserInfo({
  nameSelector: profileNameSelector,
  jobSelector: profileJobSelector,
  avatarSelector: profileAvatarSelector,
});



// Подгружаем информацию с бэкенда:
// Информация о пользователе и массив первоначальных карточек
let userId;

Promise.all([api.getUserInfo(), api.getInitialCards()])
.then((data) => {
  currentUserInfo.setInitialUserInfo(data[0]);
  userId = currentUserInfo.getUserId();
  cardGrid.renderItems(data[1]);
})
.catch((err) => {
  console.log(err);
});



// Popup Avatar Update
// Создаем экземпляр класса Popup Avatar Update
const popupAvatarUpdate = new PopupWithForm(popupAvatarUpdateSelector, {
  handleFormSubmit: (data) => {
  return api.updateUserAvatar(data)
  .then((data) => {
    currentUserInfo.setUserAvatar({
      avatar: data.avatar,
    })
  })
  .catch((err) => {
    console.log(err);
  })}
});

popupAvatarUpdate.setEventListeners();

// Добавляем обработчик событий для открывания Popup Avatar Update
popupAvatarUpdateOpenButtonElement.addEventListener('click', function() {

  avatarFormValidator.deactivateSubmitButton();

  popupAvatarUpdate.open();
});



// Popup Profile Info
// Создаем экземпляр класса Popup Profile Info
const popupProfileInfo = new PopupWithForm(popupProfileInfoSelector, {
  handleFormSubmit: (data) => {
  return api.updateUserInfo(data)
  .then((data) => {
    currentUserInfo.setUserInfo({
      name: data.name,
      job: data.about
    })
  })
  .catch((err) => {
    console.log(err);
  })}
});

popupProfileInfo.setEventListeners();

// Добавляем обработчик событий для открывания Popup Profile Info 
popupProfileInfoOpenButtonElement.addEventListener('click', function() {

  profileFormValidator.updateValidation();

  const profileInfo = currentUserInfo.getUserInfo();
  
  popupProfileInfo.setInputValues(profileInfo);

  popupProfileInfo.open();
});



// Popup Place Addition
// Создаем экземпляр класса Popup Place Addition
const popupPlaceAddition = new PopupWithForm(popupPlaceAdditionSelector, {
  handleFormSubmit: (data) => {
  return api.addNewCard(data)
  .then((data) => {
    const cardData = {
      link: data.link,
      name: data.name,
      likes: [],
      owner: data.owner,
      _id: data._id
    }
    cardGrid.renderer(cardData)
  })

}
});

popupPlaceAddition.setEventListeners();

// Добавляем обработчик событий для открывания Popup Place Addition
popupPlaceAdditionOpenButtonElement.addEventListener('click', function() {

  cardFormValidator.deactivateSubmitButton();

  popupPlaceAddition.open();
});



// Popup With Confirmation
// Создаем экземпляр класса Popup With Confirmation
const popupWithConfirmation = new PopupWithConfirmation(popupWithConfirmationSelector);

popupWithConfirmation.setEventListeners();



// Popup Card
// Создаем экземпляр класса Popup Card
const popupCard = new PopupWithImage(popupCardSelector);
popupCard.setEventListeners();

// Прописываем алгоритм создания новых карточек
function createNewCard(cardData) {
  const card = new Card(cardSelector, cardData, userId, {
    handleCardClick: () => popupCard.open(cardData),
    handleDeleteButtonClick: () => {
      popupWithConfirmation.open();
      popupWithConfirmation.addConfirmationListener({
        handleDeleteConfirmation: () => {
          api.deleteCard(cardData._id)
          .then(() => card.removeCard())
          .catch((err) => {
          console.log(err);
          })
          .finally(() => popupWithConfirmation.close())
        }
      })
    },
    handleLikeButtonClick: () => {
      if(card.isLiked()) {
        api.deleteLike(cardData._id)
        .then((data) => {
          card.toggleLikeButton();
          card.updateLikeAmount(data.likes)
        })
        .catch((err) => {
          console.log(err);
          })
      } else if(!card.isLiked()) {
        api.putLike(cardData._id)
        .then((data) => {
          card.toggleLikeButton();
          card.updateLikeAmount(data.likes)
        })
        .catch((err) => {
          console.log(err);
          })
      }
    }
  });

  return card.createCard();
};



// CardGrid
// Прописываем алгоритм добавления карточек в CardGrid
const cardGrid = new Section({
    renderer: (item) => {
    const cardElement = createNewCard(item);
    
    cardGrid.addItem(cardElement);
  }
}, cardGridSelector);