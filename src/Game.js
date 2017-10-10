function Game() {

}

Game.prototype.placeShip = function (anchor, orientation , size) {
  if (parseInt(anchor.split('')[1] + size) > 11) throw Error("Ship outside the board")
}
