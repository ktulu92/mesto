class Card {
  constructor(CardData, cardSelector, handleCardClick,handleLikeClick,handleDeleteIconClick,userId) {
    this._image = CardData.link;
    this._text = CardData.name;
    this._id = CardData._id;
    this._owner = CardData.owner;
    this._likes = CardData.likes;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteIconClick = handleDeleteIconClick;
    this._userId=userId
    
    

  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    return cardElement;
  }


  _setEventListeners () {
    this._newCard
      .querySelector(".element__delete-button")
      .addEventListener("click", () => {
        this._handleDeleteIconClick(this._id)
        // this._deleteCard()
        
      });

    this._newCard
      .querySelector(".element__like-button")
      .addEventListener("click", () => {
        this._handleLikeClick()
        
       this.isLiked(this._userId)
            
      
       this.showLike(this._userId)
       
       
      });


    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._image, this._text);
    });
  };




  render (){
    this._newCard = this._getTemplate();
    this._cardImage = this._newCard.querySelector(".element__image");
    this._cardTitle = this._newCard.querySelector(".element__title");
    this._cardLikes = this._newCard.querySelector(".element__like-count")

    this._cardImage.src = this._image;
    this._cardImage.alt = this._image;
    this._cardTitle.textContent = this._text;
    this._cardLikes.textContent = this._likes.length
    ;
    
    if(this._owner._id === this._userId) {
      this._newCard.querySelector(".element__delete-button").classList.add("element__delete-button_type_visible")
    }
    else {
      this._newCard.querySelector(".element__delete-button").classList.add("element__delete-button_type_hidden")
    }
    
  


  

    this._setEventListeners();
    return this._newCard;
  };


  isLiked(userId){
    return this._likes.some(like=>like._id === userId)
  }
  

 showLike(userId) {
   if (this.isLiked(userId)) {
    this._newCard
      .querySelector(".element__like-button")
      .classList.add("element__like-button_clicked");
   }

   else{ 
    this._newCard
        .querySelector(".element__like-button")
        .classList.remove("element__like-button_clicked");
  }

   }
 



  // _toggleLike(){
  //   this._newCard
  //     .querySelector(".element__like-button")
  //     .classList.toggle("element__like-button_clicked");
  // };





  _deleteCard () {
    this._newCard.remove();
    this._newCard = null;
  };

  



  getCardId(){ //получения id  карты
    return this._id
  }

  setLikes(likes){
    this._likes = likes
  }
}
export default Card;
