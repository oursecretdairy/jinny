const canvas = document.getElementById('scratchCanvas');
const ctx = canvas.getContext('2d');
const background = document.getElementById('background');
const button = document.getElementById('next-button');

// Set canvas size to full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Fill the canvas with black
ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);

let isDrawing = false;
let erasedArea = 0; // Track the erased area

// Event listeners for mouse interactions
canvas.addEventListener('mousedown', () => {
  isDrawing = true;
});

canvas.addEventListener('mouseup', () => {
  isDrawing = false;
  ctx.beginPath();
  checkErasedPercentage();
});

canvas.addEventListener('mousemove', draw);

function draw(e) {
  if (!isDrawing) return;

  // Set brush properties
  ctx.globalCompositeOperation = 'destination-out'; // Erases the black
  ctx.lineWidth = 50;
  ctx.lineCap = 'round';

  // Draw on the canvas
  ctx.lineTo(e.clientX, e.clientY);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.clientX, e.clientY);

  // Track erased area
  updateErasedArea();
}

function updateErasedArea() {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const totalPixels = imageData.data.length / 4; // Each pixel has 4 values (RGBA)
  let transparentPixels = 0;

  for (let i = 3; i < imageData.data.length; i += 4) {
    if (imageData.data[i] === 0) {
      transparentPixels++;
    }
  }

  erasedArea = (transparentPixels / totalPixels) * 100;
}

function checkErasedPercentage() {
  if (erasedArea > 50) {
    enableInteraction();
  }
}

function enableInteraction() {
  canvas.style.pointerEvents = 'none'; // Disable further scratching
  button.style.display = 'block';
  button.style.opacity = '0';
  button.style.transform = 'translateY(20px)';
  setTimeout(() => {
    button.style.opacity = '1';
    button.style.transform = 'translateY(0)';
  }, 100);
  background.addEventListener('click', () => {
    window.location.href = 'https://example.com'; // Navigate on click
  });
}

// Resize canvas if window size changes
window.addEventListener('resize', () => {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.putImageData(imageData, 0, 0);
});
// Adjust brush size based on screen width
function getBrushSize() {
    if (window.innerWidth <= 480) {
      return 30; // Smaller brush size for very small screens
    } else if (window.innerWidth <= 768) {
      return 40; // Medium brush size for tablets
    }
    return 50; // Default brush size for larger screens
  }
  
  // Update draw function to use responsive brush size
  function draw(e) {
    if (!isDrawing) return;
  
    // Set brush properties
    ctx.globalCompositeOperation = 'destination-out'; // Erases the black
    ctx.lineWidth = getBrushSize();
    ctx.lineCap = 'round';
  
    // Draw on the canvas
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
  
    // Track erased area
    updateErasedArea();
  }
  
