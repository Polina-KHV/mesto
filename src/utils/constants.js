// Импорт изображений для массива
const altaiImage = new URL('../images/card-grid/altai.png', import.meta.url);
const baikalImage = new URL('../images/card-grid/baikal.png', import.meta.url);
const elbrusImage = new URL('../images/card-grid/elbrus.png', import.meta.url);
const kamchatkaImage = new URL('../images/card-grid/kamchatka.png', import.meta.url);
const kareliaImage = new URL('../images/card-grid/karelia.png', import.meta.url);
const sochiImage = new URL('../images/card-grid/sochi.png', import.meta.url);

// Массив первоначальных карточек мест
export const cardGridArray = [
  {
    source: altaiImage,
    description: 'Алтай. Горное озеро.Каменный склон. Лес на берегу.',
    name: 'Алтай'
  },
  {
    source: baikalImage,
    description: 'Байкал. Остров Огой.Заледеневшее озеро. Скала.',
    name: 'Байкал'
  },
  {
    source: elbrusImage,
    description: 'Эльбрус. Вершины. Горный массив. Река в долине.',
    name: 'Эльбрус'
  },
  {
    source: kamchatkaImage,
    description: 'Камчатка. Вулкан в облаках. Черный склон со снегом.',
    name: 'Камчатка'
  },
  {
    source: kareliaImage,
    description: 'Карелия. Скалистый берег реки. Сосновый лес.',
    name: 'Карелия'
  },
  {
    source: sochiImage,
    description: 'Сочи. Горный массив в зелени. Серпантин. Туман.',
    name: 'Сочи'
  }
];


// Объявляем переменные
export const popupProfileInfoSelector = '.popup_type_profile-information';
export const popupProfileInfoOpenButtonElement = document.querySelector('.profile__edit-button');

export const popupPlaceAdditionSelector = '.popup_type_place-addition';
export const popupPlaceAdditionOpenButtonElement = document.querySelector('.profile__add-button');

export const profileForm = document.forms['profile-information'];
export const nameInput = profileForm.elements['name'];
export const jobInput = profileForm.elements['job'];

export const profileNameSelector = '.profile__name';
export const profileJobSelector = '.profile__job';

export const cardGridSelector = '.card-grid__container';
export const cardForm = document.forms['place-addition'];
export const cardSelector = '#card-template'
export const popupCardSelector = '.popup_type_card'

export const validationConfig = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};