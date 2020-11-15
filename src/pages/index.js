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
import PopupSubmit from "../components/PopupSubmit.js";

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

//создание попапа подтверждения
const popupSumbitSelector = ".pop-up-confirm"
const popupConfirm = new PopupSubmit(popupSumbitSelector,{
  handleFormConfirm:(_id)=>{
//здесь будет смена кнопки на "сохранение"
  api.deleteCard(_id).then(()=>{
    //здесь будет смена кнопки на значение по умолчанию "да"


    
  })
  popupConfirm.close()
  }}) 


  popupConfirm.setEventListeners()


//валидация
const validatorProfile = new FormValidator(validationData, editProfileForm); //для попапа
const validatorPlace = new FormValidator(validationData, addCardForm);
const validatorAvatar = new FormValidator(validationData, editAvatarForm);

validatorProfile.enableValidation();
validatorPlace.enableValidation();
validatorAvatar.enableValidation();

const elementsList = document.querySelector(".elements");

const api = new Api();

let userId; //здесь айди пользователя
api.getProfileInfo().then((data) => {
  userId = data._id;
  console.log(userId);
});

//
//а сейчас мы будем описывать  ваши ебучие колбеки


function handleLikeClick(){
 
  console.log("функция лайк")
}
function handleDeleteIconClick(_id){
    popupConfirm.open(_id)
  
  // api.deleteCard(_id)

console.log("функция удаления")
popupConfirm.open(_id)

}


 api.getInitialCards().then((data) => {
  const initialCards = data.map((cards) => cards);



  const CardList = new Section(
    {
      items: initialCards,
      renderer: (element) => {
        const card = new Card(
          element,
          templateSelector,
          handleCardClick,
          handleLikeClick,
          handleDeleteIconClick,
          userId
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
const profileSelector = ".pop-up-profile"; //Селектор попапа редактирования аватара
const popupProfileOpenButton = document.querySelector(".profile__edit-button"); //Кнопка открытия попапа

const popupProfile = new PopupWithForm(profileSelector, () => {
  //cоздание экземпляра класса попапа октрытия профиля
  api.editProfile(name.value, info.value); //меняем данные на сервере.
  api.getProfileInfo().then((data) => {
    //забрали данные пользователя с сервера
    profileInfo.setUserInfo(data);
  }); //обовляем данные в доме

  popupProfile.close(); //закрываем попап
});

popupProfile.setEventListeners(); //вешаем бработчики событий
popupProfileOpenButton.addEventListener("click", () => {
  name.value = profileInfo.getUserInfo().nameData; //заполняем инпут имени пользователя текущим значение дом-элемента
  info.value = profileInfo.getUserInfo().infoData; //заполняем инпут информации о  пользователе текущим значение дом-элемента

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

  //добавление карты
 
  const card = new Card(
    data,
    templateSelector,
    handleCardClick,
    handleLikeClick,
    handleDeleteIconClick,    
    userId
  )
  
  elementsList.prepend(card.render());
  popupAddCard.close();
});




popupAddCard.setEventListeners();
const popupAddCardOpenButton = document.querySelector(".profile__add-button");
popupAddCardOpenButton.addEventListener("click", () => {
  popupAddCard.open();
});
