const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.classList.add('transparent');
    } else {
        navbar.classList.remove('transparent');
    }
});

/* ... Previous JavaScript code ... */

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function() {
    const skillsButton = document.getElementById('skillsButton');
    const eduButton = document.getElementById('eduButton');
    const skillsText = document.getElementById('skillsText');
    const eduText = document.getElementById('eduText');
    
    skillsButton.addEventListener('click', function() {
        skillsText.classList.toggle('hidden');
    });

    eduButton.addEventListener('click', function() {
        eduText.classList.toggle('hidden');
    });
});