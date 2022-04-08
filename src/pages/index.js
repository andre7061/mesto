import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
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
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import "./index.css"
import { api } from "../components/Api.js"


let userId


api.getProfile()
    .then(res => {
        console.log(res)
        userInfo.setUserInfo(res.name, res.about, )
        userId = res._id
    })
api.getInitialCards()
    .then(cardList => {
        console.log(cardList)
        cardList.forEach(data => {
            const card = cardCreate({
                name: data.name,
                link: data.link,
                likes: data.likes,
                id: data._id,
                userId: userId,
                owner: data.owner._id
            })

            cardSection.addItem(card)
        })
    })

function openEditPopup() {
    popupEdit.loader(false)
    const userData = userInfo.getUserInfo()
    nameInput.value = userData.name;
    jobInput.value = userData.about;
    walidFormProfile.resetValidation()

    popupEdit.open()

}



function closeEditPopup(data) {
    const { user, proff } = data
    walidFormProfile._checkButtonValidate()
    popupEdit.loader(true)
    api.editProfile(user, proff)
        .then(res => {
            userInfo.setUserInfo(user, proff)
        })



    popupEdit.close()

}

function openAddPopup() {
    editForm.reset();
    walidFormCard.resetValidation()
    popupAdd.open()

}


function closeAddpopup(data) {
    popupAdd.loader(true)
    api.addCards(data['users'], data['proffs'])
        .then(res => {
            const item = cardCreate({
                name: res.name,
                link: res.link,
                likes: res.likes,
                id: res._id,
                userId: userId,
                owner: res.owner._id
            })

            cardSection.addItem(item);
            walidFormCard._checkButtonValidate()
            popupAdd.close();
            popupAdd.loader(false, 'add')

        })
}


const openButtomAvatar = document.querySelector('.profile__images-wrapper')

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

const openAvatarPopup = () => {
    avatarPopup.open()
}

openButtomAvatar.addEventListener('click', openAvatarPopup)


////////////////////
const handleCardClick = (name, link) => {
    popupImagess.open(name, link)

}

function cardCreate(item) {
    const cardItem = new Card(item, '#template', handleCardClick,
        // () => { popupImagess.open(item.name, item.link) },
        (id) => {
            deletePopup.open();
            deletePopup.changeSubmitHandler(() => {
                api.deleteCards(id)
                    .then(res => {
                        // console.log(res)
                        deletePopup.close();
                        cardItem.pressClosse()

                    })
            })

        },
        (id) => {
            if (cardItem.isLiked()) {
                api.deleteLike(id)
                    .then(res => {
                        cardItem.setLike(res.likes)

                    })
            } else {
                api.addLike(id)
                    .then(res => {
                        cardItem.setLike(res.likes)

                    })
            }
        }
    )


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


const userSelect = {
    nameElementSelector: '.profile__title',
    aboutElementSelectorr: '.profile__subtitle',
    avatarElementSelector: '.profile__avatar-images'
}

const closeAvatarPopup = (data) => {
    avatarPopup.loader(true)
    api.profileCards(data)
        .then(res => {
            console.log(res.avatar)
            userInfo.setAvatar(res)
            avatarPopup.close()
            avatarPopup.loader(false)
        })

}


const popupImagess = new PopupWithImage('.popup-images');
const popupEdit = new PopupWithForm('.profile-popup', closeEditPopup);
const popupAdd = new PopupWithForm('.edit-popup', closeAddpopup);
const userInfo = new UserInfo(userSelect);
const deletePopup = new PopupWithForm('.delete-popup');
const avatarPopup = new PopupWithForm('.avatar-popup', closeAvatarPopup)

popupImagess.setEventListeners();
popupEdit.setEventListeners();
popupAdd.setEventListeners();
deletePopup.setEventListeners();
avatarPopup.setEventListeners()