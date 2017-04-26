/**
 * Created by ChuckGao on 2017/4/26.
 */


var stage;
var canvas;
var grid = new Array(9);
var CircleDiameter = 45;
var GridOffsetX = 50;
var GridOffsetY = 280;

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
            console.log("circle",row,col);
        }
    }

}


function creatMap() {
    for(var i = 0;i < 9;i++){
        grid[i] = new Array(9);
        for(var j = 0;j < 9;j++){
            //var bitmap = new createjs.Bitmap("res/pot1.png");
            var ranType = Math.random() < 0.3 ? Circle.TYPE_SELECTED : Circle.TYPE_UNSELECTED;
            var bitmap = new Circle(ranType,i,j);
            stage.addChild(bitmap);
            var offset = i % 2 ? CircleDiameter / 2 :0;

            bitmap.regX = CircleDiameter /2;
            bitmap.regY = CircleDiameter /2;

            //列
            bitmap.x = GridOffsetX + CircleDiameter * j + offset;
            //行
            bitmap.y = GridOffsetY + CircleDiameter * i;

            grid[i][j] = bitmap;

        }
    }

}

function creatCat() {
    var data = {
        framerate:15,
        images:["res/stay.png"],
        frames:{width:61,height:93,regX:30,regY:93},
        animations:{run:[0,15]}
    }

    var spriteSheet = new createjs.SpriteSheet(data);
    var cat = new createjs.Sprite(spriteSheet,"run");
    cat.x = grid[4][4].x;
    cat.y = grid[4][4].y;
    stage.addChild(cat);

}