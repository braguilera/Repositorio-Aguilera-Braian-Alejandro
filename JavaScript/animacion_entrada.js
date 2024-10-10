document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.proyectos__card');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);  // Deja de observar el elemento una vez que se realiza la transición
            }
        });
    }, {
        threshold: [0.5]  // Activa cuando el 50% de la tarjeta esté en el viewport
    });
    
    cards.forEach(card => {
        observer.observe(card);
    });
});
