import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._inputs = Array.from(this._popup.querySelectorAll(".pop-up__input"));
  }

  _getInputValues() {
    this._values = {};
    this._inputs.forEach((input) => {
      this._values[input.name] = input.value;
    });
    return this._values;
  }

  setEventListeners() {
    super.setEventListeners();

    this._popup.addEventListener("submit", this._submitForm);
  }
  close() {
    super.close();
    
  
  }
}
