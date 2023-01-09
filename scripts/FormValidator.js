// Создаем класс FormValidator
export class FormValidator {

  constructor(list, formElement) {
    this._formElement = formElement;

    this._inputSelector = list.inputSelector;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._submitButton = this._formElement.querySelector(list.submitButtonSelector);
    this._inputErrorClass = list.inputErrorClass;
    this._errorClass = list.errorClass;
  }


  // Показываем сообщение с ошибкой при некорректном заполнении инпутов
  _showInputError = (input, errorMessage) => {
    const errorElement = this._formElement.querySelector(`.${input.id}-error`);
    input.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass)
  };

  // Убираем сообщение с ошибкой при корректном заполнении инпутов
  _hideInputError = (input, errorMessage) => {
    const errorElement = this._formElement.querySelector(`.${input.id}-error`);
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

  // Делаем кнопку сабмита неактивной
  _disableSubmitButton = (submitButton) => {
    submitButton.setAttribute('disabled', true)
  };

  // Выключаем кнопку сабмита
  deactivateSubmitButton() {
    const submitButton = this._submitButton;
    this._disableSubmitButton(submitButton)
  }

  // Делаем кнопку сабмита активной
  _ableSubmitButton = (submitButton) => {
    submitButton.removeAttribute('disabled')
  };

  // Переключаем стили кнопок сабмита в соответствие с валидностью формы
  _toggleSubmitButton = (inputList, submitButton) => {
    if(this._hasInvalidInput(inputList)) {
      this._disableSubmitButton(submitButton)
    } else {
      this._ableSubmitButton(submitButton)
    }
  };

  // Добавляем инпутам обработчик событий
  _setEventListeners = () => {
    this._toggleSubmitButton(this._inputList, this._submitButton);

    this._inputList.forEach((input) => {
      input.addEventListener('input', () => {
        this._isValid(input);

        this._toggleSubmitButton(this._inputList, this._submitButton)
      })
    })
  };

  // Добавляем валидацию всех форм на странице
  enableValidation() {
    this._formElement.addEventListener('submit', function(evt) {
      evt.preventDefault();
    });

    this._setEventListeners()
  }

  // Убираем ошибки инпутов при повторном открытии попапа редактирования данных профиля
  updateValidation() {
    this._ableSubmitButton(this._submitButton);

    this._inputList.forEach((input) => {
      this._hideInputError(input, input.validationMessage)
    })
  }
}