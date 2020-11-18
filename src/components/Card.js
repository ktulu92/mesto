class Card {
  constructor(
    cardData,
    cardSelector,
    { handleCardClick, handleLikeClick, handleDeleteIconClick },
    userId
  ) {
    this._data = cardData;
    this._image = cardData.link;
    this._text = cardData.name;
    this._id = cardData._id; //айди карточки
    this._ownerId = cardData.owner._id; //айди создателя карточки
    this._owner = cardData.owner;
    this._likes = cardData.likes;
    this._cardSelector = cardSelector; //селектор темплейта
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteIconClick = handleDeleteIconClick;
    this._userId = userId;
    // this.openDeletePopup = openDeletePopup
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }

  _setEventListeners() {
    //=========================================================== Обработчик события открытия галереи
    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._image, this._text);
    });

    //===========================================================Обработчик события удаления карточки
    this._newCard
      .querySelector(".element__delete-button")
      .addEventListener("click", () => {
        this._handleDeleteIconClick(this._data, this._newCard);
      });
    //===========================================================Обработчик события лайка карточки
    this._newCard
      .querySelector(".element__like-button")
      .addEventListener("click", () => {
        this._handleLikeClick(this);
      });

    //================================================ рендеринг кнопки удаления только для своих карточек
    if (this._owner._id === this._userId) {
      this._newCard
        .querySelector(".element__delete-button")
        .classList.add("element__delete-button_type_visible");
    } else {
      this._newCard
        .querySelector(".element__delete-button")
        .classList.add("element__delete-button_type_hidden");
    }
  }

  render() {
    this._newCard = this._getTemplate();
    this._cardImage = this._newCard.querySelector(".element__image");
    this._cardTitle = this._newCard.querySelector(".element__title");
    this._cardLikes = this._newCard.querySelector(".element__like-count");
    this._likeButton = this._newCard.querySelector(".element__like-button");
    // this._countLikes =this._newCard.querySelector(".element__like-count");
    this._cardImage.src = this._image;
    this._cardImage.alt = this._image;
    this._cardTitle.textContent = this._text;

    if (this.isLiked) {
      this._likeButton.classList.add("element__like-button_clicked");
    }
    this._updateLikes();
    this._setEventListeners();
    return this._newCard;
  }

  deleteCard() {
    this._newCard.remove();
    this._newCard = null;
  }

  id() {
    return this.card_id;
  }

  _updateLikes() {
    this._cardLikes.textContent = this._likes.length;

    if (this.isLiked())
      this._newCard
        .querySelector(".element__like-button")
        .classList.add("element__like-button_clicked");
    else
      this._newCard
        .querySelector(".element__like-button")
        .classList.remove("element__like-button_clicked");
  }

  setLikesInfo(cardData) {
    this._likes = cardData.likes;
    this._updateLikes();
  }

  isLiked() {
    return Boolean(this._likes.some((likes) => likes._id === this._userId));
  }
}
export default Card;
