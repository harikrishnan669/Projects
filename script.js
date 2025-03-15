
const profileIcon = document.querySelector('.info-icon');
const infoCard = document.getElementById('infoCard');
const body = document.querySelector('body');


profileIcon.addEventListener('click', () => {
    infoCard.classList.toggle('show');
    body.classList.toggle('blur-background');
});


infoCard.addEventListener('click', (e) => {
    if (e.target === infoCard) {
        infoCard.classList.remove('show');
        body.classList.remove('blur-background');
    }
});
