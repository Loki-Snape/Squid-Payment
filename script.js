document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card-inner');
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});
