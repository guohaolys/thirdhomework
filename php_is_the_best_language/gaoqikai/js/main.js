/**
 * Created by ChuckGao on 2017/4/26.
 */


var stage;
var canvas;
var cat;
var grid = new Array(9);
var CircleDiameter = 45;
var GridOffsetX = 50;
var GridOffsetY = 280;
var gameState;
var step;
var DIR = {
    LEFT:1,
    UP_LEFT:2,
    UP_RIGHT:3,
    RIGHT: 4,
    DOWN_RIGHT:5,
    DOWN_LEFT:6
}
var STATE = {
    START:0,
    PLAY :1,
    END:2
}
window.onload = function () {
    stage = new createjs.Stage("myCanvas");

    createjs.Ticker.framerate = 30;
    createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
    createjs.Ticker.addEventListener("tick",handleTick);

    canvas = document.getElementById("myCanvas");
    canvas.addEventListener("mousedown",handleMouseDown);
    startGame();



}
function  handleTick(event) {
    //console.log("tick");
    stage.update(event);
}

function handleMouseDown(event) {
    var origX = event.pageX - canvas.offsetLeft - GridOffsetX + CircleDiameter / 2;
    var origY = event.pageY - canvas.offsetTop - GridOffsetY + CircleDiameter / 2;
    var isInCircle = false;
    //console.log("x,y",origX,origY,canvas.offsetLeft,canvas.offsetTop);
    if(gameState == STATE.START){
        enterGame();
    }else if(gameState == STATE.PLAY){
        if(origY > 0 && origY < CircleDiameter * 9){
            var row = parseInt(origY/CircleDiameter);
            var offset = row % 2 ? CircleDiameter / 2 : 0;
            if(origX > 0 && origX < CircleDiameter * 9 + offset){
                var col = parseInt((origX - offset) / CircleDiameter);
                //console.log("circle",row,col);
                var circle = grid[row][col];
                if(circle.type == Circle.TYPE_UNSELECTED){
                    isInCircle = true;

                    step++;
                    stage.removeChild(circle);
                    addCircle(row,col,Circle.TYPE_SELECTED);
                    catMove();
                }
            }
        }
    }else if(gameState == STATE.END){
        resetGame();
    }
    if(isInCircle){
        playSound("step");
    }
    else {
        playSound("click");
    }



}

function catMove() {
    var catCircle = grid[cat.row][cat.col];
    var walkableArr = [];
    for(var i = 1;i <= 6;++i){
        var p = catCircle.getCloseCircleIndex(i);
        if(p){
            var closeCicle = grid[p[0]][p[1]];
            if(closeCicle.type == Circle.TYPE_UNSELECTED){
                walkableArr.push(closeCicle);
            }
        }
    }
    if(walkableArr.length == 0){
        //游戏结束 win
        gameOver(true);
    }else {
        var randomIndex = parseInt(Math.random() * walkableArr.length);
        var finalCircle = walkableArr[randomIndex];
        cat.move(finalCircle.row,finalCircle.col,finalCircle.x,finalCircle.y);
        if(Circle.isBoundary(finalCircle.row,finalCircle.col)){
            //游戏结束Lose
            gameOver(false);
        }
    }
}


function addCircle(row,col,type) {
    var bitmap = new Circle(type,row,col);
    stage.addChildAt(bitmap,0);
    var offset = row % 2 ? CircleDiameter / 2 :0;

    bitmap.regX = CircleDiameter /2;
    bitmap.regY = CircleDiameter /2;

    //列
    bitmap.x = GridOffsetX + CircleDiameter * col + offset;
    //行
    bitmap.y = GridOffsetY + CircleDiameter * row;

    grid[row][col] = bitmap;
}




function creatMap() {
    for(var i = 0;i < 9;i++){
        grid[i] = new Array(9);
        for(var j = 0;j < 9;j++){
            //var bitmap = new createjs.Bitmap("res/pot1.png");
            var ranType = Math.random() < 0.3 ? Circle.TYPE_SELECTED : Circle.TYPE_UNSELECTED;
            if(i == 4 && j == 4){
                ranType = Circle.TYPE_UNSELECTED;
            }
            addCircle(i,j,ranType);

        }
    }

}

function creatCat() {
    cat = new Cat();
    cat.x = grid[4][4].x;
    cat.y = grid[4][4].y;
    cat.setGridPos(4,4);
    stage.addChild(cat);

}
/////////////////////流程控制///////////////////
function startGame() {
    //saveScore(99);
    gameState = STATE.START;

    //开始界面
    var image = new createjs.Bitmap("res/btn_start.png");
    stage.addChild(image);
    image.name = "start";
    image.x = 50;
    image.y = 200;

    //开始音效
    loadSoundFile(handleSoundLoad);
}
function enterGame() {
    gameState = STATE.PLAY;
    stage.removeChild(stage.getChildByName("start"));
    step = 0;
    creatMap();
    creatCat();

}
function gameOver(win) {
    gameState = STATE.END;
    var pic;
    if(win){
        pic = "res/victory.png";
		//使用ajax调用php
        saveScore(step);
        playSound("victory");

    }else {
        pic = "res/failed.png";
        playSound("fail");
    }
    //结束图片
    var image = new createjs.Bitmap(pic);
    image.x = 30;
    image.y = 200;
    stage.addChild(image);
    //文字提示
    var text = new createjs.Text("你用了" + step + "步","30px Arial","#000000");
    text.x = 200;
    text.y = 350;
    stage.addChild(text);
    //再来一次
    var replayImage = new createjs.Bitmap("res/replay.png");
    replayImage.x = 150;
    replayImage.y = 400;
    stage.addChild(replayImage);
}
function resetGame() {
    //清空场景
    stage.removeAllChildren();
    enterGame();
}
