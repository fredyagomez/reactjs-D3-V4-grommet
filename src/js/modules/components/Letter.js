
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';

const ExitColor = 'blue',
  UpdateColor = '#333',
  EnterColor = 'green';

class AttributesMap extends Component {
  constructor () {
    super();
    this.state = {y: 0, x: 0, color: EnterColor, fillOpacity: 1e-6};
  }

  componentWillEnter(callback) {
    let node = d3.select(ReactDOM.findDOMNode(this));
    this.setState({x: this.props.i*32});
    node.transition(this.props.transition)
      .attr('y', 60)
      .style('fill-opacity', 1)
      .on('end', () => {
        this.setState({y: 60, fillOpacity: 1, color: UpdateColor});
        callback();
      });
  }

  componentWillLeave(callback) {
    let node = d3.select(ReactDOM.findDOMNode(this));
    this.setState({color: ExitColor});
    node.interrupt()
      .transition(this.props.transition)
      .attr('y', 120)
      .style('fill-opacity', 1e-6)
      .on('end', () => {
        this.setState({y: 120, fillOpacity: 1e-6});
        callback();
      });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.i != nextProps.i) {
      let node = d3.select(ReactDOM.findDOMNode(this));

      this.setState({color: UpdateColor});
      node.transition(this.props.transition)
        .attr('x', nextProps.i*32)
        .on('end', () => this.setState({x: nextProps.i*32}));
    }
  }

  render() {
    return (
	    <text dy=".35em" y={this.state.y} x={this.state.x} style={{fillOpacity: this.state.fillOpacity, fill: this.state.color, font: 'bold 48px monospace'}}>
                {this.props.letter}
            </text>			
    );
  }
};

export default AttributesMap;
