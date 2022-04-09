import Popup from "./Popup.js";
export default class PopupWithDelete extends Popup {
    constructor(selector, handleSubmitForm) {
        super(selector)
        this.handleSubmitForm = handleSubmitForm;
        this._form = this.selector.querySelector('.popup__container');
        this._butonSubmit = this.selector.querySelector('.popup__btn')

    }

    changeSubmitHandler(newSubmit) {
        this.handleSubmitForm = newSubmit

    }
    setEventListeners() {
        super.setEventListeners()
        this._form.addEventListener('submit', (e) => {
            e.preventDefault()

            this.handleSubmitForm();


        })
    }
    close() {
        super.close()
        this._form.reset()
    }
}