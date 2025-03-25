const openButton = document.querySelector('#open-modal');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close-button');

const openModal = () => {
    modal.classList.add('open');
    modal.attributes['aria-hidden'] = false;

};

const closeModal = () => {
    modal.classList.remove('open');
    modal.attributes['aria-hidden'] = true;
};

openButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});