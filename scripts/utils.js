export function openPopup(popup) {
    popup.classList.add('popup_opened');
    // popup.addEventListener('mousedown', closePopupOverlay);
    //document.addEventListener('keydown', handleEscKey);

}
export const popupImages = document.querySelector('.popup-images');

//export function closePopupOverlay(evt) {
// if (evt.target === evt.currentTarget) {
//    closePopup(evt.target);

// }
//}
//export function handleEscKey(evt) {
// if (evt.key === 'Escape') {
//    const openedPopup = document.querySelector('.popup_opened');
// closePopup(openedPopup);

//}
//}
export function closePopup(popup) {
    popup.classList.remove('popup_opened');
    //popup.removeEventListener('mousedown', closePopupOverlay);
    //document.removeEventListener('keydown', handleEscKey);


}