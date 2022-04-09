export const popupImages = document.querySelector('.popup-images');
export const profileOpenButton = document.querySelector('.profile__edit-button');
export const profilePopup = document.querySelector('.profile-popup');
export const avatarPop = document.querySelector('.avatar-popup')
export const editOpenButton = document.querySelector('.profile__add-button');
export const editPopup = document.querySelector('.edit-popup');
export const editForm = editPopup.querySelector('.popup__container')
export const inputTitle = editPopup.querySelector('.popup__input_place_title');
export const inputUrl = editPopup.querySelector('.popup__input_place_url');
export const nameInput = document.querySelector('.popup__input_place_name');
export const jobInput = document.querySelector('.popup__input_place_job');
export const title = document.querySelector('.profile__title');
export const subTitle = document.querySelector('.profile__subtitle');
export const openButtomAvatar = document.querySelector('.profile__images-wrapper')

export const enableValidation = {
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__btn',
    inactiveButtonClass: 'popup__btn_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_activ'
};



export const initialCards = [{
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