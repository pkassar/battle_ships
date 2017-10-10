describe('game', function() {
  var game = new Game();

  it('size of our board',function(){
    expect( function() { game.placeShip ('A8', 'v', 3) }).toThrow(new Error("Ship outside the board"))
  })
})
