// Объявляем переменные
const popupElement = document.querySelector('.popup');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button');

const formElement = document.querySelector('.popup__content');
const nameInput = formElement.querySelector('.popup__name-input');
const jobInput = formElement.querySelector('.popup__job-input');

let Name = document.querySelector('.profile__name');
let Job = document.querySelector('.profile__job');

// Подключаем открывание и закрывание popup
const openPopup = function() {
  popupElement.classList.add('popup_opened');
}

const closePopup = function() {
  nameInput.value = Name.textContent;
  jobInput.value = Job.textContent;

  popupElement.classList.remove('popup_opened')
}

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);

// Подключаем редактирование данных профиля через поля ввода в окне popup
function formSubmitHandler (evt) {
  evt.preventDefault();
  
  let newNameInput = nameInput.value;
  let newJobInput = jobInput.value;

  Name.textContent = newNameInput;
  Job.textContent = newJobInput;

  popupElement.classList.remove('popup_opened')
}

formElement.addEventListener('submit', formSubmitHandler);
