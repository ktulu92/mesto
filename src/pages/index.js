// var HtmlWebpackPlugin = require('html-webpack-plugin');var HtmlWebpackPlugin = require('html-webpack-plugin');
import "../pages/index.css";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import { validationData } from "../components/utils.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import PopupSubmit from "../components/PopupSubmit.js";

const templateSelector = ".template-element";
const profileSelector = ".pop-up-profile"; //Селектор попапа редактирования аватара
const popupProfileOpenButton = document.querySelector(".profile__edit-button"); //Кнопка открытия попапа
const editProfileForm = document.querySelector(
  ".pop-up__form_type_edit-profile"
);
const addCardForm = document.querySelector(".pop-up__form_type_add-card");
const editAvatarForm = document.querySelector(".pop-up__form_type_edit-avatar");
const elementsList = document.querySelector(".elements");
const name = document.querySelector(".pop-up__input_type_name"); //nameInput
const info = document.querySelector(".pop-up__input_type_description"); //infoInput
const avatar = document.querySelector(".pop-up__input_type_avatar-link"); //avatarInput
const popupAddCardOpenButton = document.querySelector(".profile__add-button");
const popupAddAvatarOpenButton = document.querySelector(
  ".profile__edit-avatar"
);
const popupSumbitSelector = ".pop-up-confirm"; //создание попапа подтверждения
const popupProfileSelector = ".pop-up__edit-avatar"; //Селектор попапа редактирования аватара
const CardSelector = ".pop-up-place";

//валидация
const validatorProfile = new FormValidator(validationData, editProfileForm); //для попапа
const validatorPlace = new FormValidator(validationData, addCardForm);
const validatorAvatar = new FormValidator(validationData, editAvatarForm);

validatorProfile.enableValidation();
validatorPlace.enableValidation();
validatorAvatar.enableValidation();

const urlData = "https://mesto.nomoreparties.co/v1/cohort-17/";
const headersData = {
  authorization: "c9722db9-3ef8-471a-a8fd-61097de987b4",
  "Content-Type": "application/json",
};

const api = new Api(urlData, headersData);

const profileData = {
  profileTitleSelector: ".profile__title",
  profileSubtitleSelector: ".profile__subtitle",
  profileAvatarSelector: ".profile__avatar",
};

const profileInfo = new UserInfo(profileData);

let userId; //здесь айди пользователя
api.getProfileInfo().then((data) => {
  userId = data._id;
  profileInfo.setUserInfo(data); //добавили данные пользователя  с сервера в дом
  profileInfo.setUserAvatar(data); //добавили аватар пользователя с сервера в дом
});

const popupConfirm = new PopupSubmit(popupSumbitSelector);

popupConfirm.setEventListeners();

const callbacks = {
  //=======================================Функция открытия попапа галереи
  handleCardClick: (image, text) => {
    //эта функция работает стабильно
    popupGallery.open(image, text);
  },
  //==========================================Лайки снимаются только после перезагрузки страницы
  handleLikeClick: (card, element) => {
    // card.isLiked()
    if (card.isLiked()) {
      api.dislikeCard(card._id).then((res) => {
        card.setLikesInfo(res);
      });
    } else {
      api.likeCard(card._id).then((res) => {
        card.setLikesInfo(res);
      });
    }
  },
  //===========================================================================Функция удаления карточек
  handleDeleteIconClick: (card, element) => {
    popupConfirm.open(card._id);

    function action() {
      popupConfirm.editSubmitButton(true);
      api
        .deleteCard(card._id)
        .then((res) => {
          element.remove();
          res.remove();
        })
        .catch((err) => console.log(err))
        .finally(popupConfirm.editSubmitButton(false));
      popupConfirm.close();
    }

    popupConfirm.setSubmitAction(action);
  },
};

api.getInitialCards().then((data) => {
  const initialCards = data.map((cards) => cards);

  const cardList = new Section(
    {
      items: initialCards,
      renderer: (element) => {
        const card = new Card(
          element,
          templateSelector,
          callbacks,

          userId
        ).render();

        cardList.addItem(card);
      },
    },
    ".elements"
  );

  cardList.rendererItems();
});

//попап галереи
const popupGallery = new PopupWithImage(".pop-up_type_image");

//Создание попапа редактирования профиля




//Создание попапа редактирования профиля

//cоздание экземпляра класса попапа октрытия профиля
const popupProfile = new PopupWithForm(profileSelector, () => {  
 
  api.editProfile(name.value, info.value).then((res)=>{   
    return res.json()})
    .then((res)=>{
      profileInfo.setUserInfo(res);
    }) 
     popupProfile.close(); //закрываем попап
});









popupProfile.setEventListeners(); //вешаем бработчики событий
popupProfileOpenButton.addEventListener("click", () => {
  name.value = profileInfo.getUserInfo().nameData; //заполняем инпут имени пользователя текущим значение дом-элемента
  info.value = profileInfo.getUserInfo().infoData; //заполняем инпут информации о  пользователе текущим значение дом-элемента
  

  popupProfile.open(); //открытие попапа редактирования профиля
});

//========================================================================== Создание попапа редактирования аватара

const popupAvatar = new PopupWithForm(popupProfileSelector, () => {
  api.updateUserAvatar(avatar.value).then((data) => {
    //забрали данные  с сервера и внесли данные пользователя в дом
    profileInfo.setUserAvatar(data);
  });
  popupAvatar.close(); //закрыли попап
});

//==========================================================================Создание попапа добавления карточки

const popupAddCard = new PopupWithForm(CardSelector, (element) => {
  api.addNewCard(element).then((element) => {
    const card = new Card(
      element,
      templateSelector,
      callbacks,
      userId
    ).render();
    elementsList.prepend(card);
    popupAddCard.close();
  });
});

popupAddCardOpenButton.addEventListener("click", () => {
  popupAddCard.open();
});

popupAddAvatarOpenButton.addEventListener("click", () => {
  avatar.value = profileInfo.getUserInfo().avatarData;
  popupAvatar.open();
});

//навешиваем слушателей
popupAddCard.setEventListeners();
popupAvatar.setEventListeners();
popupGallery.setEventListeners();
