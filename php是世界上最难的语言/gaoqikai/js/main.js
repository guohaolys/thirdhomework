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
var DIR = {
    LEFT:1,
    UP_LEFT:2,
    UP_RIGHT:3,
    RIGHT: 4,
    DOWN_RIGHT:5,
    DOWN_LEFT:6
}
window.onload = function () {
    stage = new createjs.Stage("myCanvas");

    createjs.Ticker.framerate = 30;
    createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
    createjs.Ticker.addEventListener("tick",handleTick);

    canvas = document.getElementById("myCanvas");
    canvas.addEventListener("mousedown",handleMouseDown);
    creatMap();
    creatCat();



}
function  handleTick(event) {
    //console.log("tick");
    stage.update(event);
}

function handleMouseDown(event) {
    var origX = event.pageX - canvas.offsetLeft - GridOffsetX + CircleDiameter / 2;
    var origY = event.pageY - canvas.offsetTop - GridOffsetY + CircleDiameter / 2;
    //console.log("x,y",origX,origY,canvas.offsetLeft,canvas.offsetTop);
    if(origY > 0 && origY < CircleDiameter * 9){
        var row = parseInt(origY/CircleDiameter);
        var offset = row % 2 ? CircleDiameter / 2 : 0;
        if(origX > 0 && origX < CircleDiameter * 9 + offset){
            var col = parseInt((origX - offset) / CircleDiameter);
            //console.log("circle",row,col);
            var circle = grid[row][col];
            if(circle.type == Circle.TYPE_UNSELECTED){
                    stage.removeChild(circle);
                    addCircle(row,col,Circle.TYPE_SELECTED);
                    catMove();
            }
        }
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
    }else {
        var randomIndex = parseInt(Math.random() * walkableArr.length);
        var finalCircle = walkableArr[randomIndex];
        cat.move(finalCircle.row,finalCircle.col,finalCircle.x,finalCircle.y);
    }
}


function addCircle(row,col,type) {
    var bitmap = new Circle(type,row,col);
    stage.addChild(bitmap);
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