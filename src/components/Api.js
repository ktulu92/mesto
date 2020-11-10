

class Api {
  constructor(url,headers) {
    this.url = url;
    this.headers = headers;
  }

  getProfileInfo() {
    return fetch("https://mesto.nomoreparties.co/v1/cohort-17/users/me", {
        method: "GET",
      headers: {
        authorization: "c9722db9-3ef8-471a-a8fd-61097de987b4",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
        
      }

      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  getInitialCards() {
     return fetch("https://mesto.nomoreparties.co/v1/cohort-17/cards", {
      method: "GET",
      headers: {
        authorization: "c9722db9-3ef8-471a-a8fd-61097de987b4",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  editProfile() {
    return fetch("https://mesto.nomoreparties.co/v1/cohortId/users/me", {
      method: "PATCH",
      headers: {
        authorization: "c56e30dc-2883-4270-a59e-b2f7bae969c6",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Marie Skłodowska Curie",
        about: "Physicist and Chemist",
      }),
    });
  }


addNewCard(){
    return fetch("https://mesto.nomoreparties.co/v1/cohort-17/cards", {
        method: "POST",
        headers: {
          authorization: "c9722db9-3ef8-471a-a8fd-61097de987b4",
          
        },
      }).then((res) => {
        if (res.ok) {
          return res.json();
        }
  
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
      });
    }

    
}



export default Api;