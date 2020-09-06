
const validationData = {
  formSelector: ".pop-up__container",
  inputSelector: ".pop-up__input",
  submitButtonSelector: ".pop-up__submit-button",
  inactiveButtonClass: "pop-up__submit-button_type_disabled",
  inputErrorClass: "pop-up__input_type_error",
  errorClass: "pop-up__error_element_type_active",
};


const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(validationData.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validationData.errorClass);
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(validationData.inputErrorClass);
  errorElement.classList.remove(validationData.errorClass);
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(validationData.inputSelector));
  const buttonElement = formElement.querySelector(validationData.submitButtonSelector);
  toggleButtonState(inputList, buttonElement,validationData.inactiveButtonClass);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement,validationData.inactiveButtonClass);
    });
  });
};






const enableValidation = (validationData) => {
  
 
  const formList = Array.from(document.querySelectorAll(validationData.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement);

    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
  });


};


function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}


enableValidation(validationData);


function toggleButtonState(inputList, buttonElement,) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(validationData.inactiveButtonClass);
  } else {
    buttonElement.classList.remove(validationData.inactiveButtonClass);
  }
}