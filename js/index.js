let open = document.querySelector('.profile__edit-button');
let block = document.querySelector('.popup');
let close = document.querySelector('.popup__link');

open.addEventListener('click', myFunction);


function myFunction() {
    block.classList.remove('popup_opened');
}



close.addEventListener('click', logo);

function logo() {
    block.classList.add('popup_opened');
}



let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__input');
let jobInput = document.querySelector('.popup__input2');

let title = document.querySelector('.profile__title');

nameInput.value = title.textContent;


let subTitle = document.querySelector('.profile__subtitle');
jobInput.value = subTitle.textContent


function formSubmitHandler(evt) {
    evt.preventDefault();
    logo();
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