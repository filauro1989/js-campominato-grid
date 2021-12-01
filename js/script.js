// generare tanti div a seconda della difficolta

let gioca = document.getElementById('gioca');

let container = document.querySelector('.container');

gioca.addEventListener('click', function(){

    let difficolta = document.getElementById('mode-selection').value;
    container.innerHTML = '';

    if (difficolta == 'easy') {
        const row = 10;
        const col = 10;

        for (let index = 0; index < (row * col); index++) {
            
            let square = document.createElement('div');
            square.classList.add('square');
            square.style.width = 'calc(100% / 10)';
            square.style.height = 'calc(100% / 10)';
            container.append(square);
            
        }

    } else if (difficolta == 'hard') {
        const row = 9;
        const col = 9;

        for (let index = 0; index < (row * col); index++) {
            
            let square = document.createElement('div');
            square.classList.add('square');
            square.style.width = 'calc(100% / 9)';
            square.style.height = 'calc(100% / 9)';
            container.append(square);
            
        }
    } else {
        const row = 7;
        const col = 7;

        for (let index = 0; index < (row * col); index++) {
            
            let square = document.createElement('div');
            square.classList.add('square');
            square.style.width = 'calc(100% / 7)';
            square.style.height = 'calc(100% / 7)';
            container.append(square);
            
        }
    }



});