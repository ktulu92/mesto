const popup = document.querySelector(".pop-up");
const popupCloseButtons=document.querySelector(".pop-up__close-button");
const popupOpenButton = document.querySelector(".profile__edit-button");

const popupToggle = function () {
    popup.classList.toggle("pop-up_opened");
}

popupCloseButtons.addEventListener('click',popupToggle);
popupOpenButton.addEventListener('click',popupToggle);



console.log(
    popup ,
    popupCloseButtons,
    popupOpenButton,

);


let popUpSubmitButton = document.querySelector(".pop-up__submit-button");

let profileTitle = document.querySelector(".profile__title"); // Нашли в html текст имени пользователя
let profileSubtitle = document.querySelector(".profile__subtitle");  // Нашли в html текст описания пользователя

let newProfileTitle = document.querySelector(".pop-up__input-person-name");
let newProfileDescription = document.querySelector(".pop-up__input_person-description");


function changeProfileInfo(event){
    event.preventDefault(); 


    
    profileTitle.textContent = newProfileTitle.value;
    profileSubtitle.textContent = newProfileDescription.value;
    popupToggle()



}

popUpSubmitButton.addEventListener('click', changeProfileInfo);