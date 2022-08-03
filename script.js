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
                        slider.addEventListener('change', () => resetGrid())

                        
    //Initiate grid on board
    let grid 
    const board = document.querySelector('.board');
    //Use slider value to draw grid on board
    let drawGrid = (value) => {
        board.style.gridTemplateRows = `repeat(${value}, 1fr)`
        board.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
        for (let i = 0; i < value**2; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            board.append(cell);
            grid = document.querySelectorAll('.cell')
        }
    }
    //Use 16x16 grid on page load
    const initGrid = (() => drawGrid(16))()
    
    //Reset the grid
    const resetGrid = () => {
        while (board.firstChild) {
            board.removeChild(board.lastChild);
        };
        drawGrid(slider.value);
        rainRain = false;
        greyGrey = false
    }
    //Setup for changing div background colors
    let painting = false; //Flag for toggle fn
    let color = '';
    let rainRain = false;
    let greyGrey = false
    
    function paintCell(e){//accesses div background property
        if(color === '' && rainRain === false && greyGrey === false) {
            e.target.style.backgroundColor = '#000';
            e.target.style.transition = '0.1s'
        }else if(color !== ''){
            e.target.style.backgroundColor = color;
            e.target.style.transition = '0.1s'
        }else if (rainRain && color === '' || rainRain && color !== ''){
            e.target.style.backgroundColor = randomColor()
            e.target.style.transition = '0.1s'
        }else if (greyGrey && color === '' || greyGrey && color !== ''){
            e.target.style.backgroundColor = '#000'
            if (e.target.style.opacity <= '1' || e.target.style.opacity === '') {
                e.target.style.opacity += '0.1'
                console.log(e.target.style.opacity) // Opacity value should increment with each passing of the target
            }
        }
    };

    function paint(){//adds/removes event listeners to/from divs
        if (!painting){
        grid.forEach(cell => cell.addEventListener('mouseover', paintCell))
        painting = true;
        }else if (painting){
            grid.forEach(cell => cell.removeEventListener('mouseover', paintCell));
            painting = false;
        }else if(rainRain && !painting){
                    grid.forEach(cell => cell.addEventListener('mouseover', paintCell))
                    painting = true
        }else if (greyGrey && !painting) {
                        grid.forEach(cell => cell.addEventListener('mouseover', paintCell))
                        painting = true
        }
    } 
    
    board.addEventListener('click', paint)//adds event listener to board

    //Add listeners to menu buttons
    reset.onclick = () => resetGrid();

    colorPicker.onchange = (e) => {
        color = e.target.value;
        rainRain = false
    }

    const randomNumber = () => {
        return Math.floor(Math.random()*255);
    }
    
    function randomColor(){
        return `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`
    }
    rainbow.addEventListener('click', () => {
        rainRain = true
        greyGrey = false
    })

    greyScale.addEventListener('click', () => {
        greyGrey = true
        rainRain = false
    })
})()