// DarkMode Toggle
const darkToggle = document.getElementById("dark-mode-toggle");

if (localStorage.getItem('dark-mode') == 'enabled') document.body.classList.add("darkmode");

darkToggle.addEventListener("click", () => {
    const darkState = localStorage.getItem('dark-mode');
    if (darkState == 'enabled') {
        document.body.classList.remove('darkmode');
        localStorage.setItem('dark-mode', null);
    } else {
        document.body.classList.add("darkmode");
        localStorage.setItem('dark-mode', 'enabled');
    }
})

// Card styling
const cards = document.getElementsByClassName('card-container');

[...cards].forEach((card, index) => {
    if (index % 2 == 0) {
        card.style.alignSelf = 'flex-start';
        card.classList.add('left');
    } else {
        card.style.alignSelf = 'flex-end';
        card.classList.add('right');
    }
});


// Scroll Animation

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        } else {
            entry.target.classList.remove('fade-in');
        }
    })
}, {
    threshold: 0.5
});

[...cards].forEach(card => {
    observer.observe(card);
});