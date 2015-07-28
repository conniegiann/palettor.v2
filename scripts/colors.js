// the colors object (exported)
var colors = {}

// generate a random color, output will always be hex
colors.randomHex = function() {

  // the hex color to build and return,
  // and an iterator for r, b and b
  var hexString = '#',
      i = 3;

  // loop will generate a random r, g and b hex value
  while (i) {

    // random integer between 0 and 255
    var component = Math.floor(Math.random() * 255);

    console.log(component)

    // convert to hex
    component = component.toString(16);

    console.log(component)

    // make sure that it's always two digits
    if (component.length < 2) {
      component = 0 + component;
    }

    console.log(component)

    // add it to the hex color string
    hexString += component;

    // decrement
    i--;
  }
  return hexString;
}

// convert hex to rgb
colors.hexToRGB = function(hexString) {

  // split into the individual hex components,
  // and convert them to decimal numbers,
  // then back to strings
  var r = parseInt(hexString.slice(1, 3), 16).toString(),
      g = parseInt(hexString.slice(3, 5), 16).toString(),
      b = parseInt(hexString.slice(5), 16).toString();

  // format to a browser rgb string
  return 'rgb(' + [r, b, b].join(',') + ')';
}

// darkens a color, or lightens it if percentage is negative
colors.darken = function(hexString, percent) {

}

// export this as a node module
module.exports = colors;