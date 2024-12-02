const imageSrc = 'https://i.pinimg.com/736x/fd/81/e3/fd81e39d3e47f3b415c8cba851a6fde5.jpg'; // Replace with your image URL
const puzzleContainer = document.getElementById('puzzle-container');
const questionBox = document.getElementById('question-box');
const submitAnswer = document.getElementById('submit-answer');
const answerInput = document.getElementById('answer');

// Generate puzzle pieces
const positions = [];
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        positions.push({ top: i * 100, left: j * 100 });
    }
}
const shuffledPositions = [...positions].sort(() => Math.random() - 0.5);

positions.forEach((pos, index) => {
    const piece = document.createElement('div');
    piece.classList.add('piece');
    piece.style.backgroundImage = `url(${imageSrc})`;
    piece.style.backgroundPosition = `-${pos.left}px -${pos.top}px`;
    piece.style.top = `${shuffledPositions[index].top}px`;
    piece.style.left = `${shuffledPositions[index].left}px`;
    piece.draggable = true;
    piece.dataset.correctIndex = index;

    puzzleContainer.appendChild(piece);

    piece.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', index);
    });

    piece.addEventListener('dragover', (e) => e.preventDefault());
    piece.addEventListener('drop', (e) => {
        e.preventDefault();
        const draggedIndex = e.dataTransfer.getData('text/plain');
        const targetIndex = Array.from(puzzleContainer.children).indexOf(e.target);

        const draggedPiece = puzzleContainer.children[draggedIndex];
        const targetPiece = puzzleContainer.children[targetIndex];

        // Snap pieces to their correct positions
        [draggedPiece.style.top, targetPiece.style.top] = [targetPiece.style.top, draggedPiece.style.top];
        [draggedPiece.style.left, targetPiece.style.left] = [targetPiece.style.left, draggedPiece.style.left];
    });
});

// Check if puzzle is solved
puzzleContainer.addEventListener('dragend', () => {
    const isSolved = Array.from(puzzleContainer.children).every((piece, index) => {
        const correctIndex = piece.dataset.correctIndex;
        const pos = positions[correctIndex];
        return (
            Math.abs(parseInt(piece.style.top) - pos.top) < 10 &&
            Math.abs(parseInt(piece.style.left) - pos.left) < 10
        );
    });

    if (isSolved) {
        puzzleContainer.classList.add('completed');
        alert('Puzzle solved! Hover and click to reveal the question.');
        puzzleContainer.addEventListener('mouseover', () => {
            puzzleContainer.style.boxShadow = '0 0 15px 5px rgba(30, 144, 255, 0.7)';
        });
        puzzleContainer.addEventListener('mouseout', () => {
            puzzleContainer.style.boxShadow = 'none';
        });
        puzzleContainer.addEventListener('click', () => {
            questionBox.style.display = 'block';
        });
    }
});

// Handle question
submitAnswer.addEventListener('click', () => {
    const answer = answerInput.value.trim().toLowerCase();
    if (answer === 'im sorry') {
        window.location.href = 'https://oursecretdairy.github.io/jinny/entries/entry%2010/index10.html'; 
    } else {
        alert('Incorrect answer. Try again!');
    }
});





