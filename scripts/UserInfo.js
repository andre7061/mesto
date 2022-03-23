export default class UserInfo {
    constructor({ nameUser, aboutUser }) {
        this._nameUser = document.querySelector(nameUser)
        this._aboutUser = document.querySelector(aboutUser)
    }
    getUserInfo() {
        const data = {
            name: this._nameUser.textContent,
            about: this._aboutUser.textContent
        }
        return data
    }
    setUserInfo({ name, about }) {
        this._nameUser.textContent = name
        this._aboutUser.textContent = about

    }

}