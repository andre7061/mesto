import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
    constructor(selector) {
        super(selector)

        this._popupImage = this.selector.querySelector('.popup-images__image');
        this._popupName = this.selector.querySelector('.popup-images__title');
    }
    open({ name, link }) {
        this._popupImage.src = link
        this._popupImage.alt = name
        this._popupName.textContent = name

        super.open()
    }

}