export const ESC_KEYCODE = 27;

export const popupImage = document.querySelector(".pop-up_type_image");

export const popupTitle = popupImage.querySelector(".pop-up__image-title");

export const popupImageContainer = popupImage.querySelector(
  ".pop-up_container_type_image"
);

export const initialCards = [
  {
    name: "Бали",
    link: "./images/Бали.jpg",
  },
  {
    name: "Кения ",
    link: "./images/Кения.jpg",
  },
  {
    name: "Лиссабон",
    link: "./images/Лиссабон.jpg",
  },
  {
    name: "Невада",
    link: "./images/Невада.jpg",
  },
  {
    name: "Сиракузы ",
    link: "./images/Сиракузы.jpg",
  },
  {
    name: "Стокгольм",
    link: "./images/Стокгольм.jpg",
  },
];

export const validationData = {
  formSelector: ".pop-up__container",
  inputSelector: ".pop-up__input",
  submitButtonSelector: ".pop-up__submit-button",
  inactiveButtonClass: "pop-up__submit-button_type_disabled",
  inputErrorClass: "pop-up__input_type_error",
  errorClass: "pop-up__error_element_type_active",
};

