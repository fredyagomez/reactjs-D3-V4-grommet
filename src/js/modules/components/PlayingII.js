
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';

const  EnterColor = 'green';

class Playing extends Component {
  constructor () {
    super();
    this.state = {color: EnterColor, fillOpacity: 1e-6};
  }
  componentWillEnter(callback) {
    let node = d3.select(ReactDOM.findDOMNode(this));
    node.transition(this.props.transition)
      .style('fill-opacity', 0.5)
      .on('end', () => {
        this.setState({fillOpacity: 0.5});
        callback();
      });
  }

  render() {
    let x = this.props.letterx;
    let y = this.props.lettery;
    return (
	<rect y={y} x={x}  rx="6" ry="6" width="176" height="130.76923076923077" stroke="black" style={{fillOpacity: this.state.fillOpacity, fill: this.state.color}}> 
        </rect>				
    );
  }
};

export default Playing;
