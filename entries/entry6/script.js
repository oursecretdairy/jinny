// Get references to the video, play/pause button, and end image
const video = document.getElementById('background-video');
const playPauseBtn = document.getElementById('playPauseBtn');
const endImage = document.getElementById('endImage');

// Function to toggle play and pause
playPauseBtn.addEventListener('click', function () {
    if (video.paused || video.ended) {
        video.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        video.pause();
        playPauseBtn.textContent = 'Play';
    }
});

// Show the end image when the video ends
video.addEventListener('ended', function () {
    endImage.style.display = 'block';
    endImage.style.opacity = '1';
    playPauseBtn.textContent = 'Play'; // Reset button text
});









