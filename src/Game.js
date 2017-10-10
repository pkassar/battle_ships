function Game() {
  this.ships = []
}

Game.prototype.placeShip = function (anchor, orientation , size) {
  checkBoundary(anchor, orientation, size);
  this.ships.push(new Ship(anchor, orientation , size))
}

checkBoundary = function(anchor, orientation, size){
  if (orientation == 'h'){
    if (parseInt(anchor.split('')[1]) > 11  ||
      (anchor.split('')[0].charCodeAt() + size) > 76
    ) throw Error("Ship outside the board")
  }else{
    if (parseInt(anchor.split('')[1]) + size > 11 ||
      (anchor.split('')[0].charCodeAt()) > 74
    ) throw Error("Ship outside the board")
  }
}
