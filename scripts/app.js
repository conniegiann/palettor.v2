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
  setColor: function() {
    c = colors.randomHex()
    window.location.hash = c;
    this.setState({
      color: c
    })
  },
  render: function() {
    var c = this.state.color,
        text = colors.isDark(c) ? colors.lighten(c, 24) : colors.darken(c, 24);
    return (
      <div className="palette" style={{background: c, color: text}}>

        <div id="nav">
          <div id="logo">
            <h1>palettor</h1>
          </div>
        </div>

        <Display handleClick={this.setColor} color={c}/>

        <div id="footer">
          <a style={{color: text}} href="https://twitter.com/conniecodes"><i className="fa fa-twitter"></i></a>
          <a style={{color: text}} href="https://github.com/conniegiann/palettor.v2"><i className="fa fa-github-alt"></i></a>
        </div>

      </div>
    );
  }
});

var Display = React.createClass({
  render: function() {
    var c = this.props.color
    return (
      <div id="display">
        <p className="color-text">{c}</p>
        <p className="color-text">{colors.hexToRGB(c)}</p>
        <div className="new-color" onClick={this.props.handleClick} class="color-new">random color</div>
      </div>
    )
  }
})

// render the component into the app container
React.render(<Palette/>, document.getElementById("app"), function() {
  console.log('React rendered...')
});