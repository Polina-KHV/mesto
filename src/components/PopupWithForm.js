import Popup from './Popup.js';

export default class PopupWithForm extends Popup {

  constructor(popupSelector, {handleFormSubmit}) {
    super(popupSelector);
    
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = this._form.querySelectorAll('.popup__input');
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
  
      this._handleFormSubmit(this._getInputValues());
  
      this.close();
    });
  }
}