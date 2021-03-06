class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;

    this._popup = document.querySelector(popupSelector);
  }
  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close(this._popup);
    }
  };

  open() {
    this._popup.classList.add("pop-up_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popup.classList.remove("pop-up_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  setEventListeners() {
    this._popup
      .querySelector(".pop-up__close-button")
      .addEventListener("click", () => {
        this.close();
      });
    this._popup
      .querySelector(".pop-up__overlay")
      .addEventListener("click", () => {
        this.close();
      });
  }










//   setButtonLoadingText(buttonSelector,loading,text){
//   const defaultButtonText = this.button.name ;
 
//   if(loading){
//     this._popup.document.querySelector(buttonSelector).name = text
//   }
//  else {
//   this.button.name = defaultButtonText
//  }
//   }



}

export default Popup;
