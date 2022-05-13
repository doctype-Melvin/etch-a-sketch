const sketchNSketch = (() => {
    //Menu panel with different drawing modes
    const menu = document.querySelector('.menu');
    menu.textContent = 'Menu';
        const reset = document.createElement('button');
        reset.textContent = 'Reset';
        menu.append(reset);
            const rainbow = document.createElement('button');
            rainbow.textContent = 'Rainbow';
            menu.append(rainbow);
                const greyScale = document.createElement('button');
                greyScale.textContent = 'Greyscale';
                menu.append(greyScale);
                    const colorPicker = document.createElement('input');
                    colorPicker.setAttribute('type', 'color');
                    menu.append(colorPicker);
                        const slider = document.createElement('input');
                        slider.setAttribute('type', 'range');
                        slider.min = 16;
                        slider.max = 32;
                        slider.value = 16;
                        menu.append(slider);
                            
    slider.addEventListener('change', () => {
        clearGrid();
        drawGrid(slider.value);
    })
    //Initiate grid on board
    const board = document.querySelector('.board');
    const initGrid = (() => {
        board.style.gridTemplateRows = `repeat(16, 1fr)`
        board.style.gridTemplateColumns = `repeat(16, 1fr)`;
    for (let i = 0; i < 16*16; i++) {
        const cell = document.createElement('div');
            cell.classList.add('cell');
                board.append(cell)
    }
})()
    //Use slider value to draw grid on board
    let drawGrid = (value) => {
        board.style.gridTemplateRows = `repeat(${value}, 1fr)`
        board.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
    for (let i = 0; i < value**2; i++) {
        const cell = document.createElement('div');
            cell.classList.add('cell');
                board.append(cell)
            }}
            
            //Clear the grid from board
            let clearGrid = () => {
                while (board.firstChild) {
                    board.removeChild(board.lastChild);
                }
            }
                
})()