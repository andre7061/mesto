import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import {
    enableValidation,
    avatarPop,
    openButtomAvatar,
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
import PopupWithDelete from "../components/PopupWithDelete.js";
import "./index.css"
import { api } from "../components/Api.js"


let userId





function openEditPopup() {

    const userData = userInfo.getUserInfo()
    nameInput.value = userData.name;
    jobInput.value = userData.about;
    walidFormProfile.resetValidation()

    popupEdit.open()

}



function closeEditPopup(data) {
    const { user, proff } = data
    walidFormProfile.checkButtonValidate()
    popupEdit.loader(true)
    api.editProfile(user, proff)
        .then(res => {
            userInfo.setUserInfo(user, proff)
            popupEdit.close()
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            popupEdit.loader(false)
        });





}

function openAddPopup() {

    walidFormCard.checkButtonValidate()
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
            walidFormCard.checkButtonValidate()
            popupAdd.close();


        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            popupAdd.loader(false, 'add')
        });
}




profileOpenButton.addEventListener('click', openEditPopup);
editOpenButton.addEventListener('click', openAddPopup);




const walidFormProfile = new FormValidator(enableValidation, profilePopup);
const walidFormCard = new FormValidator(enableValidation, editForm);
const walidFormAvatar = new FormValidator(enableValidation, avatarPop)
walidFormProfile.enableValidation();
walidFormCard.enableValidation();
walidFormAvatar.enableValidation();

const openAvatarPopup = () => {
    walidFormAvatar.checkButtonValidate()
    avatarPopup.open()

}

openButtomAvatar.addEventListener('click', openAvatarPopup)


////////////////////
const handleCardClick = (name, link) => {
    popupImagess.open(name, link)

}

function cardCreate(item) {
    const cardItem = new Card(item, '#template', handleCardClick,

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
                .catch((err) => {
                    console.log(err)
                })

        },
        (id) => {
            if (cardItem.isLiked()) {
                api.deleteLike(id)
                    .then(res => {
                        cardItem.setLike(res.likes)

                    })
                    .catch((err) => {
                        console.log(err)
                    })
            } else {
                api.addLike(id)
                    .then(res => {
                        cardItem.setLike(res.likes)

                    })
                    .catch((err) => {
                        console.log(err)
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

        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            avatarPopup.loader(false)
        });

}


const popupImagess = new PopupWithImage('.popup-images');
const popupEdit = new PopupWithForm('.profile-popup', closeEditPopup);
const popupAdd = new PopupWithForm('.edit-popup', closeAddpopup);
const userInfo = new UserInfo(userSelect);
const deletePopup = new PopupWithDelete('.delete-popup');
const avatarPopup = new PopupWithForm('.avatar-popup', closeAvatarPopup);

popupImagess.setEventListeners();
popupEdit.setEventListeners();
popupAdd.setEventListeners();
deletePopup.setEventListeners();
avatarPopup.setEventListeners();
Promise.all([api.getProfile(), api.getInitialCards()])
    .then(([userData, cards]) => {


        userInfo.setUserInfo(userData.name, userData.about, );
        userInfo.setAvatar(userData)
        console.log(cards)
        userId = userData._id
        cards.forEach(data => {
            const card = cardCreate({
                name: data.name,
                link: data.link,
                likes: data.likes,
                id: data._id,
                userId: userId,
                owner: data.owner._id

            })

            cardSection.addItem(card)

            // тут установка данных пользователя
            // и тут отрисовка карточек
        })

    }).catch((err) => {
        console.log(err)
    });