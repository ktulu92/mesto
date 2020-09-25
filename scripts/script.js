import { FormValidator } from "./FormValidator.js";
import { openPopup } from "./utils.js";
import { Card } from "./Card.js";
import { validationData } from "./utils.js";
import { initialCards } from "./utils.js";
import { closePopup } from "./utils.js";
const templateSelector = ".template-element";

const addElementForm = document.querySelector(".pop-up__form_type_add-card"); //форма для добавления карты

const inputName = addElementForm.querySelector(".pop-up__input_type_name"); //объявляем инпут для имени карточки
const inputLink = addElementForm.querySelector(
  ".pop-up__input_type_image-link"
); //объявляем инпут для ссылки на картинку карточки
const popupImage = document.querySelector(".pop-up_type_image");
const popupImageCloseButton = document.querySelector(
  ".pop-up__image-close-button"
); //попап галерея
const popupProfileOverlay = document.querySelector(
  ".pop-up__overlay_type_profile"
);
const popupPlaceOverlay = document.querySelector(".pop-up__overlay_type_place");
const popupImageOverlay = document.querySelector(".pop-up__overlay_type_image");
const popupPlaceSubmitButton = document.querySelector(
  ".pop-up__place-submit-button"
);
const popupProfileSubmitButton = document.querySelector(
  ".pop-up__profile-submit-button"
);


const popupProfile = document.querySelector(".pop-up-profile");
const popupPlace = document.querySelector(".pop-up-place");
const popupProfileCloseButton = document.querySelector(
  ".pop-up__profile-close-button"
); //попап редактирования профиля
const popupProfileOpenButton = document.querySelector(".profile__edit-button");
const popupPlaceCloseButton = document.querySelector(
  ".pop-up__place-close-button"
); //попап добавление карточки места
const popupPlaceOpenButton = document.querySelector(".profile__add-button");

const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const newProfileTitle = popupProfile.querySelector(".pop-up__input_type_name");
const newProfileDescription = popupProfile.querySelector(
  ".pop-up__input_type_description"
);

//функция Закрытие попапа

// объявляем переменные попапов и кнопок которые их закрывают и открывают

//форма добавления карточки и обработчик события

popupProfileCloseButton.addEventListener("click", () => {
  //обработчик события  закрытие редактирования профиля
  closePopup(popupProfile);
});

popupProfileOpenButton.addEventListener("click", () => {
  //обработчик события открытия и редактирования профиля
  newProfileTitle.value = profileTitle.textContent;
  newProfileDescription.value = profileSubtitle.textContent;
  popupProfileSubmitButton.classList.remove(
    "pop-up__submit-button_type_disabled"
  );

  openPopup(popupProfile);
});

const formElement = document.querySelector(".pop-up__container");
formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  profileTitle.textContent = newProfileTitle.value;
  profileSubtitle.textContent = newProfileDescription.value;
  closePopup(popupProfile);
});

addElementForm.addEventListener("submit", (event) => {
  event.preventDefault();
  closePopup(popupPlace);

  const userCard = {
    name: inputName.value,
    link: inputLink.value,
  };

  const card = new Card(userCard, templateSelector);
  elementsList.prepend(card.render());

  //
});

popupPlaceCloseButton.addEventListener("click", () => {
  // обработчик события закрытия места

  closePopup(popupPlace);
});

popupImageCloseButton.addEventListener("click", () => {
  // обработчик события закрытия места

  closePopup(popupImage);
});

popupPlaceOpenButton.addEventListener("click", () => {
  // обработчик события открытия и добавления новой карточки места
  popupPlaceSubmitButton.classList.add("pop-up__submit-button_type_disabled");
  addElementForm.reset();

  openPopup(popupPlace);
});


popupProfileOverlay.addEventListener("click", () => {
  closePopup(popupProfile);
});
popupPlaceOverlay.addEventListener("click", () => {
  closePopup(popupPlace);
});
popupImageOverlay.addEventListener("click", () => {
  closePopup(popupImage);
});

//Работа с классами (создание карточек и включение валидации)

const elementsList = document.querySelector(".elements");

initialCards.forEach((element) => {
  const card = new Card(element, templateSelector);
  elementsList.prepend(card.render());
});

const editProfileForm = document.querySelector(
  ".pop-up__form_type_edit-profile"
);
const addCardForm = document.querySelector(".pop-up__form_type_add-card");

const validatorProfile = new FormValidator(validationData, editProfileForm);

const validatorPlace = new FormValidator(validationData, addCardForm);

validatorProfile.enableValidation();

validatorPlace.enableValidation();
