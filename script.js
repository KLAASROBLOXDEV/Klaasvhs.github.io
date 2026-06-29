const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

function copyDiscord() {
    navigator.clipboard.writeText("hond0967").then(() => {
        alert("Discord username copied!");
    });
}
