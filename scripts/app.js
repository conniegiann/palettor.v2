// Module require
var React = require('react');

var Palette = React.createClass({
  getInitialState: function() {
    return {
      colors: [null, null, null, null, null]
    };
  },
  render: function() {
    var colors = this.state.colors.map(function(color, i) {
      return (
        <Color num={i} key={i}/>
      );
    });

    return (
      <div className="palette">
        {colors}
      </div>
    );
  }
});

var Color = React.createClass({
  render: function() {
    return (
      <div className='color' id={'color-' + this.props.num.toString()}>
        <p>color {this.props.num} is here</p>
      </div>
    );
  }
});

React.render(<Palette/>, document.body, function() {
  console.log('React rendered...')
})