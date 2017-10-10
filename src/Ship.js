function Ship(anchor, orientation, size) {
this.position = findCoordinates(anchor, orientation, size)
}

findCoordinates = function(anchor, orientation, size){
  array = []
  if (orientation == 'h') {
    var line = anchor.split('')[1]
    var startLetter = anchor.split('')[0].charCodeAt()
    for (var i = 0; i < size; i++){
      array.push(String.fromCharCode(startLetter) + line)
      startLetter++
    }
  }
  return array
}
