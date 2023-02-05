export default class Popup {

  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);

    this._handleButtonClose = this._handleButtonClose.bind(this);
    this._handleBackgroundClose = this._handleBackgroundClose.bind(this);
    this._handleEscClose = this._handleEscClose.bind(this)
  };

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close()
    }
  };

  _addEscEventListener() {
    document.addEventListener('keydown', this._handleEscClose);
  };

  _removeEscEventListener() {
    document.removeEventListener('keydown', this._handleEscClose);
  };

  open() {
    this._popup.classList.add('popup_opened');
    this._addEscEventListener();
  };

  close() {
    this._popup.classList.remove('popup_opened');
    this._removeEscEventListener();
  };

  _handleButtonClose(evt) {
    if (evt.target.classList.contains('popup__close-button')) {
      this.close()
    }
  };

  _handleBackgroundClose(evt) {
    if (evt.target.classList.contains('popup_opened')) {
      this.close()
    }
  };

  setEventListeners() {
    this._popup.addEventListener('mousedown', this._handleBackgroundClose);
    this._popup.addEventListener('mousedown', this._handleButtonClose)
  }
}

