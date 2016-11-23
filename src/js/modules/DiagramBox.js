
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';


export default class DiagramV1 extends Component {
  constructor (props) {
    super(props);
    this.childHandleClick = this.childHandleClick.bind(this);
    this.state = {fillOpacity: 1e-6, x: props.letterx, y: props.lettery};
  }
  componentWillAppear(callback) {
    let node = d3.select(ReactDOM.findDOMNode(this));
    this.setState({x: this.props.letterx});
    this.setState({y: this.props.lettery});
    this.setState({color: this.props.color});
    node.transition(this.props.transition)
      .attr('x', this.state.x)
      .attr('y', this.state.y)
      .style('fill-opacity', 0.7)
      .on('end', () => {
        this.setState({color: this.state.color, fillOpacity: 0.7, x: this.state.x, y: this.state.y});
        callback();
      });
	 
  }
  childHandleClick (e) {
    this.props.onClick(e);
  }
  render() {
    let length = this.props.length;
    let lengthString=23;
    let NewLengthStringI=23;
    let NewLengthStringII;
    let NewLengthString;
    if (this.props.entity.length > lengthString) {
      NewLengthStringII = this.props.entity.length;
    } 
    if (NewLengthStringII > NewLengthStringI) {
      NewLengthString = 5.1765*NewLengthStringII + 56.941;
    } else if (NewLengthStringI > NewLengthStringII) {
      NewLengthString = 5.1765*NewLengthStringI + 56.941;
    } else {
      NewLengthString = 210;
    }
    let x = 0;
    let y = 0;
    return (
      <rect 
	    y={y} x={x} key={x+y}  rx="6" ry="6" width={NewLengthString} height={20*length+30} stroke="gray" 
		style={{fillOpacity: this.state.fillOpacity, fill: this.state.color}}
		onClick={this.childHandleClick}
        > 
      </rect> 
    );
  }
};

