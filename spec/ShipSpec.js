describe('Ship', function() {
  var ship

  it('creates 3x1 ship', function(){
    ship = new Ship('A1', 'h', 3);
    expect(ship.position).toEqual(['A1', 'B1', 'C1']);
  })

  it('creates 4x1 ship', function(){
    ship = new Ship('B2', 'h', 4);
    expect(ship.position).toEqual(['B2', 'C2', 'D2', 'E2']);
  })

  it('creates 1x4 ship', function(){
    ship = new Ship('B2', 'v', 4);
    expect(ship.position).toEqual(['B2', 'B3', 'B4', 'B5']);
  })

  it('size of our board',function(){
    expect( function() {new Ship ('K1', 'v', 3)}).toThrow(new Error('Ship outside the board'))
  })
})
