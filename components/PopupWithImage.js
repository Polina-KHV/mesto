import Popup from './Popup.js';

export default class PopupWithImage extends Popup {

  constructor(popupSelector) {
    super(popupSelector);

    this._image = this._popup.querySelector('.popup__image');
    this._caption = this._popup.querySelector('.popup__image-caption');
  }

  open(data) {
    this._image.src = data.source;
    this._image.alt =  data.description;
    this._caption.textContent = data.name;
    
    super.open()
  };
}