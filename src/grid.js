export const App = () => {
    let grid
    const board = document.querySelector('.board');
    let drawGrid = (value) => {
        board.style.gridTemplateRows = `repeat(${value}, 1fr)`
        board.style.gridTemplateColumns = `repeat(${value}, 1fr)`
        for (let i = 0; i < value**2; i++) {
            let cell = document.createElement('div')
            cell.classList.add('cell');
            board.append(cell)
            grid = document.querySelectorAll('.cell')
        }
    }

    const resetGrid = () => {
        while(board.firstChild){
            board.removeChild(board.lastChild)
        }
    }

    return {
        drawGrid,
        resetGrid
    }
}

