export const ESC_KEYCODE = 27;

export const popupImage = document.querySelector(".pop-up_type_image");

export const popupTitle = popupImage.querySelector(".pop-up__image-title");

export const popupImageContainer = popupImage.querySelector(
  ".pop-up_container_type_image"
);

export const initialCards = [
  {
    name: "Бали",
    link: "https://cdn.pixabay.com/photo/2020/05/29/06/42/cat-5233986_960_720.jpg",
  },
  {
    name: "Кения ",
    link: "https://cdn.pixabay.com/photo/2013/05/30/18/21/cat-114782_960_720.jpg",
  },
  {
    name: "Лиссабон",
    link: "https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_960_720.jpg",
  },
  {
    name: "Невада",
    link: "https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_960_720.png",
  },
  {
    name: "Сиракузы ",
    link: "https://cdn.pixabay.com/photo/2020/10/05/10/51/cat-5628953_960_720.jpg",
  },
  {
    name: "Стокгольм",
    link: "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg",
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

