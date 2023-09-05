var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

var img1 = new Image();
img1.src = 'cactus.png';

var img2 = new Image();
img2.src = 'dinosaur.png';

var dino = {
    x : 10,
    y : 200,
    width : 50,
    height : 50,
    draw(){
        ctx.fillStyle = "green";
        // ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(img2, this.x, this.y, this.width, this.height);
    }
}


// 장애물
class Cactus {
    constructor() {
        this.x = 500;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }
    draw() {
        ctx.fillStyle = "red";
        // ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(img1, this.x, this.y, this.width, this.height);
    }
}

var timer = 0;
var cactaceae = [];
var jumpTimer = 0;
var animation;

function frame() {
    animation = requestAnimationFrame(frame);
    timer++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    if (timer % 200 === 0) {
        var cactus = new Cactus();
        cactaceae.push(cactus);
    }

    cactaceae.forEach((a, i, o) => {
        // x 좌표가 0 미만이면 제거
        if (a.x < 0) {
            o.splice(i, 1);
        }
        a.x--;

        isCollision(dino, a);
        a.draw();
    })
    
    // 점프 기능
    if (jumping == true) {
        dino.y -= 1;
        jumpTimer++;
    }
    if (jumping == false) {
        if (dino.y < 200) {
            dino.y += 1;
        }
    }
    if (jumpTimer > 100) {
        jumping = false;
        jumpTimer = 0;
    }
    
    dino.draw();
}

frame();

var jumping = false;
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        jumping = true;
    }
})


// 충돌 확인
function isCollision (dion, cactus) {
    var xDiff = cactus.x - (dino.x + dino.width);
    var yDiff = cactus.y - (dino.y + dino.height);
    if (xDiff < 0 && yDiff < 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        cancelAnimationFrame(animation);
    }
}


