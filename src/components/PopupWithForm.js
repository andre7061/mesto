import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
    constructor(selector, handleSubmitForm) {
        super(selector)
        this.handleSubmitForm = handleSubmitForm;
        this._form = this.selector.querySelector('.popup__container');
        //this._inputList = this._form.querySelectorAll('.popup__input')
    }
    _getInputValues() {
        const inputList = [...this._form.querySelectorAll('.popup__input')]
        const data = {}
        inputList.forEach(input => {
            data[input.name] = input.value

        })
        return data
    }
    setEventListeners() {
        super.setEventListeners()
        this._form.addEventListener('submit', () => {

            this.handleSubmitForm(this._getInputValues());


        })
    }
    close() {
        super.close()
        this._form.reset()
    }
}