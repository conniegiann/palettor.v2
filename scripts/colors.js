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

    // convert to hex
    component = component.toString(16);

    // make sure that it's always two digits
    if (component.length < 2) {
      component = 0 + component;
    }

    // add it to our hex color string
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
      b = parseInt(hexString.slice(5), 16).toString()

  // format to a browser rgb string
  return 'rgb(' + [r, g, b].join(',') + ')';
}

// darkens a color by a certain percent
colors.darken = function(hexString, percent) {

  // split into individual hex components,
  // then convert to decimal numbers
  var r = parseInt(hexString.slice(1, 3), 16);
      g = parseInt(hexString.slice(3, 5), 16);
      b = parseInt(hexString.slice(5), 16);

  // create an array out of the components
  var rgb = [r, g, b];

  // map the components and darken each (using percent)
  darkened = rgb.map(function(component) {
    component = Math.floor(component - 2.55 * percent);

    // make sure the component is below 255
    if (component > 255) {
      component = 255
    }

    // make sure the component is above 0
    if (component < 0) {
      component = 0
    }

    // push the darker component into the new array
    component = component.toString(16);

    if (component.length < 2) {
      component = 0 + component;
    }

    return component;
  });

return '#' + darkened.join('');
}

// just an inversion of colors.darken
colors.lighten = function(hexString, percent) {

  // just invert the percent and the run darken
  percent = -1 * percent;
  return this.darken(hexString, percent);
}

// checks is a color is `dark`
colors.isDark = function(hexString) {

  // split into individual hex components,
  // then convert to decimal numbers
  var r = parseInt(hexString.slice(1, 3), 16);
      g = parseInt(hexString.slice(3, 5), 16);
      b = parseInt(hexString.slice(5), 16);

  // calculate the luminance of the color
  var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;

  // return true if the color is dark
  if (luma < 40) {
    return true;
  }

  // otherwise return false
  return false;
}

// export this as a node module
module.exports = colors;