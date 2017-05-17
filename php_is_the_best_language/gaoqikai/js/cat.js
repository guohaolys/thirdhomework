/**
 * Created by ChuckGao on 2017/4/26.
 */
function Cat() {
    this.row;
    this.col;

    this.bCatch;
    this.init();
}
Cat.prototype = new createjs.Sprite();
Cat.prototype.init = function () {
    var data = {
        framerate:15,
        images:["res/stay.png"],
        frames:{width:61,height:93,regX:30,regY:93},
        animations:{run:[0,15]}
    }

    var spriteSheet = new createjs.SpriteSheet(data);
    createjs.Sprite.call(this,spriteSheet,"run");
}
Cat.prototype.setGridPos = function (row,col) {
    this.col = col;
    this.row = row;

}
Cat.prototype.move=function (row,col,destX,destY) {
    this.setGridPos(row,col);
    this.x = destX;
    this.y = destY;
}