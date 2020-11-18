class Api {
  constructor(url, headers) {
    this.url = url;
    this.headers = headers;
  }

  //ЭТОТ МЕТОД РАБОТАЕТ
  getInitialCards() {
    return fetch("https://mesto.nomoreparties.co/v1/cohort-17/cards", {
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

  //ЭТОТМЕТОД РАБОТАЕТ
  addNewCard({ name, link }) {
    return fetch("https://mesto.nomoreparties.co/v1/cohort-17/cards", {
      method: "POST",

      headers: {
        authorization: "c9722db9-3ef8-471a-a8fd-61097de987b4",
        "Content-Type": "application/json",
      },
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
      `https://mesto.nomoreparties.co/v1/cohort-17/cards/${cardId}`,
      {
        method: "DELETE",

        headers: {
          authorization: "c9722db9-3ef8-471a-a8fd-61097de987b4",
          "Content-Type": "application/json",
        },
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
      `https://mesto.nomoreparties.co/v1/cohort-17/cards/likes/${cardId}`,
      {
        method: "PUT",

        headers: {
          authorization: "c9722db9-3ef8-471a-a8fd-61097de987b4",
          "Content-Type": "application/json",
        },
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
      `https://mesto.nomoreparties.co/v1/cohort-17/cards/likes/${cardId}`,
      {
        method: "DELETE",

        headers: {
          authorization: "c9722db9-3ef8-471a-a8fd-61097de987b4",
          "Content-Type": "application/json",
        },
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
      "https://mesto.nomoreparties.co/v1/cohort-17/users/me/avatar",
      {
        method: "PATCH",
        headers: {
          authorization: "c9722db9-3ef8-471a-a8fd-61097de987b4",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          avatar: url,
        }),
      }
    ).then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    });
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

  editProfile(name, about) {
    return fetch("https://mesto.nomoreparties.co/v1/cohort-17/users/me", {
      method: "PATCH",
      headers: {
        authorization: "c9722db9-3ef8-471a-a8fd-61097de987b4",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    });
  }
}

export default Api;
