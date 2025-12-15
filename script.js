document.addEventListener('DOMContentLoaded', () => {
    const cardInner = document.querySelector('.card-inner');
    const card = document.querySelector('.card');

    card.addEventListener('click', () => {
        cardInner.classList.toggle('flipped');
    });
});
