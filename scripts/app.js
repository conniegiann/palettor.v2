// modules
var React = require('react');
var colors = require('./colors.js');

// palette component (root level component in this application)
var Palette = React.createClass({
  // the initial state is the hash string from the url,
  // or if it does not exist, it's a random color
  getInitialState: function() {
    return {
      color: window.location.hash || colors.randomHex()
    }
  },
  render: function() {
    return (
      <div className="palette" style={{background: this.state.color}}>
  
        <div id="nav">
          <div id="logo">
            <h1>palettor</h1>
          </div>
          <div id="permalink"></div>
        </div>

        <div id="box"> 
          <div id="hex">{this.state.color}</div>
          <div id="rgb">{colors.hexToRGB(this.state.color)}</div>
        </div>

        <div id="footer">
          <div id="tweet"></div>
          <div id="github"></div>
        </div>
  
      </div>
    );
  }
});

// render the component into the app container
React.render(<Palette/>, document.getElementById("app"), function() {
  console.log('React rendered...')
});