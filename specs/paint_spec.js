const assert = require('assert');
const Paint = require('../models/paint.js');

describe('Paint',function(){
  let paint;
  beforeEach(function(){
    paint = new Paint(14)
  });
  
  it('should check if is empty ',function(){
    actual = paint.isEmpty();
    assert.deepStrictEqual(actual,false);
  });
  
  
  
  
  
  
  it('should be able empty it self',function(){
    paint.empty();
    actual = paint.isEmpty();
    assert.deepStrictEqual(actual, true);
  });
});