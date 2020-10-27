class Card {
  constructor(CardData, cardSelector, handleCardClick) {
    this._image = CardData.link;
    this._text = CardData.name;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    return cardElement;
  }

  render (){
    this._newCard = this._getTemplate();
    this._cardImage = this._newCard.querySelector(".element__image");
    this._cardTitle = this._newCard.querySelector(".element__title");

    this._cardImage.src = this._image;
    this._cardImage.alt = this._image;
    this._cardTitle.textContent = this._text;

    this._setEventListeners();
    return this._newCard;
  };

  _toggleLike(){
    this._newCard
      .querySelector(".element__like-button")
      .classList.toggle("element__like-button_clicked");
  };

  _deleteCard () {
    this._newCard.remove();
    this._newCard = null;
  };

  _setEventListeners () {
    this._newCard
      .querySelector(".element__delete-button")
      .addEventListener("click", (evt) => {
        this._deleteCard(evt.target);
      });

    this._newCard
      .querySelector(".element__like-button")
      .addEventListener("click", (evt) => {
        this._toggleLike(evt.target.closest(".element__like-button"));
      });

    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._image, this._text);
    });
  };
}
export default Card;
