function Game() {
  this.ships = []
}

Game.prototype.placeShip = function (anchor, orientation , size) {
  checkBoundary(anchor, orientation, size);
  var ship = new Ship(anchor, orientation , size)
  this.checkOverlap(ship)
  this.ships.push(ship)
}

Game.prototype.checkOverlap = function(ship1){
  var duplicates = this.flatten().filter(function(val) {
  return ship1.position.indexOf(val) != -1;
  });
  console.log(duplicates)
  if (duplicates.length != 0 ) throw Error("Ship overlapping")
}

Game.prototype.flatten = function (){
  return [].concat.apply([], this.ships.map(function(ship){ return ship.position }))
}

checkBoundary = function(anchor, orientation, size){
  if (orientation == 'h'){
    if (parseInt(anchor.split('')[1]) > 10  ||
      (anchor.split('')[0].charCodeAt() + size) > 76
    ) throw Error("Ship outside the board")
  }else{
    if (parseInt(anchor.split('')[1]) + size > 10 ||
      (anchor.split('')[0].charCodeAt()) > 74
    ) throw Error("Ship outside the board")
  }
}
