function Ship(anchor, orientation, size) {
  this.position = findCoordinates(anchor, orientation, size);
}

findCoordinates = function(anchor, orientation, size){
  var array = [];
  var line = anchor.split('')[1];
  var letter = anchor.split('')[0].charCodeAt();

  for (var i = 0; i < size; i++){
    array.push(String.fromCharCode(letter) + line);
    if (orientation == 'h') {
      letter++;
    }else{
      line++;
    }
  }
  // console.log(array)
  return array;
}
