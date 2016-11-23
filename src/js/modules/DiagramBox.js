
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';


export default class DiagramV1 extends Component {
  constructor (props) {
    super(props);
    this.childHandleClick = this.childHandleClick.bind(this);
    //this._onMouseEnter = this._onMouseEnter.bind(this);
    //this._onMouseLeave = this._onMouseLeave.bind(this);
    //this._onClose = this._onClose.bind(this);
    this.state = {fillOpacity: 1e-6, x: props.letterx, y: props.lettery};
  }
  componentWillAppear(callback) {

    let node = d3.select(ReactDOM.findDOMNode(this));
    //console.log(this.props);
    this.setState({x: this.props.letterx});
    this.setState({y: this.props.lettery});
    this.setState({color: this.props.color});

    node.transition(this.props.transition)
      .attr('x', this.state.x)
	  .attr('y', this.state.y)
      .style('fill-opacity', 0.7)
      .on('end', () => {
        //this.setState({y: 60, fillOpacity: 1, color: UpdateColor});
        this.setState({color: this.state.color, fillOpacity: 0.7, x: this.state.x, y: this.state.y});
        callback();
      });
	 
  }
  childHandleClick (e) {
    //alert('big button clicked!');
    //if (this.state.flag_rightTable ==false) {
    //this.setState({flag_rightTable: true});
    //}
    this.props.onClick(e);
  }
  render() {
    let length = this.props.length;
    //let model = this.props.model;
    //let entity = this.props.entity;
    let lengthString=23;
    let NewLengthStringI=23;
    let NewLengthStringII;
    let NewLengthString;
    if (this.props.entity.length > lengthString) {
      NewLengthStringII = this.props.entity.length;
    } 
    //this.props.attributes.map ((comment, index) => {
    //  y = y+18;
    //  if (comment.name.length > NewLengthStringI) {
    //    NewLengthStringI = comment.name.length;
    //  } 
    //});
    if (NewLengthStringII > NewLengthStringI) {
      NewLengthString = 5.1765*NewLengthStringII + 56.941;
    } else if (NewLengthStringI > NewLengthStringII) {
      NewLengthString = 5.1765*NewLengthStringI + 56.941;
    } else {
      NewLengthString = 210;
    }
	/*
    let flag_tooltip;
    if (this.state.flag_tooltip) {
      flag_tooltip = (
        <text y={y} x={x}> hola </text>
      );
    }*/
    let x = 0;
    let y = 0;
	/*
    */
    //console.log(this.props.onClickParent);
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

