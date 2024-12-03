// Get references to the video, play/pause button, and end image
const video = document.getElementById('background-video');
const playPauseBtn = document.getElementById('playPauseBtn');
const endImage = document.getElementById('endImage');
const redirectLink = document.getElementById('redirectLink');

// Function to toggle play and pause
playPauseBtn.addEventListener('click', function () {
    if (video.paused) {
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
});
function reloadPage() {
    // Redirect to a new link (change the URL as needed)
    window.location.href = "https://oursecretdairy.github.io/jinny/entries/entry%207/index7.html"; 
}






