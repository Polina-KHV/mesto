// Создаем класс FormValidator
export class FormValidator {

  constructor(list, formElement) {
    this._formElelment = formElement;

    this._inputSelector = list.inputSelector;
    this._submitButton = this._formElelment.querySelector(list.submitButtonSelector);
    this._inputErrorClass = list.inputErrorClass;
    this._errorClass = list.errorClass;
  }


  // Показываем сообщение с ошибкой при некорректном заполнении инпутов
  _showInputError = (input, errorMessage) => {
    const errorElement = this._formElelment.querySelector(`.${input.id}-error`);
    input.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass)
  };

  // Убираем сообщение с ошибкой при корректном заполнении инпутов
  _hideInputError = (input, errorMessage) => {
    const errorElement = this._formElelment.querySelector(`.${input.id}-error`);
    input.classList.remove(this._inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(this._errorClass)
  };

  // Валидируем данные, введенные в инпут
  _isValid = (input) => {
    if(!input.validity.valid) {
      this._showInputError(input, input.validationMessage)
    } else {
      this._hideInputError(input, input.validationMessage)
    }
  };

  // Проверяем валидность инпутов
  _hasInvalidInput = (inputList) => {
    return inputList.some(function(input) {
      return !input.validity.valid
    })
  };

  // Переключаем стили кнопок сабмита в соответствие с валидностью формы
  _toggleSubmitButton = (inputList, submitButton) => {
    if(this._hasInvalidInput(inputList)) {
      submitButton.setAttribute('disabled', '')
    } else {
      submitButton.removeAttribute('disabled', '')
    }
  };

  // Добавляем инпутам обработчик событий
  _setEventListeners = () => {
    const inputList = Array.from(this._formElelment.querySelectorAll(this._inputSelector));
    const submitButton = this._submitButton;

    this._toggleSubmitButton(inputList, submitButton);

    inputList.forEach((input) => {
      input.addEventListener('input', () => {
        this._isValid(input);

        this._toggleSubmitButton(inputList, submitButton)
      })
    })
  };

  // Добавляем валидацию всех форм на странице
  enableValidation() {
    this._formElelment.addEventListener('submit', function(evt) {
      evt.preventDefault
    });

    this._setEventListeners()
  }
}