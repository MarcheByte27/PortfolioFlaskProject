/**
 * Main JavaScript logic to handle minimal non-intrusive animations
 */

document.addEventListener("DOMContentLoaded", () => {
    // Setting up the Intersection Observer for Fade-In elements
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.15 // trigger when 15% of the element is visible
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add visible class to trigger CSS transition
                entry.target.classList.add('is-visible');
                // Unobserve after it's loaded to keep it visible
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with the animation class
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => scrollObserver.observe(el));
});
