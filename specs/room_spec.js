const assert = require('assert');
const Room = require('../models/room.js');

describe('Room',function(){
  let room;
  beforeEach(function(){
    room = new Room(20);
  });
  
  it('should be able to be painted',function(){
    room.paint();
    actual = room.isPainted
    assert.strictEqual(actual, true)
  })
})