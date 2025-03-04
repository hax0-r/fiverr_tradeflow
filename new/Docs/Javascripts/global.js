const lenis = new Lenis();
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);


// Select the bottom-to-top button
const bottomToTop = document.getElementById("bottom-to-top");

// Show or hide the button on scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        bottomToTop.style.display = "block";
    } else {
        bottomToTop.style.display = "none";
    }
});

// Scroll to the top when the button is clicked
bottomToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scrolling effect
    });
});
