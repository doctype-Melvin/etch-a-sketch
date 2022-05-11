const drawBoard = (() => {
    const board = document.querySelector('.board');
    board.style.gridTemplateRows = 'repeat(16, 1fr)'
    board.style.gridTemplateColumns = 'repeat(16, 1fr)';
    for (let i = 0; i < 16*16; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
            board.append(cell)
    }
})()