document.addEventListener('DOMContentLoaded', () => {
    // Sélection des boutons
    const backButton = document.getElementById('backBtn');
    const seeAllButton = document.querySelector('.btn-outline');
    const gradeCards = document.querySelectorAll('.grade-card-link');
    
    // Fonction Son (Réutilisable)
    const playClickSound = () => {
        const audio = new Audio('click.mp3'); 
        audio.play().catch(() => console.log("Audio bloqué ou manquant"));
    };

    // 1. Correction de la flèche Retour
    if (backButton) {
        backButton.addEventListener('click', (e) => {
            e.preventDefault(); // On bloque juste pour le son et l'effet
            playClickSound();
            
            // Redirection vers AcademicPath.html après 150ms
            setTimeout(() => {
                window.location.href = backButton.getAttribute('href');
            }, 150);
        });
    }

    // 2. Cartes de Grade (Pre-K / Kindergarten)
    gradeCards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            playClickSound();
            
            const target = card.getAttribute('href');
            
            // Petit effet visuel de clic
            card.style.transform = "scale(0.97)";
            
            setTimeout(() => {
                window.location.href = target;
            }, 200);
        });
    });

    // 3. Bouton Navbar
    if (seeAllButton) {
        seeAllButton.addEventListener('click', () => {
            playClickSound();
        });
    }
});
