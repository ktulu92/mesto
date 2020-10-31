import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImageContainer = this._popup.querySelector(
      ".pop-up__image"
    );
    this._popupTitle = this._popup.querySelector(".pop-up__image-title");
  }
  open(image, text) {
    super.open();

    this._popupImageContainer.src = image;
    this._popupImageContainer.alt = text;
    this._popupTitle.textContent = text;
  }
}
