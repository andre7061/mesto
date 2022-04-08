class Api {
    constructor({ baseUrl, headers }) {
        this._headers = headers
        this._baseUrl = baseUrl
            // тело конструктора
    }
    getProfile() {
        return fetch(`${this._baseUrl}/users/me`, {
                headers: this._headers
            })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(console.log)
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
                headers: this._headers,

            })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(console.log)
    }

    editProfile(name, about) {
        return fetch(`${this._baseUrl}/users/me`, {
                method: "PATCH",
                headers: this._headers,
                body: JSON.stringify({
                    name,
                    about
                })
            })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(console.log)
    }
    addCards(name, link) {
        return fetch(`${this._baseUrl}/cards`, {
                method: "POST",
                headers: this._headers,
                body: JSON.stringify({
                    name,
                    link
                })
            })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(console.log)
    }
    deleteCards(id) {
        return fetch(`${this._baseUrl}/cards/${id}`, {
                method: "DELETE",
                headers: this._headers,

            })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(console.log)
    }
    deleteLike(id) {
        return fetch(`${this._baseUrl}/cards/${id}/likes`, {
                method: "DELETE",
                headers: this._headers,

            })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(console.log)
    }


    addLike(id) {
        return fetch(`${this._baseUrl}/cards/${id}/likes`, {
                method: "PUT",
                headers: this._headers,

            })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(console.log)
    }

    profileCards(data) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
                method: "PATCH",
                headers: this._headers,
                body: JSON.stringify({
                    avatar: data.proffs

                })
            })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(console.log)
    }




}

export const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-39',
    headers: {
        authorization: '9b58c519-a94b-4204-b78a-cb5ee6f72bea',
        'Content-Type': 'application/json'
    }
});