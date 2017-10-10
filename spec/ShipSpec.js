describe('Ship', function() {
  var ship

  it('exists', function(){
    ship = new Ship('A1', 'h', 3);
    expect(ship.position).toEqual(['A1','B1','C1']);
  })
})
