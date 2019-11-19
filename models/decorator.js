
const Decorator = function(){
  this.stock = [];
}

Decorator.prototype.addCan = function(paint){
  this.stock.push(paint)
};

Decorator.prototype.totalLiters = function(){
  result = 0;
  for (let paint of this.stock){
    result += paint.liters;
  };
  return result;
};

Decorator.prototype.canPaint = function(room){
  return (room.squareMeters > this.totalLiters() ? false : true);
}





module.exports = Decorator;