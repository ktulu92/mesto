class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;

    this._popup = document.querySelector(popupSelector);

  
    
  }
  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      const target = document.querySelector(".pop-up_opened");
      this.close(target);
    }
  }
 
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
}

export default Popup;
