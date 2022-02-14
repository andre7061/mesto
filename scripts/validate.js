function hasInvalidInput(inputs) {
    return inputs.some((input) => {
        return !input.validity.valid;
    });
}
const showError = (formElement, input, inputErrorClass, errorClass) => {
    const errorMessege = formElement.querySelector(`#error-${input.id}`);
    input.classList.remove(inputErrorClass);
    errorMessege.classList.remove(errorClass);
    errorMessege.textContent = ''

}
const hedeError = (formElement, input, inputErrorClass, errorClass) => {
    const errorMessege = formElement.querySelector(`#error-${input.id}`);
    input.classList.add(inputErrorClass);
    errorMessege.textContent = input.validationMessage;
    errorMessege.classList.add(errorClass);

}




const checkInutValidate = (formElement, input, inputErrorClass, errorClass) => {


    if (!input.validity.valid) {
        hedeError(formElement, input, inputErrorClass, errorClass)

    } else {
        showError(formElement, input, inputErrorClass, errorClass)
    }
}
const checkButtonValidate = (inputs, button, inactiveButtonClass, ) => {
    if (hasInvalidInput(inputs)) {
        button.classList.add(inactiveButtonClass);
        button.setAttribute('disabled', true)
    } else {
        button.classList.remove(inactiveButtonClass)
        button.removeAttribute("disabled", false)
    }
}

const setEventlisstener = (formElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass) => {
    const inputs = Array.from(formElement.querySelectorAll(inputSelector))
    const button = formElement.querySelector(submitButtonSelector)
    checkButtonValidate(inputs, button, inactiveButtonClass, errorClass)
    inputs.forEach(input => {
        input.addEventListener('input', (event) => {
            checkInutValidate(formElement, input, inputErrorClass, errorClass);
            checkButtonValidate(inputs, button, inactiveButtonClass)
        })
    })
}

const enableValidation = (obj) => {
    const formList = Array.from(document.querySelectorAll(obj.formSelector))
    formList.forEach(formElement => {
        setEventlisstener(formElement, obj.inputSelector, obj.submitButtonSelector, obj.inactiveButtonClass, obj.errorClass, obj.errorClass)
    })
}


enableValidation({
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__btn',
    inactiveButtonClass: 'popup__btn_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_activ'
});