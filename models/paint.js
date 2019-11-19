
const Paint = function(liters){
  this.liters = liters;
};

Paint.prototype.isEmpty = function(){
  return (this.liters === 0 ? true : false)
};

Paint.prototype.empty = function(){
  this.liters = 0;
};



module.exports = Paint;