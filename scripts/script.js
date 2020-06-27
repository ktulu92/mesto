const popup = document.querySelector(".pop-up");
const popupCloseButton=document.querySelector(".pop-up__close-button");
const popupOpenButton = document.querySelector(".profile__edit-button");

let profileTitle = document.querySelector(".profile__title"); // Нашли в DOM текст имени пользователя
let profileSubtitle = document.querySelector(".profile__subtitle");  // Нашли в DOM текст описания пользователя

let newProfileTitle = document.querySelector(".pop-up__input_type_name");
let newProfileDescription = document.querySelector(".pop-up__input_type_description");




const popupOpen = function(){
  newProfileTitle.value = profileTitle.textContent;
  newProfileDescription.value = profileSubtitle.textContent;
  popup.classList.add("pop-up_opened");
}

const popupClose = function(){
  popup.classList.remove("pop-up_opened");
}

popupCloseButton.addEventListener('click',popupClose);
popupOpenButton.addEventListener('click',popupOpen);


let formElement = document.querySelector(".pop-up__container");
console.log(formElement)

function changeProfileInfo(event){
    event.preventDefault(); 
    profileTitle.textContent = newProfileTitle.value;
    profileSubtitle.textContent = newProfileDescription.value;
    popupClose()
}

formElement.addEventListener('submit', changeProfileInfo);