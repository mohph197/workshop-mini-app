// DARK MODE TOGGLE
let toggle = document.getElementById('dark-mode-toggle');

const getDarkMode = () => localStorage.getItem('dark-mode');
const setDarkMode = (value) => localStorage.setItem('dark-mode', value);

const enableDarkMode = () => {
    document.body.classList.add('dark-mode');
    setDarkMode('enabled');
}

const disableDarkMode = () => {
    document.body.classList.remove('dark-mode');
    setDarkMode(null);
}

if (getDarkMode() === 'enabled') document.body.classList.add('dark-mode');

toggle.addEventListener('click', () => {
    if (getDarkMode() === 'enabled') disableDarkMode();
    else enableDarkMode();
});


// CARDS STYLING
const cards = document.getElementsByClassName('my-card');
const cardContainers = document.getElementsByClassName('card-container');

[...cardContainers].forEach((card, index) => {
    if (index % 2 === 0) card.classList.add('right');
    else card.classList.add('left');
});


//SCROLL ANIMATION
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.firstElementChild.classList.add('fade-in');
        else entry.target.firstElementChild.classList.remove('fade-in');
    });
}, {
    threshold: .2,
});

[...cardContainers].forEach(cardContainer => observer.observe(cardContainer));
