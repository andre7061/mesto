const profileOpenButton = document.querySelector('.profile__edit-button');
const profilePopup = document.querySelector('.profile-popup');
const profileCloseButton = profilePopup.querySelector('.popup__close');
const buttonProfile = profilePopup.querySelector('.popup__btn');
const temlate = document.querySelector('#template').content;
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
    checkInutValidate(profilePopup, nameInput, );
    checkInutValidate(profilePopup, jobInput, );
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


initialCards.forEach(function(item) {
    const newItem = createCard(item.name, item.link);
    conteiner.prepend(newItem);
})


function createCard(titl, url) {
    const cardElement = temlate.cloneNode(true);
    cardElement.querySelector('.element__title').textContent = titl
    const cardImage = cardElement.querySelector('.element__images')
    cardImage.src = url
    cardImage.alt = titl
    addCardListeners(cardElement);
    return cardElement
}

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
    const newItem = createCard(inputTitle.value, inputUrl.value);
    conteiner.prepend(newItem);
    closeEditPopup();
    editForm.reset();
    const buttonEdit = evt.submitter;
    buttonEdit.classList.add('popup__btn_disabled');
    buttonEdit.setAttribute('disabled', true);

}
editForm.addEventListener('submit', handleCardFormSubmit);

function addCardListeners(el) {
    el.querySelector('.element__btn-del').addEventListener('click', delElement);
    el.querySelector('.element__vector').addEventListener('click', like);
    el.querySelector('.element__images').addEventListener('click', openPopupImages);
}

function delElement(e) {
    e.target.closest('.element').remove();
}

function like(e) {
    e.target.classList.toggle('element__vector_activ');
}


function openPopupImages(e) {
    openPopup(popupImages);
    titlePopupImages.textContent = e.target.alt;
    imagesPopupImage.src = e.target.src;
    imagesPopupImage.alt = e.target.alt;
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

////////////////////