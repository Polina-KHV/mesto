// Показываем сообщение с ошибкой при некорректном заполнении инпутов
function showInputError(form, input, errorMessage, list) {
  const errorElement = form.querySelector(`.${input.id}-error`);
  input.classList.add(list.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(list.errorClass)
};

// Убираем сообщение с ошибкой при корректном заполнении инпутов
function hideInputError(form, input, errorMessage, list) {
  const errorElement = form.querySelector(`.${input.id}-error`);
  input.classList.remove(list.inputErrorClass);
  errorElement.textContent = '';
  errorElement.classList.remove(list.errorClass)
};

// Валидируем данные, введенные в инпут
function isValid(form, input, list) {
  if(!input.validity.valid) {
    showInputError(form, input, input.validationMessage, list)
  } else {
    hideInputError(form, input, input.validationMessage, list)
  }
};

// Проверяем валидность инпутов
function hasInvalidInput(inputList) {
  return inputList.some(function(input) {
    return !input.validity.valid
  })
};

// Переключаем стили кнопок сабмита в соответствие с валидностью формы
function toggleSubmitButton(inputList, submitButton) {
  if(hasInvalidInput(inputList)) {
    submitButton.setAttribute('disabled', '')
  } else {
    submitButton.removeAttribute('disabled', '')
  }
};


// Добавляем инпутам обработчик событий
function setEventListeners(form, list) {
  const inputList = Array.from(form.querySelectorAll(list.inputSelector));
  const submitButton = form.querySelector(list.submitButtonSelector);

  toggleSubmitButton(inputList, submitButton);

  inputList.forEach(function(input) {
    input.addEventListener('input', function() {
      isValid(form, input, list);

      toggleSubmitButton(inputList, submitButton)
    })
  })
};

// Добавляем валидацию всех форм на странице
function enableValidation(list) {
  const formList = Array.from(document.querySelectorAll(list.formSelector));
  formList.forEach(function(form) {
    form.addEventListener('submit', function(evt) {
      evt.preventDefault;
    });
    setEventListeners(form, list)
  })
};

//enableValidation()

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}); 