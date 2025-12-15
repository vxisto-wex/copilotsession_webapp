// Get DOM elements
const colorBox = document.getElementById('colorBox');
const changeColorBtn = document.getElementById('changeColorBtn');
const resetBtn = document.getElementById('resetBtn');

// Default color
const defaultColor = '#3498db';

// Array of colors to choose from
const colors = [
    '#e74c3c', '#3498db', '#2ecc71', '#f39c12', 
    '#9b59b6', '#1abc9c', '#e67e22', '#34495e',
    '#16a085', '#27ae60', '#2980b9', '#8e44ad',
    '#f368e0', '#ff9ff3', '#feca57', '#48dbfb'
];

// Function to generate a random color from the array
function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

// Function to change the color of the box
function changeColor() {
    const newColor = getRandomColor();
    colorBox.style.backgroundColor = newColor;
}

// Function to reset the color to default
function resetColor() {
    colorBox.style.backgroundColor = defaultColor;
}

// Event listeners
changeColorBtn.addEventListener('click', changeColor);
resetBtn.addEventListener('click', resetColor);
