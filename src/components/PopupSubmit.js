import Popup from "./Popup.js";

export default class PopupSubmit extends Popup {
  constructor(popupSelector, handleFormConfirm) {
    super(popupSelector);
    this._popup = document.querySelector(popupSelector);
    this._handleFormConfirm = this.handleFormConfirm;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormConfirm();
    });
  }
}
