function MoveBar(tParent, bar){
    this.tParent = null;
    this.bar = null;

    this.tParent = tParent;
    this.tChildren = tParent.children();
    this.bar = bar;
    this.tDistance = null;

    this.getWidth = function(target){
        this.bar.width(target.outerWidth());
    }
    this.moveLeft = function(moveDistance){
        this.bar.css("left", moveDistance)
    }
    var that = this;
    this.tChildren.click(function(){
        var idx = $(this).index();
        var thatLi = $(this);

        that.getWidth(thatLi);
        that.tDistance = that.getDistance(idx);
        console.log(that.tDistance,"that.tDistance");
        that.moveLeft(that.tDistance);
    });
    this.getDistance = function(idx){
        var pWidth = 10;
        var moveWidth = 10;
        for(var i=0; i<idx; i++){
            moveWidth = moveWidth + this.tParent.children().eq(i).outerWidth() + pWidth;
        }
        return moveWidth;
    }
}
