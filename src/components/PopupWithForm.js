import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
    constructor(selector, handleSubmitForm) {
        super(selector)
        this.handleSubmitForm = handleSubmitForm;
        this._form = this.selector.querySelector('.popup__container');
        this._butonSubmit = this.selector.querySelector('.popup__btn')

    }
    _getInputValues() {
        const inputList = [...this._form.querySelectorAll('.popup__input')]
        const data = {}
        inputList.forEach(input => {
            data[input.name] = input.value

        })
        return data
    }
    loader(isLoading, selector) {
        if (isLoading) {
            this._butonSubmit.textContent = 'Сохранение...'
        } else {
            if (selector === 'add') {
                this._butonSubmit.textContent = 'Создать'
            } else {
                this._butonSubmit.textContent = 'Сохранить'
            }
        }
    }



    changeSubmitHandler(newSubmit) {
        this.handleSubmitForm = newSubmit

    }
    setEventListeners() {
        super.setEventListeners()
        this._form.addEventListener('submit', (e) => {
            e.preventDefault()

            this.handleSubmitForm(this._getInputValues());


        })
    }
    close() {
        super.close()
        this._form.reset()
    }
}