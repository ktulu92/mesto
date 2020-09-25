import {OpenImagePopup}  from "./utils.js"

class Card {
  
  constructor(CardData, cardSelector) {
    this._image = CardData.link;
    this._text = CardData.name;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    return cardElement;
  }

  render = () => {
    this._newCard = this._getTemplate();

    this._newCard.querySelector(".element__image").src = this._image;
    this._newCard.querySelector(".element__title").textContent = this._text;

    this._setEventListeners();
    return this._newCard;
  };

  _toggleLike = () => {
    this._newCard
      .querySelector(".element__like-button")
      .classList.toggle("element__like-button_clicked");
  };

  _deleteCard = () => {
    this._newCard.remove();
    this._newCard = null;
  };

   
  _setEventListeners = () => {
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

    this._newCard
    .querySelector(".element__image")
    .addEventListener("click", (evt) => {
    OpenImagePopup(evt.target.closest(".element__image"));
  });







}
}

// this._newCard.querySelector(".element__image").addEventListener("click", () => {
//   // обработчик события открытия галереи
//   image.src = this._newCard.querySelector(".element__image").src;
//   imageTitle.textContent = this._newCard.querySelector(".element__image").alt;
//   openPopup(popupImage);
// });

export { Card };
