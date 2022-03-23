import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
    constructor(selector, handleSubmitForm) {
        super(selector)
        this.handleSubmitForm = handleSubmitForm;
        this._form = this.selector.querySelector('.popup__container');
        this._inputList = this._form.querySelectorAll('.popup__input')
    }
    _getInputValues() {
        this._formValues = {}
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value

        })
        return this._formValues
    }
    setEventListeners() {
        super.setEventListeners()
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this.handleSubmitForm(this._getInputValues());
            this.close()
        })
    }
    close() {
        super.close()
        this._form.reset()
    }
}