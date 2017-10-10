describe('game', function() {
  var game = new Game();

  it('fits on board',function(){
    expect( function() { game.placeShip ('J7', 'v', 3) }).not.toThrow(new Error("Ship overlapping"))
    expect(game.ships[0].position).toEqual(['J7', 'J8', 'J9'])
  })

  it('Overlapps with other ship already placed',function(){
    expect( function() { game.placeShip ('I8', 'h', 2) }).toThrow(new Error("Ship overlapping"))
  })

  it('doesnt fit rows',function(){
    expect( function() { game.placeShip ('A9', 'v', 3) }).toThrow(new Error("Ship outside the board"))
  })

  it('doesnt fit cols',function(){
    expect( function() { game.placeShip ('K1', 'v', 3) }).toThrow(new Error("Ship outside the board"))
  })

})
