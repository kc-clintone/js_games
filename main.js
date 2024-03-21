let blockSize = 15;
let total_x, total_y = 20;
let gameBoard, context;

let x = y = blockSize * 5;
let snakeSpeedX, snakeSpeedY = 0;
let snakeBody = []

let fx, fy;

let gameOver = false;

window.onload = function(){
    gameBoard = document.getElementById('board');
    board.width = total_x * blockSize();
    board.height  = total_y * blockSize();
    context = board.getContext('2d');

    pf();
    document.addEventListener("keyup", cd);
    setInterval(reload, 1000/10);

}

function reload() {
    if(gameOver){
    
}
}


function pf () {
    fx = Math.floor(Math.random() * total_x) * blockSize;
    fy = Math.floor(Math.random() * total_y) * blockSize;
}
