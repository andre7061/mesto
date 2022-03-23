import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import { openPopup, popupImages, closePopup } from "./utils.js";
import Section from "./Section.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import UserInfo from "./UserInfo.js";



const profileOpenButton = document.querySelector('.profile__edit-button');
const profilePopup = document.querySelector('.profile-popup');
const profileTitle = profilePopup.querySelector('.popup__title')
const profileCloseButton = profilePopup.querySelector('.popup__close');
const buttonProfile = profilePopup.querySelector('.popup__btn');
const conteiner = document.querySelector('.elements');
const imagesPopupImage = document.querySelector('.popup-images__image');
const editOpenButton = document.querySelector('.profile__add-button');
const editPopup = document.querySelector('.edit-popup');
const btn = editPopup.querySelector('.popup__btn');
const editCloseButton = editPopup.querySelector('.popup__close');
const editForm = editPopup.querySelector('.popup__container')
const inputTitle = editPopup.querySelector('.popup__input_place_title');
const inputUrl = editPopup.querySelector('.popup__input_place_url');
const closeBtnPopupImage = popupImages.querySelector('.popup__close');
const titlePopupImages = document.querySelector('.popup-images__title');
const profileForm = profilePopup.querySelector('.popup__container');
const nameInput = document.querySelector('.popup__input_place_name');
const jobInput = document.querySelector('.popup__input_place_job');
const title = document.querySelector('.profile__title');
const subTitle = document.querySelector('.profile__subtitle');
const popupImage = document.querySelector('.popup-images__image');
const popupName = document.querySelector('.popup-images__title')

///////////////////////////////////////////////
const initialCards = [{
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];



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