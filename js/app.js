document.querySelector('.excellent-button').addEventListener('click', function() {
    createConfetti(100);
});

function createConfetti(count) {
    const confettiContainer = document.querySelector('.confetti-container');

    for (let i = 0; i < count; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');

        confettiPiece.style.left = `${Math.random() * 100}%`;
        confettiPiece.style.top = `${Math.random() * -10}vh`;
        confettiPiece.style.width = `${Math.random() * 10 + 5}px`;
        confettiPiece.style.height = `${Math.random() * 20 + 10}px`;
        confettiPiece.style.backgroundColor = getRandomColor();

        confettiPiece.style.animationDelay = `${Math.random() * 0.7}s`;
        confettiPiece.style.animationDuration = `${Math.random() * 1 + 1}s`;

        confettiContainer.appendChild(confettiPiece);

        setTimeout(() => {
            confettiPiece.remove();
        }, 3000);
    }
}

function getRandomColor() {
    const colors = ['#ff0', '#f0f', '#0ff', '#f00', '#00f', '#0f0'];
    return colors[Math.floor(Math.random() * colors.length)];
}