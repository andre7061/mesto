import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import { openPopup, popupImages, closePopup } from "./utils.js";



const profileOpenButton = document.querySelector('.profile__edit-button');
const profilePopup = document.querySelector('.profile-popup');
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



profileOpenButton.addEventListener('click', openProfilePopup);


profileCloseButton.addEventListener('click', closeProfilePopup);


function closeProfilePopup() {
    closePopup(profilePopup)
}


function openProfilePopup() {
    openPopup(profilePopup)
    nameInput.value = title.textContent;
    jobInput.value = subTitle.textContent;

}

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    closeProfilePopup();
    title.textContent = nameInput.value;
    subTitle.textContent = jobInput.value;
}
profileForm.addEventListener('submit', handleProfileFormSubmit);





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

const renderCard = (item) => {
    return conteiner.prepend(new Card(item, '#template').generateCard());

}

initialCards.forEach((item) => {

    renderCard(item);
})

function openEditPopup() {
    walidFormCard._checkButtonValidate()

    openPopup(editPopup)

}

function closeEditPopup() {
    closePopup(editPopup);

}
editOpenButton.addEventListener('click', openEditPopup);
editCloseButton.addEventListener('click', closeEditPopup);

function handleCardFormSubmit(evt) {
    evt.preventDefault();
    const newItem = {
        name: inputTitle.value,
        link: inputUrl.value
    }
    renderCard(newItem);

    closeEditPopup();
    editForm.reset();
}
editForm.addEventListener('submit', handleCardFormSubmit);



function closePopupImages() {
    closePopup(popupImages);
}
closeBtnPopupImage.addEventListener('click', closePopupImages);


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