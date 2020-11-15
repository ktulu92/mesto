import Popup from "./Popup.js";

export default class PopupSubmit extends Popup {
  constructor(popupSelector, {handleFormConfirm}) {
    super(popupSelector);
    this._popup = document.querySelector(popupSelector);
    this._handleFormConfirm = handleFormConfirm;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.querySelector(".popup__confirm-button").addEventListener("click", () => {

      // evt.preventDefault();
      this._handleFormConfirm(this._id);
    });
  }

  // editSubmitText(text) {
  //   this._submitButton.textContent = text;
  // }

  // resetSubmitText() {
  //   this._submitButton.textContent = this._submitDefaultText;
  // }

  open(id) {
    super.open();
    this._id = id;
 
  }
}
