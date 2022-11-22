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