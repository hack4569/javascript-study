function MoveBar(tParent, bar){
    this.tParent = null;
    this.bar = null;
    this.tDistance = null;
    this.setItem = null;

    this.tParent = tParent;
    this.tChildren = tParent.children();
    this.bar = bar;

    this.getWidth = function(idx){
        var targetWidth = this.tParent.children().eq(idx).outerWidth();
        this.bar.width(targetWidth);
    }
    this.moveLeft = function(moveDistance){
        this.bar.css("left", moveDistance)
    }
    var that = this;
    this.tChildren.click(function(){
        var idx = $(this).index();
        that.set(idx);
    });
    this.tChildren.mouseover(function(){
        var idx = $(this).index();
        that.move(idx);
    });
    this.tChildren.mouseleave(function(){
        that.set(that.setItem);
    });
    this.move = function(idx){
        this.getWidth(idx);
        this.tDistance = this.getDistance(idx);
        this.moveLeft(this.tDistance);
    }
    this.set = function(idx){
        this.setItem = idx;
        this.move(idx);
    }
    this.getDistance = function(idx){
        var pWidth = 10;
        var moveWidth = 10;
        for(var i=0; i<idx; i++){
            moveWidth = moveWidth + this.tParent.children().eq(i).outerWidth() + pWidth;
        }
        return moveWidth;
    }
}
