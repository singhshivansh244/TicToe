let block1 = document.getElementById('block1');
let block2 = document.getElementById('block2');
let block3 = document.getElementById('block3');
let block4 = document.getElementById('block4');
let block5 = document.getElementById('block5');
let block6 = document.getElementById('block6');
let block7 = document.getElementById('block7');
let block8 = document.getElementById('block8');
let block9 = document.getElementById('block9');
let flag = 0;
let newBlock
let here = 1;
start();
function resetBlocks(Id) {
    Id.innerHTML = '';
}
function NewGame() {
    let choice = document.createElement('button');
    choice.innerText = 'Reset';
    choice.setAttribute('id', 'resetButton');
    choice.setAttribute('class', 'rainbow');
    document.body.appendChild(choice);
    choice.addEventListener('click', () => {
        resetBlocks(block1);
        resetBlocks(block2);
        resetBlocks(block3);
        resetBlocks(block4);
        resetBlocks(block5);
        resetBlocks(block6);
        resetBlocks(block7);
        resetBlocks(block8);
        resetBlocks(block9);
        newBlock.innerHTML = '';
        here = 1;
    });
    choice.addEventListener('click', () => {
        choice.remove();
        let drawMatch = document.getElementById('drawBlock');
        drawMatch.remove();
    });
}
function winner() {
    here = 0;
    newBlock = document.createElement('div');
    newBlock.setAttribute('id', 'WinnerBlock');
    newBlock.setAttribute('class', 'rainbow');
    if (flag) {
        newBlock.innerHTML = 'Winner Winner Chicken Dinner X';
    }
    else {
        newBlock.innerHTML = 'Winner Winner Chicken Dinner O';
    }
    document.body.appendChild(newBlock);
    NewGame();
}
function GameOver() {
    if (block1.innerHTML == block2.innerHTML && block2.innerHTML == block3.innerHTML && block1.innerHTML != '') {
        winner();
    } else if (block4.innerHTML == block5.innerHTML && block5.innerHTML == block6.innerHTML && block4.innerHTML != '') {
        winner();
    } else if (block7.innerHTML == block8.innerHTML && block8.innerHTML == block9.innerHTML && block7.innerHTML != '') {
        winner();
    } else if (block1.innerHTML == block5.innerHTML && block5.innerHTML == block9.innerHTML && block1.innerHTML != '') {
        winner();
    } else if (block3.innerHTML == block5.innerHTML && block5.innerHTML == block7.innerHTML && block3.innerHTML != '') {
        winner();
    } else if (block1.innerHTML == block4.innerHTML && block4.innerHTML == block7.innerHTML && block7.innerHTML != '') {
        winner();
    } else if (block3.innerHTML == block6.innerHTML && block6.innerHTML == block9.innerHTML && block9.innerHTML != '') {
        winner();
    } else if (block2.innerHTML == block5.innerHTML && block5.innerHTML == block8.innerHTML && block8.innerHTML != '') {
        winner();
    } else if (block1.innerHTML != '' && block2.innerHTML != '' && block3.innerHTML != '' && block4.innerHTML != '' && block5.innerHTML != '' && block6.innerHTML != '' && block7.innerHTML != '' && block8.innerHTML != '' && block9.innerHTML != '') {
        let drawBlock = document.createElement('div');
        drawBlock.innerHTML = 'Draw Match';
        drawBlock.setAttribute('id', 'drawBlock');
        drawBlock.setAttribute('class', 'rainbow');
        document.body.appendChild(drawBlock);
        NewGame();
    }
}
function start() {
    block1.addEventListener('click', () => {
        if (here && block1.innerHTML == '') {
            if (flag) {
                block1.innerHTML = 'X';
            }
            else {
                block1.innerHTML = 'O';
            }
            GameOver();
            flag = !flag;
        }
    });
    block2.addEventListener('click', () => {
        if (here && block2.innerHTML == '') {
            if (flag) {
                block2.innerHTML = 'X';
            }
            else {
                block2.innerHTML = 'O';
            }
            GameOver();
            flag = !flag;
        }
    });
    block3.addEventListener('click', () => {
        if (here && block3.innerHTML == '') {
            if (flag) {
                block3.innerHTML = 'X';
            }
            else {
                block3.innerHTML = 'O';
            }
            GameOver();
            flag = !flag;
        }
    });
    block4.addEventListener('click', () => {
        if (here && block4.innerHTML == '') {
            if (flag) {
                block4.innerHTML = 'X';
            }
            else {
                block4.innerHTML = 'O';
            }
            GameOver();
            flag = !flag;
        }
    });
    block5.addEventListener('click', () => {
        if (here && block5.innerHTML == '') {
            if (flag) {
                block5.innerHTML = 'X';
            }
            else {
                block5.innerHTML = 'O';
            }
            GameOver();
            flag = !flag;
        }
    });
    block6.addEventListener('click', () => {
        if (here && block6.innerHTML == '') {
            if (flag) {
                block6.innerHTML = 'X';
            }
            else {
                block6.innerHTML = 'O';
            }
            GameOver();
            flag = !flag;
        }
    });
    block7.addEventListener('click', () => {
        if (here && block7.innerHTML == '') {
            if (flag) {
                block7.innerHTML = 'X';
            }
            else {
                block7.innerHTML = 'O';
            }
            GameOver();
            flag = !flag;
        }
    });
    block8.addEventListener('click', () => {
        if (here && block8.innerHTML == '') {
            if (flag) {
                block8.innerHTML = 'X';
            }
            else {
                block8.innerHTML = 'O';
            }
            GameOver();
            flag = !flag;
        }
    });
    block9.addEventListener('click', () => {
        if (here && block9.innerHTML == '') {
            if (flag) {
                block9.innerHTML = 'X';
            }
            else {
                block9.innerHTML = 'O';
            }
            GameOver();
            flag = !flag;
        }
    });
}