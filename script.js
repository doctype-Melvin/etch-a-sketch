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
                        menu.append(slider);
    
    //Drawing board grid
    const board = document.querySelector('.board');
    board.style.gridTemplateRows = 'repeat(16, 1fr)'
    board.style.gridTemplateColumns = 'repeat(16, 1fr)';
    for (let i = 0; i < 16*16; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
            board.append(cell)
    };
    //Event listeners
    const grid = document.querySelectorAll('.cell');
})()