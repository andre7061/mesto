export default class Popup {
    constructor(selector) {
        this.selector = document.querySelector(selector)
        this._handlerClickOverlay = this._handlerClickOverlay.bind(this)

        this._handleEscClose = this._handleEscClose.bind(this)



    }
    open() {
        this.selector.classList.add('popup_opened')
        document.addEventListener('keydown', this._handleEscClose);
        document.addEventListener('click', this._handlerClickOverlay);
    }
    close() {
        this.selector.classList.remove('popup_opened')
        document.removeEventListener('keydown', this._handleEscClose);
        document.removeEventListener('click', this._handlerClickOverlay);
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