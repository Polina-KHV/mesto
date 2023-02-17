import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {

  constructor(popupSelector, ) {
    super(popupSelector);

    this._handleDeleteConfirmation = () => {};
    this._confirmButton = this._popup.querySelector('.popup__confirm-button');
  }

  close() {
    super.close();
  }

  addConfirmationListener({handleDeleteConfirmation}) {
    this._handleDeleteConfirmation = handleDeleteConfirmation
  }

  setEventListeners() {
    super.setEventListeners();
    
    this._confirmButton.addEventListener('mousedown', () => {
      this._handleDeleteConfirmation()
    })
  }
}

