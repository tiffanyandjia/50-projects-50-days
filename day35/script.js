const container = document.getElementById('container')
const colors = ['#e74cc', '#8e44ad', '#3498db', '#e67e22', '#ecc71']
const SQUARES = 500

for(let i = 0; i < SQUARES; i++ ) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseover', () => removeColor(square))

    container.appendChild(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px $`
}