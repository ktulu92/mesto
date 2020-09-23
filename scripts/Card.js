
class Card {
  static _template = document.querySelector(".template-element").content;

  constructor(CardData, cardSelector) {
    this._image = CardData.link;
    this._text = CardData.name;
    this._cardSelector = cardSelector;
  }

  render = (container) => {
    this._newCard = Card._template.cloneNode(true);
    this._newCard.querySelector(".element__image").src = this._image;
    this._newCard.querySelector(".element__title").textContent = this._text;

    this._setEventListeners();

    container.prepend(this._newCard);
  };
  //функция удаления карточки

  //     функция постановки лайка





  _toggleLike = (card) => {
    const element = document.querySelector(".element__like-button");

    card.classList.toggle("element__like-button_clicked");
  };
  _deleteCard = (card) => {
    const element = card.parentElement;
    element.remove();
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

   



      
      // this._newCard.querySelector(".element__image").addEventListener("click", () => {
      //   // обработчик события открытия галереи
      //   image.src = this._newCard.querySelector(".element__image").src;
      //   imageTitle.textContent = this._newCard.querySelector(".element__image").alt;
      //   openPopup(popupImage);
      // });
      




  };
}


export {Card}





