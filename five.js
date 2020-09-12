function MoveBar(tParent, bar){
    this.tParent = null;
    this.bar = null;
    this.tDistance = null;
    this.setItem = null;
    this.oldItem = null;
    this.overItem = null;

    this.tParent = tParent;
    this.tChildren = tParent.children();
    this.bar = bar;

    this.defaultColor = "white";
    this.bgColor = 'yellow';
    this.bgGrey = 'grey';
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
    this.tParent.mouseleave(function(){
        that.set(that.setItem);
    });
    this.tChildren.mouseover(function(){
        var idx = $(this).index();
        that.move(idx);
        that.changeOverStl(idx);
    });
    this.tChildren.mouseleave(function(){
        that.changeLeaveSyl(this.overItem);
    });
    this.move = function(idx){
        this.getWidth(idx);
        this.tDistance = this.getDistance(idx);
        this.moveLeft(this.tDistance);
    }
    this.changeOverStl = function(idx){
        if(this.setItem!=idx){
            this.overItem = idx;
            this.tParent.children().eq(this.overItem).css("background-color", this.bgGrey);
        }
    }
    this.changeLeaveSyl = function(){
        if(this.overItem!=null){
            if(this.overItem!=this.setItem){
                this.tParent.children().eq(this.overItem).css("background-color", this.defaultColor);
                this.overItem = null;
            }
        }
    }
    this.changeColor = function(idx){
        if(this.oldItem!=null){
            this.tParent.children().eq(this.oldItem).css("background-color", this.defaultColor);
        }
        this.tParent.children().eq(idx).css("background-color", this.bgColor);
    }
    this.set = function(idx){
        if(this.setItem!=null){
            this.oldItem = this.setItem;
        }
        this.setItem = idx;
        this.changeColor(idx);
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

