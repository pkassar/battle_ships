describe('game', function() {
  var game = new Game();

  it('fits on board',function(){
    expect( function() { game.placeShip ('J8', 'v', 3) }).not.toThrow(new Error("Ship outside the board"))
    expect(game.ships[0].position).toEqual(['J8', 'J9', 'J10'])
  })

  it('doesnt fit rows',function(){
    expect( function() { game.placeShip ('A9', 'v', 3) }).toThrow(new Error("Ship outside the board"))
  })

  it('doesnt fit cols',function(){
    expect( function() { game.placeShip ('K1', 'v', 3) }).toThrow(new Error("Ship outside the board"))
  })

})
