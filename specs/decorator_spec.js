const assert = require('assert');
const Decorator = require('../models/decorator.js');
const Paint = require('../models/paint.js');
const Room = require('../models/room.js')

describe('Decorator',function(){
  beforeEach(function(){
    decorator = new Decorator();
    paint = new Paint(10);
    room = new Room(14);
    decorator.addCan(paint);
    
  });
  
  it('should be able to add a can of paint to stock',function(){
    let actual = decorator.stock.length;
    assert.deepStrictEqual(actual,1);
  });
  
  it('should be able to calculate total liters of paint in stock',function(){
    let actual = decorator.totalLiters();
    assert.deepStrictEqual(actual,10);
  });
  
  it('should calculate if can paint a room',function(){
    let actual = decorator.canPaint(room);
    assert.deepStrictEqual(actual,false)
  });
})
