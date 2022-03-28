export default class Card {
    constructor(data, selectorTemplete, handleCardClick) {
        this.name = data.name;
        this.link = data.link;
        this.selectorTemplete = selectorTemplete;
        this.handleCardClick = handleCardClick
    }
    _getTemplete() {
        const cardElement = document.querySelector(this.selectorTemplete).content.querySelector('.element').cloneNode(true);

        return cardElement
    }
    generateCard() {
        this._element = this._getTemplete();
        this._element.querySelector('.element__title').textContent = this.name;
        this._element.querySelector('.element__images').src = this.link;
        this._butonLike = this._element.querySelector('.element__vector');
        this._butonClose = this._element.querySelector('.element__btn-del');
        this._image = this._element.querySelector('.element__images');
        this._addCardListeners();

        return this._element

    }
    _addCardListeners() {
        this._butonLike.addEventListener('click', () => {
            this._pressLike()

        })
        this._butonClose.addEventListener('click', () => {
            this._pressClosse()
        })
        this._image.addEventListener('click', () => {
            this.handleCardClick({ name: this.name, link: this.link })



        })

    }

    _pressLike() {
        this._butonLike.classList.toggle('element__vector_activ')
    }

    _pressClosse() {
        this._element.remove();
    }


}