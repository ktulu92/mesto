import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._inputs = Array.from(this._popup.querySelectorAll(".pop-up__input"));
  }

  _getInputValues() {
    this._values = {};
    this._inputs.forEach((inputElement) => {
      this._values[inputElement.name] = inputElement.value;
    });
    return this._values;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement = this._popup.querySelector(".pop-up__container");

    this._popup.addEventListener("submit", () =>
      this._submitForm(this._getInputValues())
    );
  }
  close() {
    super.close();
    this._formElement.reset();
  }
}
