document.addEventListener("DOMContentLoaded", function() {
    // Add hover effect on service cards
    const serviceCards = document.querySelectorAll('.card.column');
    serviceCards.forEach((card) => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('hovered');
        });
        card.addEventListener('mouseleave', () => {
            card.classList.remove('hovered');
        });
    });

    // Add click event to project buttons for opening LinkedIn links in a new tab
    const projectLinks = document.querySelectorAll('.btn-linkedin');
    projectLinks.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const url = btn.getAttribute('href');
            window.open(url, '_blank');
        });
    });
});
