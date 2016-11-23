
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';

export default class DiagramV2 extends Component {
  constructor (props) {
    super(props);
    //this._OnClick = this._OnClick.bind(this);
    //this._onMouseEnter = this._onMouseEnter.bind(this);
    //this._onMouseLeave = this._onMouseLeave.bind(this);
    //this._onClose = this._onClose.bind(this);
    this.state = {color: 'black', x: props.x, y: props.y, flag_tooltip: false};
  }
  componentWillAppear(callback) {
    let node = d3.select(ReactDOM.findDOMNode(this));
    this.setState({x: this.props.x});
    this.setState({y: this.props.y});
    this.setState({color: 'black'});

    node.transition(this.props.transition)
      .attr('x', this.state.x)
	  .attr('y', this.state.y)
      .style('color', this.state.color)
      .on('end', () => {
        //this.setState({y: 60, fillOpacity: 1, color: UpdateColor});
        this.setState({color: this.state.color, x: this.state.x, y: this.state.y});
        callback();
      });
	 
  }
 
  render() {

    let x = 0;
    let y = 0;
    let color = 'black';
    let name = this.props.name;
    return (
      <text x={x+5} y={y} key={this.props.index} color={color}>{name} </text>
    );
  }
};

