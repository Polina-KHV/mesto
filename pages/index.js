import Section from '../components/Section.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import {
  cardGridArray,
  cardGridSelector,
  validationConfig,
  profileForm,
  cardForm,
  profileNameSelector,
  profileJobSelector,
  popupProfileInfoSelector,
  popupProfileInfoOpenButtonElement,
  nameInput,
  jobInput,
  popupPlaceAdditionSelector,
  popupPlaceAdditionOpenButtonElement,
  popupCardSelector,
  cardSelector
} from '../utils/constants.js'



// Валидируем формы
// Валидируем форму данных профиля
const profileFormValidator = new FormValidator(validationConfig, profileForm);
profileFormValidator.enableValidation();

// Валидируем форму добавления карточки
const cardFormValidator = new FormValidator(validationConfig, cardForm);
cardFormValidator.enableValidation();



// Popup Profile Info
// Получаем актуальную информацию о пользователе
const currentUserInfo = new UserInfo({
  nameSelector: profileNameSelector,
  jobSelector: profileJobSelector
});

// Создаем экземпляр класса Popup Profile Info
const popupProfileInfo = new PopupWithForm(popupProfileInfoSelector, {
  handleFormSubmit: (data) =>
  currentUserInfo.setUserInfo({
    name: data.name,
    job: data.job
  })
});

popupProfileInfo.setEventListeners();

// Добавляем обработчик событий для открывания Popup Profile Info 
popupProfileInfoOpenButtonElement.addEventListener('click', function() {

  profileFormValidator.updateValidation();

  const profileInfo = currentUserInfo.getUserInfo();
  
  nameInput.value = profileInfo.name;
  jobInput.value = profileInfo.job;

  popupProfileInfo.open();
});



// Popup Place Addition
// Создаем экземпляр класса Popup Place Addition
const popupPlaceAddition = new PopupWithForm(popupPlaceAdditionSelector, {
  handleFormSubmit: (data) => {
  const cardData = {
    source: data.link,
    description: data.place,
    name: data.place
  }
  newCard._renderer(cardData)
}
});

popupPlaceAddition.setEventListeners();

// Добавляем обработчик событий для открывания Popup Place Addition
popupPlaceAdditionOpenButtonElement.addEventListener('click', function() {

  cardFormValidator.deactivateSubmitButton();

  popupPlaceAddition.open();
});



// Popup Card
// Создаем экземпляр класса Popup Card
const popupCard = new PopupWithImage(popupCardSelector);
popupCard.setEventListeners();

// Прописываем алгоритм создания новых карточек
function createNewCard(cardData) {
  const card = new Card(cardSelector, cardData, {
    handleCardClick: () => popupCard.open(cardData)
  });

  return card.createCard();
};



// Card
// Создаем новую карточку
const newCard = new Section({
  renderer: (cardData) => {
    const card = createNewCard(cardData);
    newCard.addItem(card);
  }
}, cardGridSelector);

// Создаем карточки первоначального массива cardGridArray
const initialCardGrid = new Section({
  items: cardGridArray,
  renderer: (item) => {
    const card = new Card(cardSelector, item, {
      handleCardClick: () => {
        popupCard.open(item)
      }
    });

    const cardElement = card.createCard();
    initialCardGrid.addItem(cardElement)
  }
}, cardGridSelector);

initialCardGrid.renderItems();