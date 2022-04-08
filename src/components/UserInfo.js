export default class UserInfo {
    constructor({ nameElementSelector, aboutElementSelectorr, avatarElementSelector }) {
        this._nameUser = document.querySelector(nameElementSelector);
        this._aboutUser = document.querySelector(aboutElementSelectorr);
        this._avatarUser = document.querySelector(avatarElementSelector)
    }
    getUserInfo() {
        const data = {
            name: this._nameUser.textContent,
            about: this._aboutUser.textContent
        }
        return data
    }
    setUserInfo(name, about, ) {
        this._nameUser.textContent = name
        this._aboutUser.textContent = about






    }
    setAvatar({ avatar }) {
        this._avatarUser.src = avatar

    }


}