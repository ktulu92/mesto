const ESC_KEYCODE = 27;
     
const popupImage = document.querySelector(".pop-up_type_image");

  
  
  
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

  const validationData = {
    formSelector: ".pop-up__container",
    inputSelector: ".pop-up__input",
    submitButtonSelector: ".pop-up__submit-button",
    inactiveButtonClass: "pop-up__submit-button_type_disabled",
    inputErrorClass: "pop-up__input_type_error",
    errorClass: "pop-up__error_element_type_active",
  };


export const OpenImagePopup = function () {
    const image = document.querySelector(".pop-up_container_type_image");
    const imageTitle = document.querySelector(".pop-up__image-title");
    const popupImageOpenButton = document.querySelector(".element__image");
    image.src = popupImageOpenButton.src;
    imageTitle.textContent = popupImageOpenButton.alt;
    openPopup(popupImage);
  };


  export const handlePopupClose = (event) => {
    if (event.which === ESC_KEYCODE) {
      closePopup(popup);
     
    }
  };

  export const openPopup = function (popup) {    
    popup.classList.add("pop-up_opened");
    document.addEventListener("keydown", handlePopupClose(popup));
  
  
    };


    export const closePopup = function (popup) {
        
        popup.classList.remove("pop-up_opened");
        document.removeEventListener("keydown", handlePopupClose(popup));
      };
 


    export{initialCards}
    export {validationData}