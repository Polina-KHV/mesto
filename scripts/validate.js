// Показываем сообщение с ошибкой при некорректном заполнении инпутов
function showInputError(form, input, errorMessage) {
  const errorElement = form.querySelector(`.${input.id}-error`);
  input.classList.add('popup__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-error_active')
};

// Убираем сообщение с ошибкой при корректном заполнении инпутов
function hideInputError(form, input, errorMessage) {
  const errorElement = form.querySelector(`.${input.id}-error`);
  input.classList.remove('popup__input_type_error');
  errorElement.textContent = '';
  errorElement.classList.remove('popup__input-error_active')
};

// Валидируем данные, введенные в инпут
function isValid(form, input) {
  if(!input.validity.valid) {
    showInputError(form, input, input.validationMessage)
  } else {
    hideInputError(form, input, input.validationMessage)
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
  if (hasInvalidInput(inputList)) {
    submitButton.setAttribute('disabled', '')
  } else {
    submitButton.removeAttribute('disabled', '')
  }
};


// Добавляем инпутам обработчик событий
function setEventListeners(form) {
  const inputList = Array.from(form.querySelectorAll('.popup__input'));
  const submitButton = form.querySelector('.popup__submit-button');

  toggleSubmitButton(inputList, submitButton);

  inputList.forEach(function(input) {
    input.addEventListener('input', function() {
      isValid(form, input);

      toggleSubmitButton(inputList, submitButton)
    })
  })
};

// Добавляем валидацию всех форм на странице
function enableValidation() {
  const formList = Array.from(document.querySelectorAll('.form'));
  formList.forEach(function(form) {
    form.addEventListener('submit', function(evt) {
      evt.preventDefault;
    });
    setEventListeners(form)
  })
};

enableValidation()