document.addEventListener("DOMContentLoaded", function() {
   
    const serviceCards = document.querySelectorAll('.card.column');
    serviceCards.forEach((card) => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('hovered');
        });
        card.addEventListener('mouseleave', () => {
            card.classList.remove('hovered');
        });
    });

    const projectLinks = document.querySelectorAll('.btn-linkedin');
    projectLinks.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const url = btn.getAttribute('href');
            window.open(url, '_blank');
        });
    });
});
