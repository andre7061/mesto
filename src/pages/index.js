import FormValidator from "../scripts/FormValidator.js";
import Card from "../scripts/Card.js";
import {
    popupImages,
    profileOpenButton,
    profilePopup,
    editOpenButton,
    editPopup,
    editForm,
    inputTitle,
    inputUrl,
    nameInput,
    jobInput,
    title,
    subTitle,
    initialCards
} from "../utils/constants.js";
import Section from "../scripts/Section.js";
import PopupWithForm from "../scripts/PopupWithForm.js";
import PopupWithImage from "../scripts/PopupWithImage.js";
import UserInfo from "../scripts/UserInfo.js";
import "./index.css"




function openEditPopup() {

    const userData = userInfo.getUserInfo()
    nameInput.value = userData.name;
    jobInput.value = userData.about;
    walidFormProfile.resetValidation()

    popupEdit.open()

}

function closeEditPopup() {
    walidFormProfile._checkButtonValidate()
    title.textContent = nameInput.value;
    subTitle.textContent = jobInput.value;
    popupEdit.close()
}

function openAddPopup() {
    walidFormCard.resetValidation()
    popupAdd.open()

}


function closeAddpopup() {
    const item = {
        name: inputTitle.value,
        link: inputUrl.value
    }
    editForm.reset();
    cardSection.addItem(cardCreate(item))
    walidFormCard._checkButtonValidate()
    popupAdd.close()

}
profileOpenButton.addEventListener('click', openEditPopup);
editOpenButton.addEventListener('click', openAddPopup);


const enableValidation = {
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__btn',
    inactiveButtonClass: 'popup__btn_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_activ'
};

const walidFormProfile = new FormValidator(enableValidation, profilePopup);
const walidFormCard = new FormValidator(enableValidation, editForm)
walidFormProfile.enableValidation();
walidFormCard.enableValidation()


////////////////////
const handleCardClick = (name, link) => {
    popupImagess.open(name, link)
}

function cardCreate(item) {
    const cardItem = new Card(item, '#template', handleCardClick)
    const cardElement = cardItem.generateCard()
    return cardElement
}

///////////////
const cardSection = new Section({
        items: initialCards,
        renderer: (item) => {
            cardSection.addItem(cardCreate(item))
        },
    },
    '.elements')

cardSection.setItems()
    //////////////////////
const userSelect = {
    nameUser: '.profile__title',
    aboutUser: '.profile__subtitle'
}


const popupImagess = new PopupWithImage('.popup-images');

popupImagess.setEventListeners();

const popupEdit = new PopupWithForm('.profile-popup', closeEditPopup)
const popupAdd = new PopupWithForm('.edit-popup', closeAddpopup)
const userInfo = new UserInfo(userSelect)
popupEdit.setEventListeners();
popupAdd.setEventListeners();