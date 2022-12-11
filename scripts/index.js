// Объявляем переменные
const popupProfileInfoElement = document.querySelector('.popup_type_profile-information');
const popupProfileInfoOpenButtonElement = document.querySelector('.profile__edit-button');

const popupPlaceAddElement = document.querySelector('.popup_type_place-addition');
const popupPlaceAddOpenButtonElement = document.querySelector('.profile__add-button');

const popupCloseButtons = document.querySelectorAll('.popup__close-button');
const popupList = document.querySelectorAll('.popup');

const profileForm = document.forms['profile-information'];
const nameInput = profileForm.elements['name'];
const jobInput = profileForm.elements['job'];

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

const cardForm = document.forms['place-addition'];
const placeInput = cardForm.elements['place'];
const linkInput = cardForm.elements['link'];

const cardGridElement = document.querySelector('.card-grid__container');
const cardTemplate = document.querySelector('#card-template').content.querySelector('.card-grid__item');

const popupCardElement = document.querySelector('.popup_type_card');
const popupCardImage = popupCardElement.querySelector('.popup__image');
const popupCardImageCaption = popupCardElement.querySelector('.popup__image-caption');



//Popup
// Прописываем открывание и закрывание popup
function openPopup(popup) {
  popup.classList.add('popup_opened')
};

function closePopup(popup) {
  popup.classList.remove('popup_opened')
};

function closePopupByClickOnBackground(evt) {
  if(evt.target === evt.currentTarget) {
    closePopup(evt.target)
  }
}

// Добавляем обработчик событий для закрывания popup
popupCloseButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', function() {closePopup(popup)})
});

popupList.forEach((popup) => {
  popup.addEventListener('click', closePopupByClickOnBackground)
  document.addEventListener('keydown', function(evt) {
    if(evt.key === 'Escape') {
      closePopup(popup)
    }
  })
})



//Popup Profile Info
// Добавляем обработчик событий для открывания Popup Profile Info 
popupProfileInfoOpenButtonElement.addEventListener('click', function() {openPopup(popupProfileInfoElement)});

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
popupPlaceAddOpenButtonElement.addEventListener('click', function() {openPopup(popupPlaceAddElement)});

// Создаем новые карточки в Popup Place Addition
function handleCardFormSubmit (evt) {
  evt.preventDefault();
  
  const newPlaceInput = placeInput.value;
  const newLinkInput = linkInput.value;

  const newCard = {
    source: newLinkInput,
    description: 'Здесь должна быть красивая картинка, но что-то пошло не так. Проверьте правильность написания ссылки на картинку.',
    name: newPlaceInput
  };

  const element = createElement(newCard);
  cardGridElement.prepend(element);

  evt.target.reset();

  closePopup(popupPlaceAddElement)
};

cardForm.addEventListener('submit', handleCardFormSubmit);



//Карточки мест
// Создаем массив карточек мест
const cardGridArray = [
  {
    source: './images/card-grid/altai.png',
    description: 'Алтай. Горное озеро.Каменный склон. Лес на берегу.',
    name: 'Алтай'
  },
  {
    source: './images/card-grid/baikal.png',
    description: 'Байкал. Остров Огой.Заледеневшее озеро. Скала.',
    name: 'Байкал'
  },
  {
    source: './images/card-grid/elbrus.png',
    description: 'Эльбрус. Вершины. Горный массив. Река в долине.',
    name: 'Эльбрус'
  },
  {
    source: './images/card-grid/kamchatka.png',
    description: 'Камчатка. Вулкан в облаках. Черный склон со снегом.',
    name: 'Камчатка'
  },
  {
    source: './images/card-grid/karelia.png',
    description: 'Карелия. Скалистый берег реки. Сосновый лес.',
    name: 'Карелия'
  },
  {
    source: './images/card-grid/sochi.png',
    description: 'Сочи. Горный массив в зелени. Серпантин. Туман.',
    name: 'Сочи'
  }
];

// Прописываем алгоритм передачи данных из массива в карточки
function createElement(item) {

  const card = cardTemplate.cloneNode(true);

  const cardImage = card.querySelector('.card-grid__image');
  const cardName = card.querySelector('.card-grid__name');

  const likeButton = card.querySelector('.card-grid__like-button');
  likeButton.addEventListener('click', handleLikeButtonClick);

  const deleteBytton = card.querySelector('.card-grid__delete-button');
  deleteBytton.addEventListener('click', handleDeleteButtonClick);

  cardImage.setAttribute('src', item.source);
  cardImage.setAttribute('alt', item.description);
  cardName.textContent = item.name;

  cardImage.addEventListener('click', function() {openPopupCard(item)});

  return card
};

cardGridArray.forEach(function(item) {
  const element = createElement(item);
  cardGridElement.append(element)
});

// Прописываем алгоритм лайка карточек
function handleLikeButtonClick (evt) {
  evt.target.classList.toggle('card-grid__like-button_active')
};

// Прописываем алгоритм удаления карточек
function handleDeleteButtonClick (evt) {
  evt.target.closest('.card-grid__item').remove()
};



//Popup Card Image
// Прописываем открывание и закрывание Popup Card Image
function openPopupCard (item) {
  openPopup(popupCardElement);

  popupCardImage.setAttribute('src', item.source);
  popupCardImage.setAttribute('alt', item.description);
  popupCardImageCaption.textContent = item.name;
};



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