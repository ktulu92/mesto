class Card {
  constructor(CardData, cardSelector, handleCardClick,handleLikeClick,handleDeleteIconClick) {
    this._image = CardData.link;
    this._text = CardData.name;
    this._id = CardData.id;
    this._owner = CardData._owner;
    this._likes = CardData.likes;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteIconClick = handleDeleteIconClick;

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
    this._cardLikes = this._newCard.querySelector(".element__like-count")

    this._cardImage.src = this._image;
    this._cardImage.alt = this._image;
    this._cardTitle.textContent = this._text;
    // this._cardLikes.textContent = this._likes
    // .length
    ;

    this._setEventListeners();
    return this._newCard;
  };

  _toggleLike(){
    this._newCard
      .querySelector(".element__like-button")
      .classList.toggle("element__like-button_clicked");
  };


// _setLike(){
//   this._newCard
//       .querySelector(".element__like-button")
//       .classList.add("element__like-button_clicked");
// }


// _disLike(){
//   this._newCard
//       .querySelector(".element__like-button")
//       .classList.remove("element__like-button_clicked");
// }




  _deleteCard () {
    this._newCard.remove();
    this._newCard = null;
  };

  _setEventListeners () {
    this._newCard
      .querySelector(".element__delete-button")
      .addEventListener("click", (evt) => {
        // handleDeleteIconClick(evt.target)
            
        this._deleteCard(evt.target);
      });

    this._newCard
      .querySelector(".element__like-button")
      .addEventListener("click", (evt) => {
        // handleLikeClick()
        this._toggleLike(evt.target.closest(".element__like-button"));
      });

    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._image, this._text);
    });
  };

  _getLikes(){
    return this._likes

  }
}
export default Card;
