export default class UserInfo {
    constructor({ nameElementSelector, aboutElementSelectorr }) {
        this._nameUser = document.querySelector(nameElementSelector)
        this._aboutUser = document.querySelector(aboutElementSelectorr)
    }
    getUserInfo() {
        const data = {
            name: this._nameUser.textContent,
            about: this._aboutUser.textContent
        }
        return data
    }
    setUserInfo(name, about) {
        this._nameUser.textContent = name
        this._aboutUser.textContent = about


    }

}