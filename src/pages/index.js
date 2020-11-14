// var HtmlWebpackPlugin = require('html-webpack-plugin');var HtmlWebpackPlugin = require('html-webpack-plugin');
import "../pages/index.css";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import { validationData } from "../components/utils.js";
import { initialCards } from "../components/utils.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

const templateSelector = ".template-element";
const addElementForm = document.querySelector(".pop-up__form_type_add-card");
// const inputName = addElementForm.querySelector(".pop-up__input_type_name");
// const inputLink = addElementForm.querySelector(
//   ".pop-up__input_type_image-link"
// );
const editProfileForm = document.querySelector(
  ".pop-up__form_type_edit-profile"
);
const addCardForm = document.querySelector(".pop-up__form_type_add-card");
const editAvatarForm = document.querySelector(".pop-up__form_type_edit-avatar");

//валидация
const validatorProfile = new FormValidator(validationData, editProfileForm); //для попапа редактирования профиля
const validatorPlace = new FormValidator(validationData, addCardForm); //для попапа добавления карточки
const validatorAvatar = new FormValidator(validationData, editAvatarForm);//для попапа редактирования аватара профиля

validatorProfile.enableValidation();
validatorPlace.enableValidation();
validatorAvatar.enableValidation();

const elementsList = document.querySelector(".elements");

const api = new Api();

const cardsData = api.getInitialCards().then((data) => {
  const initialCards = data.map((cards) => cards);

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
});

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
  profileAvatarSelector: ".profile__avatar",
};

const name = document.querySelector(".pop-up__input_type_name"); //nameInput
const info = document.querySelector(".pop-up__input_type_description"); //infoInput
const avatar = document.querySelector(".pop-up__input_type_avatar-link"); //avatarInput

const profileInfo = new UserInfo(profileData);

api.getProfileInfo().then((data) => {
  //забрали данные пользователя с сервера
  profileInfo.setUserInfo(data); //добавили данные пользователя  с сервера в дом
  profileInfo.setUserAvatar(data); //добавили аватар пользователя с сервера в дом
});




//Создание попапа редактирования профиля
const profileSelector = ".pop-up-profile";   //Селектор попапа редактирования аватара
const popupProfileOpenButton = document.querySelector(".profile__edit-button"); //Кнопка открытия попапа

const popupProfile = new PopupWithForm(profileSelector, () => {    //cоздание экземпляра класса попапа октрытия профиля  
 api.editProfile(name.value,info.value)    //меняем данные на сервере.
 api.getProfileInfo().then((data) => {     //забрали данные пользователя с сервера
  profileInfo.setUserInfo(data)})          //обовляем данные в доме
  
  popupProfile.close()//закрываем попап
});

popupProfile.setEventListeners(); //вешаем бработчики событий
popupProfileOpenButton.addEventListener("click", () => {
  name.value = profileInfo.getUserInfo().nameData; //заполняем инпут имени пользователя текущим значение дом-элемента
  info.value = profileInfo.getUserInfo().infoData;//заполняем инпут информации о  пользователе текущим значение дом-элемента

  popupProfile.open(); //открытие попапа редактирования профиля 
});

// Создание попапа редактирования аватара
const popupProfileSelector = ".pop-up__edit-avatar"; //Селектор попапа редактирования аватара
const popupAvatar = new PopupWithForm(popupProfileSelector, () => {
  api.updateUserAvatar(avatar.value).then((data) => {
    //забрали данные  с сервера и внесли данные пользователя в дом
    profileInfo.setUserAvatar(data);
  });
  popupAvatar.close(); //закрыли попап
});

popupAvatar.setEventListeners();

const popupAddAvatarOpenButton = document.querySelector(
  ".profile__edit-avatar"
);
popupAddAvatarOpenButton.addEventListener("click", () => {
  avatar.value = profileInfo.getUserInfo().avatarData;
  popupAvatar.open();
});

//Создание попапа добавления карточки
const CardSelector = ".pop-up-place";
const popupAddCard = new PopupWithForm(CardSelector, (data) => {
  api.addNewCard(data);
  // .then((data)=> data);



handleLikeClick = () =>{




}

handleDeleteIconClick =() => {
  
}











  //добавление карты
  const card = new Card(data, templateSelector, {
    handleCardClick,
    handleLikeClick: () => {},
    handleDeleteIconClick: (card) => {},
  });
  elementsList.prepend(card.render());
  popupAddCard.close();
});

popupAddCard.setEventListeners();
const popupAddCardOpenButton = document.querySelector(".profile__add-button");
popupAddCardOpenButton.addEventListener("click", () => {
  popupAddCard.open();
});








//создание попапа подтверждения удаления карточки

// const popupSubmit = new PopupSubmit(popupSubmitSelector,  ()=> {
//   // опишем фунцию сабмита
//   //здесь будет сначала удаление с сервера

//   // потом удаление из ДОМ

//   // потом закрытие попапа

//   popupSubmit.close()
// }

// submit: (data) => {
//   api.deleteCard(data)
//     .then(() => {
//       tempCard.deleteCard();
//     })
//     .then(() => {
//       tempCard = null;
//       popupWithConfirm.close();
//     })
//     .catch((err) => {
//       console.log(err);
//     })

// })
