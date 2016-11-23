
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';

export default class DiagramLine extends Component {
  constructor (props) {
    super(props);
    //this._OnClick = this._OnClick.bind(this);
    //this._onMouseEnter = this._onMouseEnter.bind(this);
    //this._onMouseLeave = this._onMouseLeave.bind(this);
    //this._onClose = this._onClose.bind(this);
    this.state = {color: 'white', x1: props.x1, y1: props.y1, x2: props.x2, y2: props.y2, flag_tooltip: false};
  }
  componentWillAppear(callback) {
    let node = d3.select(ReactDOM.findDOMNode(this));
    this.setState({x1: this.props.x1});
    this.setState({y1: this.props.y1});
    this.setState({x2: this.props.x2});
    this.setState({y2: this.props.y2});
    this.setState({color: 'black'});

    node.transition(this.props.transition)
      .attr('x1', this.state.x1)
	  .attr('y1', this.state.y1)
      .attr('x2', this.state.x2)
	  .attr('y2', this.state.y2)
      .style('color', this.state.color)
      .on('end', () => {
        //this.setState({y: 60, fillOpacity: 1, color: UpdateColor});
        this.setState({color: this.state.color, x1: this.state.x1, y1: this.state.y1,  x2: this.state.x2, y2: this.state.y2});
        callback();
      });
	 
  }
  
  render() {
    let x1 = 0;
    let y1 = 0;
    let x2 = 0;
    let y2 = 0;
    //let color = 'white';
    //let entity = this.props.entity;
    return (
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="black"></line>
    );
  }
};

