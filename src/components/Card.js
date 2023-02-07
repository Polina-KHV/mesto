
export default class Card {

  constructor(templateSelector, data, {handleCardClick}) {
    this._element = document.querySelector(templateSelector).content.children[0].cloneNode(true);

    this._likeButton = this._element.querySelector('.card-grid__like-button');
    this._deleteButton = this._element.querySelector('.card-grid__delete-button');
    this._image = this._element.querySelector('.card-grid__image');

    this._source = data.source;
    this._description = data.description;
    this._name = data.name;

    this.handleCardClick = handleCardClick;
  };

  // Прописываем алгоритм добавления карточки
  _getTemplate() {
    return this._element;
  }

  // Прописываем лайк карточек
  _handleLikeButton() {
    this._likeButton.classList.toggle('card-grid__like-button_active')
  }

  // Прописываем удаление карточек
  _handleDeleteButton() {
    this._element.remove();
    this._element = null
  }

  // Прописываем слушатели событий
  _setEventListeners() {
    this._likeButton.addEventListener('click', () => this._handleLikeButton());

    this._deleteButton.addEventListener('click', () => this._handleDeleteButton());

    this._image.addEventListener('click', () => this.handleCardClick())
  }

    // Создаем карточку
    createCard() {
      this._element = this._getTemplate();
  
      this._setEventListeners();
  
      this._image.src = this._source;
      this._image.alt = this._description;
      this._element.querySelector('.card-grid__name').textContent = this._name;
  
      return this._element
    }
};

