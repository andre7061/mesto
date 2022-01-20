let openPopupButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closePopupButton = document.querySelector('.popup__link');

openPopupButton.addEventListener('click', openPopup);


function openPopup() {
    popup.classList.add('popup_opened');
}



closePopupButton.addEventListener('click', closePopup);

function closePopup() {
    popup.classList.remove('popup_opened');
}



let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__input_place_name');
let jobInput = document.querySelector('.popup__input_place_job');

let title = document.querySelector('.profile__title');

nameInput.value = title.textContent;


let subTitle = document.querySelector('.profile__subtitle');
jobInput.value = subTitle.textContent;


function formSubmitHandler(evt) {
    evt.preventDefault();
    closePopup();
    title.textContent = nameInput.value;
    subTitle.textContent = jobInput.value
}
formElement.addEventListener('submit', formSubmitHandler);

let vector = document.querySelectorAll('.element__vector');
vector.forEach((item) => {
    item.addEventListener('click', function(e) {
        e.target.classList.toggle('element__vector_activ')
    })
})