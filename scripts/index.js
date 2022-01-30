const openPopupButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closePopupButton = popup.querySelector('.popup__link');
openPopupButton.addEventListener('click', openPopup);

function openPopup() {
    popup.classList.add('popup_opened');
    nameInput.value = title.textContent;
    jobInput.value = subTitle.textContent;
}

closePopupButton.addEventListener('click', closePopup);

function closePopup() {
    popup.classList.remove('popup_opened');
}

const formElement = document.querySelector('.popup__container');
const nameInput = document.querySelector('.popup__input_place_name');
const jobInput = document.querySelector('.popup__input_place_job');
const title = document.querySelector('.profile__title');
const subTitle = document.querySelector('.profile__subtitle');

function formSubmitHandler(evt) {
    evt.preventDefault();
    closePopup();
    title.textContent = nameInput.value;
    subTitle.textContent = jobInput.value;
}
formElement.addEventListener('submit', formSubmitHandler);





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
const temlate = document.querySelector('#template').content;
const conteiner = document.querySelector('.elements');
const popupImages = document.querySelector('.popup-images')
const imagesPopupImage = document.querySelector('.popup-images__image');
const openAddButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup_place_add-button');
const closeAddButton = popupAdd.querySelector('.popup__link_place_add-button');
const formElementAdd = popupAdd.querySelector('.popup__container_place_add-button')
const inputTitle = popupAdd.querySelector('.popup__input_place_title');
const inputUrl = popupAdd.querySelector('.popup__input_place_url');
const closeBtnPopupImage = document.querySelector('.popup-images__close-btn');
const titlepopupImages = document.querySelector('.popup-images__title');

initialCards.forEach(function(i) {
    const newItem = temlate.cloneNode(true);
    newItem.querySelector('.element__title').innerText = i.name;
    newItem.querySelector('.element__images').src = i.link;
    newItem.querySelector('.element__images').alt = i.name;

    addLiss(newItem)
    conteiner.append(newItem);

})

inputTitle.addEventListener('click', function(e) {
    e.target.classList.remove('popup__input_place_title');
    inputTitle.value = '';


});
inputUrl.addEventListener('click', function(e) {
    e.target.classList.remove('popup__input_place_url');
    inputUrl.value = ''
})


function openAdd() {
    popupAdd.classList.add('popup_opened');
    inputTitle.value = 'Название';
    inputUrl.value = 'Ссылка на картинку'

}

function closeAdd() {
    popupAdd.classList.remove('popup_opened');
}
openAddButton.addEventListener('click', openAdd);
closeAddButton.addEventListener('click', closeAdd);

function formSubmitAdd(evt) {
    evt.preventDefault();
    const newItem = temlate.cloneNode(true);
    newItem.querySelector('.element__title').innerText = inputTitle.value;
    newItem.querySelector('.element__images').src = inputUrl.value;
    newItem.querySelector('.element__images').alt = inputTitle.value;

    addLiss(newItem);
    conteiner.prepend(newItem);
    closeAdd();

}
formElementAdd.addEventListener('submit', formSubmitAdd);

function addLiss(el) {
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

    imagesPopupImage.src = e.target.src;
    imagesPopupImage.alt = e.target.alt;
    titlepopupImages.textContent = e.target.alt;
    popupImages.classList.add('popup-images__open');
}

function closePopupImages() {
    popupImages.classList.remove('popup-images__open');
}
closeBtnPopupImage.addEventListener('click', closePopupImages);







//////////////