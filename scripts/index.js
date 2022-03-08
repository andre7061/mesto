import FormValidator from "./FormValidator.js";
import Card from "./Card.js";


const profileOpenButton = document.querySelector('.profile__edit-button');
const profilePopup = document.querySelector('.profile-popup');
const profileCloseButton = profilePopup.querySelector('.popup__close');
const buttonProfile = profilePopup.querySelector('.popup__btn');
const conteiner = document.querySelector('.elements');
const popupImages = document.querySelector('.popup-images')
const imagesPopupImage = document.querySelector('.popup-images__image');
const editOpenButton = document.querySelector('.profile__add-button');
const editPopup = document.querySelector('.edit-popup');
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

function openPopup(popup) {
    popup.classList.add('popup_opened');
    popup.addEventListener('mousedown', closePopupOverlay);
    document.addEventListener('keydown', handleEscKey);

}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    popup.removeEventListener('mousedown', closePopupOverlay);
    document.removeEventListener('keydown', handleEscKey);


}

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






initialCards.forEach((item) => {
    const newItem = new Card(item, '#template');
    const cardElement = newItem.generateCard()
    conteiner.prepend(cardElement);
})

function openEditPopup() {
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
    CreatCard(newItem)
    const item = new Card(newItem, '#template');
    const cardElement = item.generateCard()
    conteiner.prepend(cardElement);
    closeEditPopup();
    editForm.reset();
    const buttonEdit = evt.submitter;
    buttonEdit.classList.add('popup__btn_disabled');
    buttonEdit.setAttribute('disabled', true);

}
editForm.addEventListener('submit', handleCardFormSubmit);

function addCardListeners(el) {


    el.querySelector('.element__images').addEventListener('click', openPopupImages);
}

const CreatCard = (item) => {
    return new Card(item, '#template')
}

function closePopupImages() {
    closePopup(popupImages);
}
closeBtnPopupImage.addEventListener('click', closePopupImages);



function closePopupOverlay(evt) {
    if (evt.target === evt.currentTarget) {
        closePopup(evt.target);

    }
}

function handleEscKey(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);

    }
}
const enableValidation = {
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__btn',
    inactiveButtonClass: 'popup__btn_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_activ'
};

const walidFormProfil = new FormValidator(enableValidation, profilePopup);
const walidFormCard = new FormValidator(enableValidation, editForm)
walidFormProfil.enableValidation();
walidFormCard.enableValidation()


////////////////////