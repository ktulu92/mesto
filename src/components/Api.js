class Api {
  constructor(url, headers) {
    this.url = url;
    this.headers = headers;
  }
 
  

  //ЭТОТ МЕТОД РАБОТАЕТ
  getInitialCards() {
    console.log(`${this.url}`+"cards")
    return fetch(`${this.url}`+"cards", {
      headers: this.headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log("Запрос не выполнен", err);
    });
  }

  //ЭТОТМЕТОД РАБОТАЕТ
  addNewCard({ name, link }) {
    
    return fetch(`${this.url}`+"cards", {
      method: "POST",
      

      headers: this.headers
      ,
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
      })

      .catch((err) => {
        console.log("Запрос не выполнен", err);
      });
  }

  deleteCard(cardId) {
    return fetch(
     
      `${this.url}`+"cards/"+`${cardId}`,
      {
        method: "DELETE",

        headers: this.headers,
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
      })

      .catch((err) => {
        console.log("Запрос не выполнен", err);
      });
  }

  likeCard(cardId) {
    return fetch(
      
      `${this.url}`+ "cards/likes/" + `${cardId}`,
      {
        method: "PUT",

        headers: this.headers,
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
      })

      .catch((err) => {
        console.log("Запрос не выполнен", err);
      });
  }

  dislikeCard(cardId) {
    return fetch(
      `${this.url}`+"cards/likes/"+ `${cardId}`,
      {
        method: "DELETE",

        headers: this.headers,
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
      })

      .catch((err) => {
        console.log("Запрос не выполнен", err);
      });
  }

  updateUserAvatar(url) {
    return fetch(
      `${this.url}` +"users/me/avatar",
      {
        method: "PATCH",
        headers: this.headers,
        body: JSON.stringify({
          avatar: url,
        }),
      }
    ).then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log("Запрос не выполнен", err);
    });
  }

  getProfileInfo() {
    return fetch(`${this.url}` + "users/me", {
      method: "GET",
      headers: this.headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log("Запрос не выполнен", err);
    });
  }

  editProfile(name, about) {
    return fetch(`${this.url}` + "users/me", {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    })
    .catch((err) => {
      console.log("Запрос не выполнен", err);
    });
  }
}

export default Api;
