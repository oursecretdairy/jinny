const imageWrapper = document.querySelector('.image-wrapper');
const hoverSound = document.getElementById('hover-sound');

imageWrapper.addEventListener('mouseenter', () => {
    hoverSound.play();
});
