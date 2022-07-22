const grid = document.querySelector('.grid');

// draw my block
function addBlock() {
    const block = document.createElement('div'); // We created 'div' element
    block.classList.add('block'); // We added 'block' styles
    block.style.left = '100px';
    block.style.bottom = '50px';
    block.style.border = '3px solid black';
    grid.appendChild(block); // We appended to grid
}