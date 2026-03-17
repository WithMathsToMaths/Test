const alphabetGrec = [
    { name: "alpha", upper: "\u0391", lower: "\u03B1" },
    { name: "beta", upper: "\u0392", lower: "\u03B2" },
    { name: "gamma", upper: "\u0393", lower: "\u03B3" },
    { name: "delta", upper: "\u0394", lower: "\u03B4" },
    { name: "epsilon", upper: "\u0395", lower: "\u03B5" },
    { name: "pi", upper: "\u03A0", lower: "\u03C0" },
    { name: "sigma", upper: "\u03A3", lower: "\u03C3" },
    { name: "omega", upper: "\u03A9", lower: "\u03C9" }
];

function updateSliderCards() {
    for (let i = 1; i <= 3; i++) {
        const lettre = alphabetGrec[Math.floor(Math.random() * alphabetGrec.length)];
        const card = document.getElementById(`card-${i}`);
        if(card) {
            card.innerHTML = `
                <header class="honk-title">WITHMATHS<br>TOMATHS</header>
                <p class="label">UPPERCASE</p>
                <div class="symbol">${lettre.upper}</div>
                <p class="label">lowercase</p>
                <div class="symbol-small">${lettre.lower}</div>
                <div class="name-text">${lettre.name}</div>
            `;
        }
    }
}

// Lancement initial et rotation des cartes
updateSliderCards();
setInterval(updateSliderCards, 20000);

// Apparitions synchronisées après 2 secondes
setTimeout(() => {
    const infoBox = document.getElementById('info-box');
    const cube = document.getElementById('welcome-cube');
    if(infoBox) infoBox.classList.add('show');
    if(cube) cube.classList.add('fly-in');
}, 2000);

// Compte à rebours de 10 secondes
let totalSeconds = 10;
const secDisplay = document.getElementById('seconds');
const timer = setInterval(() => {
    totalSeconds--;
    if (totalSeconds < 0) {
        clearInterval(timer);
        confetti({ 
            particleCount: 150, 
            spread: 70, 
            origin: { y: 0.7 },
            colors: ['#00ecff', '#ff0057', '#ffffff'] 
        });
        return;
    }
    if(secDisplay) secDisplay.textContent = String(totalSeconds).padStart(2, '0');
}, 1000);
