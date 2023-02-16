
export default class Card {

  constructor(templateSelector, data, userId, {handleCardClick, handleDeleteButtonClick, handleLikeButtonClick}) {
    this._element = document.querySelector(templateSelector).content.children[0].cloneNode(true);

    this._likeButton = this._element.querySelector('.card-grid__like-button');
    this._deleteButton = this._element.querySelector('.card-grid__delete-button');
    this._image = this._element.querySelector('.card-grid__image');
    this._likesAmount = this._element.querySelector('.card-grid__likes-amount');

    this._source = data.link;
    this._description = data.name;
    this._name = data.name;
    this._owner = data.owner;
    this._likes = data.likes;
    this._userId = userId;

    this.handleCardClick = handleCardClick;
    this.handleDeleteButtonClick = handleDeleteButtonClick;
    this.handleLikeButtonClick = handleLikeButtonClick;
  }

  // Прописываем алгоритм добавления карточки
  _getTemplate() {
    return this._element;
  }

  // Прописываем лайк карточек
  toggleLikeButton(likes) {
    this._likeButton.classList.toggle('card-grid__like-button_active');
    this._likesAmount.textContent = likes.length;
  }
  
  // Проверка наличия лайка
  isLiked() {
    return this._likeButton.classList.contains('card-grid__like-button_active')
  }

  // Прописываем удаление карточек
  removeCard() {
    this._element.remove()
  }

  // Прописываем слушатели событий
  _setEventListeners() {
    this._likeButton.addEventListener('click', () => this.handleLikeButtonClick());

    if(this._owner._id === this._userId) {
      this._deleteButton.addEventListener('click', () => this.handleDeleteButtonClick());
    }
    
    this._image.addEventListener('click', () => this.handleCardClick())
  }

    // Создаем карточку
    createCard() {
      this._element = this._getTemplate();
  
      this._setEventListeners();
  
      this._image.src = this._source;
      this._image.alt = this._description;
      this._element.querySelector('.card-grid__name').textContent = this._name;
      this._likesAmount.textContent = this._likes.length;
      
      if(this._owner._id !== this._userId) {
        this._deleteButton.remove()
      }
      
      return this._element
    }
};

