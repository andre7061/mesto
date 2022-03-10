export default class FormValidator {
    constructor(enableValidation, formElement) {
        this._formSelector = enableValidation.formSelector;
        this._inputSelector = enableValidation.inputSelector;
        this._submitButtonSelector = enableValidation.submitButtonSelector;
        this._inactiveButtonClass = enableValidation.inactiveButtonClass;
        this._inputErrorClass = enableValidation.inputErrorClass;
        this._errorClass = enableValidation.errorClass;
        this._formElement = formElement
        this._inputs = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._button = this._formElement.querySelector(this._submitButtonSelector);
    }
    _showError(input) {
        const errorMessege = this._formElement.querySelector(`#error-${input.id}`);
        input.classList.remove(this._inputErrorClass);
        errorMessege.classList.remove(this._errorClass);
        errorMessege.textContent = ''
    }
    _hedeError(input, errorMess) {
        const errorMessege = this._formElement.querySelector(`#error-${input.id}`);
        input.classList.add(this._inputErrorClass);
        errorMessege.textContent = errorMess
        errorMessege.classList.add(this._errorClass);
    }
    _hasInvalidInput() {
        return this._inputs.some((input) => {
            return !input.validity.valid;
        });
    }
    _checkInutValidate(input) {
        if (!input.validity.valid) {
            this._hedeError(input, input.validationMessage);

        } else {
            this._showError(input);
        }
    }
    _setEventLisstener() {
        this._checkButtonValidate()

        this._inputs.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInutValidate(inputElement);
                this._checkButtonValidate()
            })
        })
    }



    _checkButtonValidate = () => {
        if (this._hasInvalidInput(this._inputs)) {
            this._button.classList.add(this._inactiveButtonClass);
            this._button.setAttribute('disabled', true);
        } else {
            this._button.classList.remove(this._inactiveButtonClass);
            this._button.removeAttribute("disabled", false);
        }
    }



    enableValidation() {
        this._formElement.addEventListener('submit', function(evt) {
            evt.preventDefault();

        });

        this._setEventLisstener();
    };



}