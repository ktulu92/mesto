import Popup from "./Popup.js";

export default class PopupSubmit extends Popup {
  constructor(popupSelector, handleFormConfirm) {
    super(popupSelector);
    this._popup = document.querySelector(popupSelector);
    this._handleFormConfirm = handleFormConfirm;
  }
  setSubmitAction(action) {
    this._handleFormConfirm = action;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup
      .querySelector(".popup__confirm-button")
      .addEventListener("click", (evt) => {
        evt.preventDefault();
        this._handleFormConfirm(this._id);
      });
  }

  open(id) {
    super.open();
    this._id = id;
  }

  editSubmitButton(wait) {
    if (wait) {
      this._popup.querySelector(".popup__confirm-button").textContent =
        "Подождите...";
    } else {
      this._popup.querySelector(".popup__confirm-button").textContent =
        "Подтвердить";
    }
  }
}
