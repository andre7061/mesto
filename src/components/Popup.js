export default class Popup {
    constructor(popupSelector) {
        this.selector = document.querySelector(popupSelector)
        this._handlerClickOverlay = this._handlerClickOverlay.bind(this)

        this._handleEscClose = this._handleEscClose.bind(this)



    }
    open() {
        this.selector.classList.add('popup_opened')
        document.addEventListener('keydown', this._handleEscClose);

    }
    close() {
        this.selector.classList.remove('popup_opened')
        document.removeEventListener('keydown', this._handleEscClose);

    }
    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close()
        }

    }
    _handlerClickOverlay(event) {
        if (event.target !== this.selector) return;
        this.close();
    }

    setEventListeners() {

        this.selector.querySelector('.popup__close').addEventListener('click', () => {
            this.close()
        });


        this.selector.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup_opened')) {
                this.close();
            }
        })
    }
}