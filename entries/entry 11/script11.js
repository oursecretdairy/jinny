const text = "What if one day you recieve an unknown letter from someone?";
const typingTextElement = document.getElementById("typing-text");
const nextButton = document.getElementById("next-button");
const typingSound = document.getElementById("typing-sound");

let charIndex = 0;

function typeText() {
  if (charIndex < text.length) {
    typingTextElement.textContent += text[charIndex];
    charIndex++;

    // Play typing sound
    typingSound.currentTime = 0; // Reset sound to the start
    typingSound.play();

    setTimeout(typeText, 100); // Typing speed
  } else {
    // Stop blinking cursor
    typingTextElement.style.borderRight = "none";
    nextButton.style.display = "block";
  }
}

function goToNextPage() {
  window.location.href = "file:///Users/jinnykim/Documents/kim_c1if24/jinny/entries/homepage/index.html"; 
}

// Start typing animation on page load
document.addEventListener("DOMContentLoaded", typeText);


