
// Прописываем алгоритм редактирования данных профиля
// Объявляем переменные
const popupElement = document.querySelector('.popup');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button');

const formElement = document.querySelector('.popup__content');
const nameInput = formElement.querySelector('.popup__input_type_name');
const jobInput = formElement.querySelector('.popup__input_type_job');

let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

// Подключаем открывание и закрывание popup
const openPopup = function() {
  popupElement.classList.add('popup_opened');

  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

const closePopup = function() {
  popupElement.classList.remove('popup_opened')
}

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);

// Подключаем редактирование данных профиля через поля ввода в окне popup
function formSubmitHandler (evt) {
  evt.preventDefault();
  
  let newNameInput = nameInput.value;
  let newJobInput = jobInput.value;

  profileName.textContent = newNameInput;
  profileJob.textContent = newJobInput;

  closePopup()
}

formElement.addEventListener('submit', formSubmitHandler);



// Создаем массив карточек
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
  },
]

const cardGridElement = document.querySelector('.card-grid__container');
const cardTemplate = document.querySelector('#card-template').content.querySelector('.card-grid__item');

function createElement(item) {

  const card = cardTemplate.cloneNode(true);

  const cardImage = card.querySelector('.card-grid__image');
  const cardName = card.querySelector('.card-grid__name');

  cardImage.setAttribute('src', item.source);
  cardImage.setAttribute('alt', item.description);
  cardName.textContent = item.name;

  return card

}

cardGridArray.forEach(function(item) {
  const element = createElement(item)
  cardGridElement.append(element);
}) 