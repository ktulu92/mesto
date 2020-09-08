const initialCards = [
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

const listCards = document.querySelector(".elements"); //список для карточек
const addElementForm = document.querySelector(".pop-up__form_type_add-card"); //форма для добавления карты
const elementTemplate = document.querySelector(".template-element"); //темплейт элемент
const inputName = addElementForm.querySelector(".pop-up__input_type_name"); //объявляем инпут для имени карточки
const inputLink = addElementForm.querySelector(
  ".pop-up__input_type_image-link"
); //объявляем инпут для ссылки на картинку карточки
const popupImage = document.querySelector(".pop-up_type_image");
const image = document.querySelector(".pop-up_container_type_image");
const imageTitle = document.querySelector(".pop-up__image-title");
const popupImageCloseButton = document.querySelector(
  ".pop-up__image-close-button"
); //попап галерея

const popupProfileOverlay = document.querySelector(
  ".pop-up__overlay_type_profile"
);
const popupPlaceOverlay = document.querySelector(".pop-up__overlay_type_place");
const popupImageOverlay = document.querySelector(".pop-up__overlay_type_image");


const popupPlaceSubmitButton = document.querySelector(".pop-up__place-submit-button")
const popupProfileSubmitButton =  document.querySelector(".pop-up__profile-submit-button")

//функция Открытие попапа
const openPopup = function (popup) {
  popup.classList.add("pop-up_opened");

  const handlePopupClose = (event) => {
    if (event.which === 27) {
     closePopup(popup);
      document.removeEventListener("keydown", handlePopupClose);
    }
  };

  document.addEventListener("keydown", handlePopupClose);
};

//функция Закрытие попапа
const closePopup = function (popup) {
  popup.classList.remove("pop-up_opened");
};

function createCard(card) {
  //функция сборки карточки
  const cardElement = elementTemplate.content.cloneNode(true);
  const likeButton = cardElement.querySelector(".element__like-button");
  const deleteButton = cardElement.querySelector(".element__delete-button");
  const popupImageOpenButton = cardElement.querySelector(".element__image");

  popupImageOpenButton.addEventListener("click", () => {
    // обработчик события открытия галереи
    image.src = popupImageOpenButton.src;
    imageTitle.textContent = popupImageOpenButton.alt;
    openPopup(popupImage);
  });

  cardElement.querySelector(".element__title").textContent = card.name;
  cardElement.querySelector(".element__image").src = card.link;
  cardElement.querySelector(".element__image").alt = card.name;

  const deleteCard = (event) => {
    //функция удаления карточки
    const element = event.target.closest(".element");
    element.remove();
  };

  const toggleLike = () => {
    //функция постановки лайка

    likeButton.classList.toggle("element__like-button_clicked");
  };

  likeButton.addEventListener("click", toggleLike); //добавляем событие лайк и удаление
  deleteButton.addEventListener("click", deleteCard);
  return cardElement; //возвращаем карточек с данными
}

function addCard(item) {
  //Добавляем карточки
  listCards.prepend(createCard(item));
  
}

initialCards.forEach(addCard); // рендерим и добавляем карточки из массива
popupImageCloseButton.addEventListener("click", () => {
  // обработчик события закрытия
  closePopup(popupImage);
});

// объявляем переменные попапов и кнопок которые их закрывают и открывают
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

// Открытие и закрытие попапов

const profileTitle = document.querySelector(".profile__title"); // Нашли в DOM текст имени пользователя
const profileSubtitle = document.querySelector(".profile__subtitle"); // Нашли в DOM текст описания пользователя
const newProfileTitle = popupProfile.querySelector(".pop-up__input_type_name");
const newProfileDescription = popupProfile.querySelector(
  ".pop-up__input_type_description"
);

//форма добавления карточки и обработчик события

popupProfileCloseButton.addEventListener("click", () => {
  //обработчик события  закрытие редактирования профиля
  closePopup(popupProfile);
});

popupProfileOpenButton.addEventListener("click", () => {
  //обработчик события открытия и редактирования профиля
  newProfileTitle.value = profileTitle.textContent;
  newProfileDescription.value = profileSubtitle.textContent;
  popupProfileSubmitButton.classList.remove("pop-up__submit-button_type_disabled")


  openPopup(popupProfile);

 
});

const formElement = document.querySelector(".pop-up__container"); //форма для редактирования профиля
formElement.addEventListener("submit", (event) => {
  //Обработчик события редактирования имени и профессии и закрытие формы редактирования профиля
  event.preventDefault();
  profileTitle.textContent = newProfileTitle.value;
  profileSubtitle.textContent = newProfileDescription.value;
  closePopup(popupProfile);
});

addElementForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const newCard = {
    name: inputName.value,
    link: inputLink.value,
  };
  addCard(newCard);
  
  closePopup(popupPlace);
});

popupPlaceCloseButton.addEventListener("click", (event) => {
  // обработчик события закрытия места

  closePopup(popupPlace);
});

popupPlaceOpenButton.addEventListener("click", (event) => {
  // обработчик события открытия и добавления новой карточки места
  popupPlaceSubmitButton.classList.add("pop-up__submit-button_type_disabled")
  addElementForm.reset()
 

  openPopup(popupPlace);
  
  

});

popupProfileOverlay.onkeydown = function (event) {
  if (event.keyCode == 27) {
    closePopup(popupProfile);
  }
};

popupPlaceOverlay.onkeydown = function (event) {
  if (event.keyCode == 27) {
    closePopup(popupPlace);
  }
};

//закрытие попапов по клику на оверлей

popupProfileOverlay.addEventListener("click", () => {
  closePopup(popupProfile);
});

popupPlaceOverlay.addEventListener("click", () => {
  closePopup(popupPlace);
});

popupImageOverlay.addEventListener("click", () => {
  closePopup(popupImage);
});

//закрытие попапов по нажатию esc

//добавить if попап открыт, то вешаем обработчик,
// else re
