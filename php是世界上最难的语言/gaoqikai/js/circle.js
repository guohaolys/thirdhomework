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

Circle.prototype.getCloseCircleIndex = function (dir) {
    var res = null;

    var r = this.row;
    var c = this.col;

    switch (dir){
        case DIR.LEFT:
            res = [r,c-1];
            break;
        case DIR.UP_LEFT:
            var nc = r%2 ? c : c-1;
            res = [r-1,nc];
            break;
        case DIR.UP_RIGHT:
            var nc = r%2 ? c+1 : c;
            res = [r-1,nc];
            break;
        case DIR.RIGHT:
            res = [r,c+1];
            break;
        case DIR.DOWN_LEFT:
            var nc = r%2 ? c : c-1;
            res = [r+1,nc];
            break;
        case DIR.DOWN_RIGHT:
            var nc = r%2 ? c+1 : c;
            res = [r+1,nc];
            break;
    }
    if(res){
        if(res[0] < 0 || res[0] > 8 || res[1] < 0 || res[1] > 8){
            res = null;
        }
    }
    return res;
}