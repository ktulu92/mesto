

const initialCards = [
  {
      name: "Бали",
      link: "./images/Бали.jpg"
  },
  {
      name: "Кения ",
      link: "./images/Кения.jpg"
  },
  {
      name: "Лиссабон",
      link: "./images/Лиссабон.jpg"
  },
  {
      name: "Невада",
      link: "./images/Невада.jpg"
  },
  {
      name: "Сиракузы ",
      link: "./images/Сиракузы.jpg"
  },
  {
      name: "Стокгольм",
      link: "./images/Стокгольм.jpg"
  }
];


const listCards= document.querySelector(".elements") //список для карточек
const addElementForm =  document.querySelector(".pop-up__form_type_add-card")//форма для добавления карты
const elementTemplate = document.querySelector(".template-element");//темплейт элемент
const inputName = addElementForm.querySelector(".pop-up__input_type_name") //объявляем инпут для имени карточки
const inputLink = addElementForm.querySelector(".pop-up__input_type_image-link") //объявляем инпут для ссылки на картинку карточки





function cardAdd(card){                                                    //функция добавления карточек из массива
  const cardElement = elementTemplate.content.cloneNode(true);
  const likeButton = cardElement.querySelector(".element__like-button")
  const deleteButton = cardElement.querySelector(".element__delete-button")

  cardElement.querySelector(".element__title").textContent = card.name;
  cardElement.querySelector(".element__image").src = card.link;


  listCards.prepend (cardElement);


const deleteCard = (event)=> {                                                     //функция удаления карточки
  element = event.target.closest(".element")
  element.remove()
}

const toggleLike = (event) => {                                                      //функция постановки лайка
  element =  event.target.closest(".element");
  likeButton.classList.toggle("element__like-button_clicked")  
}


likeButton.addEventListener("click", toggleLike);                                 //добавляем событие лайк
deleteButton.addEventListener("click", deleteCard);                              //добавляем событие удаление карточки


const popupImage =  document.querySelector(".pop-up_type_image");
const image =  document.querySelector(".pop-up_container_type_image")
const imageTitle = document.querySelector(".pop-up__image-title")
 
  




const popupImageCloseButton = document.querySelector(".pop-up__image-close-button"); //попап галерея
const popupImageOpenButton = document.querySelector(".element__image");

  
  
 popupImageOpenButton.addEventListener("click",  event=>{ // обработчик события открытия галереи
  event.preventDefault()
  image.src = card.link
  image.alt - card.name
  imageTitle.textContent = card.name
  popupOpen(popupImage);
})

popupImageCloseButton.addEventListener("click",  event=>{// обработчик события закрытия 
  event.preventDefault()   
  popupClose(popupImage);  
})
} 


initialCards.forEach(card=>{
cardAdd(card)
})



//форма добавления карточки и обработчик события
addElementForm.addEventListener("submit", event=>{
  event.preventDefault()
  
  let newCard = 
  {
    name : inputName.value,
    link : inputLink.value
  }
  
cardAdd(newCard);
popupClose(popupPlace);





})







  






// объявляем переменные попапов и кнопок которые их закрывают и открывают
const popupProfile = document.querySelector(".pop-up-profile");                  
const popupPlace = document.querySelector(".pop-up-place");


const popupProfileCloseButton=document.querySelector(".pop-up__profile-close-button");  //попап редактирования профиля
const popupProfileOpenButton = document.querySelector(".profile__edit-button");


const popupPlaceCloseButton  = document.querySelector(".pop-up__place-close-button"); //попап добавление карточки места
const popupPlaceOpenButton = document.querySelector(".profile__add-button");




// Открытие и закрытие попапов

let profileTitle = document.querySelector(".profile__title"); // Нашли в DOM текст имени пользователя
let profileSubtitle = document.querySelector(".profile__subtitle");  // Нашли в DOM текст описания пользователя

let newProfileTitle = popupProfile.querySelector(".pop-up__input_type_name");
let newProfileDescription = popupProfile.querySelector(".pop-up__input_type_description");



//функция Открытие попапа

const popupOpen = function(popup){
  
popup.classList.add("pop-up_opened");
}


//функция Закрытие попапа
const popupClose = function(popup){
popup.classList.remove("pop-up_opened");
  
}


popupProfileOpenButton.addEventListener("click", event=>{ //обработчик события открытия и редактирования профиля
  event.preventDefault()
  newProfileTitle.placeholder = profileTitle.textContent;
  newProfileDescription.placeholder = profileSubtitle.textContent; 
  popupOpen(popupProfile);
})
popupProfileCloseButton.addEventListener("click", event=>{ //обработчик события  закрытие редактирования профиля
  event.preventDefault()
  popupClose(popupProfile);
})




popupPlaceOpenButton.addEventListener("click",  event=>{ // обработчик события открытия и добавления новой карточки места
  event.preventDefault()
    popupOpen(popupPlace);
})
popupPlaceCloseButton.addEventListener("click",  event=>{// обработчик события закрытия места
  event.preventDefault()
  
  popupClose(popupPlace);
})















let formElement = document.querySelector(".pop-up__container"); //форма для редактирования профиля

formElement.addEventListener("submit", event=>{                 //Обработчик события редактирования имени и профессии и закрытие формы
  event.preventDefault(); 
  profileTitle.textContent = newProfileTitle.value;
  profileSubtitle.textContent = newProfileDescription.value;
  popupClose(popupProfile)
});





  







