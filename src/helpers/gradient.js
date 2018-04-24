let getRandomGradient = () => {
   var firstColor = getOneColor('#')
   var secondColor = getOneColor('#')
   var angle = Math.round( Math.random() * 360 );
   return {firstColor, secondColor, angle}
}

let getOneColor = (a) => {
  var hexValues = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e"]
  for ( var i = 0; i < 6; i++ ) {
     var x = Math.round( Math.random() * 14 );
     var y = hexValues[x];
     a += y;
   }
   return a
}

export default getRandomGradient
