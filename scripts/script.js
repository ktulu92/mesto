import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { validationData } from "./utils.js";
import { initialCards } from "./utils.js";
import Section from "./Section.js";
import UserInfo from "./UserInfo.js";

const templateSelector = ".template-element";
const addElementForm = document.querySelector(".pop-up__form_type_add-card");
const inputName = addElementForm.querySelector(".pop-up__input_type_name");
const inputLink = addElementForm.querySelector(
  ".pop-up__input_type_image-link"
);
const editProfileForm = document.querySelector(
  ".pop-up__form_type_edit-profile"
);
const addCardForm = document.querySelector(".pop-up__form_type_add-card");
//валидация
const validatorProfile = new FormValidator(validationData, editProfileForm);
const validatorPlace = new FormValidator(validationData, addCardForm);
validatorProfile.enableValidation();
validatorPlace.enableValidation();

const elementsList = document.querySelector(".elements");
const CardList = new Section(
  {
    items: initialCards,
    renderer: (element) => {
      const card = new Card(
        element,
        templateSelector,
        handleCardClick
      ).render();
      CardList.addItem(card);
    },
  },
  ".elements"
);
CardList.rendererItems();

//попап галереи
const popupGallery = new PopupWithImage(".pop-up_type_image");
popupGallery.setEventListeners();
function handleCardClick(image, text) {
  popupGallery.open(image, text);
}

//Создание попапа редактирования профиля
const profileData = {
  profileTitleSelector: ".profile__title",
  profileSubtitleSelector: ".profile__subtitle",
};

const profileInfo = new UserInfo(profileData);
const name = document.querySelector(".pop-up__input_type_name");
const info = document.querySelector(".pop-up__input_type_description");

const profileSelector = ".pop-up-profile";
const popupProfile = new PopupWithForm(profileSelector, () => {
  profileInfo.setUserInfo({ name, info });

  popupProfile.close();
});
const popupProfileOpenButton = document.querySelector(".profile__edit-button");
popupProfile.setEventListeners();
popupProfileOpenButton.addEventListener("click", () => {
  //  profileInfo.getUserInfo()

  name.value = profileInfo.getUserInfo().nameData;
  info.value = profileInfo.getUserInfo().infoData;

  //

  popupProfile.open();
});

//Создание попапа добавления карточки
const CardSelector = ".pop-up-place";
const popupAddCard = new PopupWithForm(CardSelector, () => {
  const userCard = {
    name: inputName.value,
    link: inputLink.value,
  };
  //добавление карты
  const card = new Card(userCard, templateSelector, handleCardClick);
  elementsList.prepend(card.render());
  popupAddCard.close();
});
popupAddCard.setEventListeners();
const popupAddCardOpenButton = document.querySelector(".profile__add-button");

popupAddCardOpenButton.addEventListener("click", () => {
  popupAddCard.open();
});
