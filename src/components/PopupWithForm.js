import Popup from './Popup.js';

export default class PopupWithForm extends Popup {

  constructor(popupSelector, {handleFormSubmit}) {
    super(popupSelector);
    
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = this._form.querySelectorAll('.popup__input');
    this._submitButton = this._form.querySelector('.popup__submit-button');
    this._handleFormSubmit = handleFormSubmit;
  }

  close() {
    super.close();
    this._form.reset()
  }

  _getInputValues() {
    this._formValues = {};

    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues
  }

  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name]
    })
  }

  setEventListeners() {
    super.setEventListeners();
    
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();

      const initialSubmitButtonText = this._submitButton.textContent;
      this._submitButton.textContent = 'Сохранение...';
      
      this._handleFormSubmit(this._getInputValues())
      .then(() => this.close())
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        this._submitButton.textContent = initialSubmitButtonText;
      }) 
    });
  }
}