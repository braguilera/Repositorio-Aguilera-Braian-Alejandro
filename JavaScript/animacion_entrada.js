document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.proyectos__card');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: [0.1]
    });
    
    cards.forEach(card => {
        observer.observe(card);
    });
});
