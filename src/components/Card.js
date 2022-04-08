export default class Card {
    constructor(data, selectorTemplete, handleCardClick, handleDeleteClick, handleLikeClick) {
        this.name = data.name;
        this.link = data.link;
        this.likes = data.likes;
        this._id = data.id;
        this._userId = data.userId;
        this._owner = data.owner
        this.selectorTemplete = selectorTemplete;
        this.handleCardClick = handleCardClick;
        this.handleDeleteClick = handleDeleteClick;
        this.handleLikeClick = handleLikeClick


    }
    _getTemplete() {
        const cardElement = document.querySelector(this.selectorTemplete).content.querySelector('.element').cloneNode(true);

        return cardElement
    }

    isLiked() {
        const userLike = this.likes.find(user => user._id === this._userId);
        return userLike
    }


    setLike(newLikes) {
        this.likes = newLikes
        const like = this._element.querySelector('.element__vector-count');
        like.textContent = this.likes.length;

        if (this.isLiked()) {
            this._addLikeColor()
        } else {
            this._removeLikeColor()
        }
    }



    generateCard() {
        this._element = this._getTemplete();
        this._element.querySelector('.element__title').textContent = this.name;
        this._element.querySelector('.element__images').src = this.link;
        this._butonLike = this._element.querySelector('.element__vector');
        this._butonClose = this._element.querySelector('.element__btn-del');
        this._image = this._element.querySelector('.element__images');
        this._addCardListeners();
        this.setLike(this.likes)
        if (this._owner !== this._userId) {
            this._butonClose.style.display = 'none'

        }


        return this._element

    }
    _addCardListeners() {
        this._butonLike.addEventListener('click', () => {
            this.handleLikeClick(this._id)

        })
        this._butonClose.addEventListener('click', () => {

            this.handleDeleteClick(this._id)

        })
        this._image.addEventListener('click', () => {
            this.handleCardClick({ name: this.name, link: this.link })



        })

    }

    _addLikeColor() {
        this._butonLike.classList.add('element__vector_activ')
    }
    _removeLikeColor() {
        this._butonLike.classList.remove('element__vector_activ')
    }


    pressClosse() {
        this._element.remove();
    }



}