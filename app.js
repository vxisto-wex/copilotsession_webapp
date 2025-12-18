// Get DOM elements
const colorBox = document.getElementById('colorBox');
const changeColorBtn = document.getElementById('changeColorBtn');
const changeTextColorBtn = document.getElementById('changeTextColorBtn');
const resetBtn = document.getElementById('resetBtn');
const colorBoxText = colorBox.querySelector('p');

// Default colors
const defaultColor = '#3498db';
const defaultTextColor = 'white';

// Array of colors to choose from
const colors = [
    '#e74c3c', '#3498db', '#2ecc71', '#f39c12', 
    '#9b59b6', '#1abc9c', '#e67e22', '#34495e',
    '#16a085', '#27ae60', '#2980b9', '#8e44ad',
    '#f368e0', '#ff9ff3', '#feca57', '#48dbfb'
];

// Array of vivid text colors to choose from
const textColors = [
    '#ff0000', '#ff00ff', '#ffff00', '#00ffff', 
    '#00ff00', '#ff6600', '#ff0099', '#00ff99',
    '#ff3366', '#33ff66', '#6633ff', '#ffcc00'
];

// Function to generate a random color from the array
function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

// Function to generate a random text color from the array
function getRandomTextColor() {
    const randomIndex = Math.floor(Math.random() * textColors.length);
    return textColors[randomIndex];
}

// Function to change the color of the box
function changeColor() {
    const newColor = getRandomColor();
    colorBox.style.backgroundColor = newColor;
}

// Function to change the text color
function changeTextColor() {
    const newTextColor = getRandomTextColor();
    colorBoxText.style.color = newTextColor;
}

// Function to reset the color to default
function resetColor() {
    colorBox.style.backgroundColor = defaultColor;
    colorBoxText.style.color = defaultTextColor;
}

// Event listeners
changeColorBtn.addEventListener('click', changeColor);
changeTextColorBtn.addEventListener('click', changeTextColor);
resetBtn.addEventListener('click', resetColor);
