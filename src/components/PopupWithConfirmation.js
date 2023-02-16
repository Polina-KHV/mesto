import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {

  constructor(popupSelector) {
    super(popupSelector);

    this._cardId = "";
    this._confirmButton = this._popup.querySelector('.popup__confirm-button');
  }

  open(data) {
    this._cardId = data._id; 

    super.open()
  };



  setEventListeners({handleDeleteConfirmation}) {
    super.setEventListeners();
    
    this._confirmButton.addEventListener('mousedown', () => {
      handleDeleteConfirmation(),
      this.close();
    });
  }
}

