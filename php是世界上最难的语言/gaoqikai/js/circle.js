/**
 * Created by ChuckGao on 2017/4/26.
 */
function Circle(type,row,col) {
    this.row = row;
    this.col = col;
    this.type;
    this.setType(type);

}
Circle.TYPE_UNSELECTED = 0;
Circle.TYPE_SELECTED = 1;

Circle.prototype = new createjs.Bitmap();
Circle.prototype.setType = function(type){
    this.type = type;
    switch (type){
        case Circle.TYPE_UNSELECTED:
            createjs.Bitmap.call(this,"res/pot1.png");
            break;
        case Circle.TYPE_SELECTED:
            createjs.Bitmap.call(this,"res/pot2.png");
            break;
    }


}