// Прописываем алгоритм редактирования данных профиля

// Объявляем переменные
const popupProfileInfoElement = document.querySelector('.popup_type_profile-information');
const popupProfileInfoOpenButtonElement = document.querySelector('.profile__edit-button');
const popupProfileInfoCloseButtonElement = popupProfileInfoElement.querySelector('.popup__close-button_type_profile-information');

const formProfileInfoElement = popupProfileInfoElement.querySelector('.popup__content');
const nameInput = formProfileInfoElement.querySelector('.popup__input_type_name');
const jobInput = formProfileInfoElement.querySelector('.popup__input_type_job');

let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

// Подключаем открывание и закрывание popup
const openPopupProfileInfo = function() {
  popupProfileInfoElement.classList.add('popup_opened');

  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
};

const closePopupProfileInfo = function() {
  popupProfileInfoElement.classList.remove('popup_opened')
};

popupProfileInfoOpenButtonElement.addEventListener('click', openPopupProfileInfo);
popupProfileInfoCloseButtonElement.addEventListener('click', closePopupProfileInfo);

// Подключаем редактирование данных профиля через поля ввода в окне popup
function formProfileInfoSubmitHandler (evt) {
  evt.preventDefault();
  
  let newNameInput = nameInput.value;
  let newJobInput = jobInput.value;

  profileName.textContent = newNameInput;
  profileJob.textContent = newJobInput;

  closePopupProfileInfo()
};

formProfileInfoElement.addEventListener('submit', formProfileInfoSubmitHandler);





// Прописываем алгоритм добавления карточек

// Объявляем переменные
const popupPlaceAddElement = document.querySelector('.popup_type_place-addition');
const popupPlaceAddOpenButtonElement = document.querySelector('.profile__add-button');
const popupPlaceAddCloseButtonElement = popupPlaceAddElement.querySelector('.popup__close-button_type_place-addition');

const formPlaceAddElement = popupPlaceAddElement.querySelector('.popup__content');
const placeInput = popupPlaceAddElement.querySelector('.popup__input_type_place');
const linkInput = popupPlaceAddElement.querySelector('.popup__input_type_link');

// Подключаем открывание и закрывание popup
const openPopupPlaceAdd = function() {
  popupPlaceAddElement.classList.add('popup_opened');

  placeInput.value = '';
  linkInput.value = '';
}

const closePopupPlaceAdd = function() {
  popupPlaceAddElement.classList.remove('popup_opened')
}

popupPlaceAddOpenButtonElement.addEventListener('click', openPopupPlaceAdd);
popupPlaceAddCloseButtonElement.addEventListener('click', closePopupPlaceAdd);

// Создаем новые карточки
function formPlaceAddSubmitHandler (evt) {
  evt.preventDefault();
  
  let newPlaceInput = placeInput.value;
  let newLinkInput = linkInput.value;

  const newCard = {
    source: newLinkInput,
    description: 'Здесь должна быть красивая картинка, но что-то пошло не так. Проверьте правильность написания ссылки на картинку.',
    name: newPlaceInput
  };

  const element = createElement(newCard);
  cardGridElement.prepend(element);

  closePopupPlaceAdd()
}

formPlaceAddElement.addEventListener('submit', formPlaceAddSubmitHandler);





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
]

// Прописываем алгоритм передачи данных из массива в карточки
const cardGridElement = document.querySelector('.card-grid__container');
const cardTemplate = document.querySelector('#card-template').content.querySelector('.card-grid__item');

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

  const popupCardOpenButtonElement = card.querySelector('.card-grid__image');
  popupCardOpenButtonElement.addEventListener('click', openPopupCard);

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
}





// Прописываем алгоритм открывания popup с картинкой

// Объявляем переменные
const popupCardElement = document.querySelector('.popup_type_card');
const popupCardCloseButtonElement = popupCardElement.querySelector('.popup__close-button_type_image');


// Подключаем открывание и закрывание popup с картинкой
function openPopupCard (evt) {
  popupCardElement.classList.add('popup_opened');

  const popupCardImage = popupCardElement.querySelector('.popup__image');
  const popupCardImageCaption = popupCardElement.querySelector('.popup__image-caption');

  const cardImageSource = evt.target.closest('.card-grid__image').getAttribute('src');
  const cardImageDescription = evt.target.closest('.card-grid__image').getAttribute('alt');

  popupCardImage.setAttribute('src', cardImageSource);
  popupCardImage.setAttribute('alt', cardImageDescription);
  popupCardImageCaption.textContent = evt.target.closest('.card-grid__item').textContent;
}

function closePopupCard () {
  popupCardElement.classList.remove('popup_opened')
}


popupCardCloseButtonElement.addEventListener('click', closePopupCard);
