

import React, { PropTypes, Component } from 'react';
import Table from 'grommet/components/Table';
import Layer from 'grommet/components/Layer';
import Heading from 'grommet/components/Heading';
import * as d3 from 'd3';

export default class ReadingAttributesD3V4 extends Component {
  constructor () {
    super();
    this._OnClick = this._OnClick.bind(this);
    this._onClose = this._onClose.bind(this);
    this.state = {flag_rightTable: false, fillOpacity: 1e-6};
  }
  
  componentWillEnter(callback) {
    let node = d3.select(ReactDOM.findDOMNode(this));
    node.transition(this.props.transition)
      .style('fill-opacity', 1)
      .on('end', () => {
        this.setState({fillOpacity: 1});
        callback();
      });
  }
  _OnClick () {
    this.setState({flag_rightTable: true});
  }
  _onClose () {
    this.setState({flag_rightTable: false});
  }
  render () {
    let x = this.props.x;
    let y = this.props.y+26;
    let z = this.props.x;
    let w = this.props.y;
    let p = this.props.x + 176;
    let entity = this.props.entity;
    let attributes_map = this.props.comment.attributes.map ((comment) => {
      y = y+18;
      return (
	<text x={x+5} y={y}>{comment.name}</text>
      );
    });
    let relationships_map = this.props.comment.relationship.map ((commentI) => {
      let to = commentI.to;
      let new_x;
      let new_y;	  
      let search_entity_map = this.props.search_entity.map ((commentII) => {
        if (to == commentII.name) {
          new_x = commentII.xpos;
          new_y = commentII.ypos;
          return ({new_x: commentII.xpos,new_y:commentII.ypos});
        }
      });  
      if (new_x && new_y) {
        if (new_x > x) {
          return (
	 <line x1={new_x} y1={new_y+40} x2={z + 176} y2={w+40} stroke="black"></line>	  
          );
        } else if (new_x == x && new_y > y) {
          return (
          <line x1={new_x+90} y1={new_y} x2={z+90} y2={w + 130.76923076923077} stroke="black"></line>
          );
        } else if (new_x == x && new_y < y) {
          return (
          <line x1={new_x+90} y1={new_y + 130.76923076923077} x2={z+90} y2={w} stroke="black"></line>
          );
        } else if (new_x < x) {
          return (
        <line x1={new_x + 176} y1={new_y+40} x2={z} y2={w+40} stroke="black"></line>
          );		  
        } else {
          return (
	    <line x1={new_x} y1={new_y} x2={z} y2={w}></line>
          );
        }
      }
      return true;
    });
    let rightTable;
    if(this.state.flag_rightTable) {
      rightTable = (  
        <Layer closer={true} align="right" onClose={this._onClose}>
	  <Heading tag="h2">
	    {entity}
	  </Heading>
          <hr/>
	  <Table>
	    <thead>
	      <tr>
	        <th><b>Owner</b></th>
	        <th><b>Policy</b></th>
	        <th><b>Request</b></th>
	      </tr>
	    </thead>
	    <tbody>
	      <tr>
	        <td>XXXX</td>
	        <td>Policy XXXX</td>
	        <td>Request XXX YYY ZZZ</td>
	      </tr>
	      <tr>
	        <td>YYYYY</td>
	        <td>Policy YYYY</td>
	        <td>Request XXX YYY ZZZ</td>
	      </tr>
	      <tr>
	        <td>ZZZZZZZ</td>
	        <td>Policy ZZZZZ</td>
	        <td>Request XXX YYY ZZZ</td>
	      </tr>
	    </tbody></Table>
	  </Layer>
      );
    }	
    return (
      <g>
        <rect x={z} y={w} rx="6" ry="6" width="176" height="130.76923076923077" fill="#BFDFBF" stroke="black" style={{fillOpacity: this.state.fillOpacity}} onClick={this._OnClick}></rect>
        <line x1={z} y1={w+30} x2={p} y2={w+30} stroke="black"></line>
        <text x={z+5} y={w+16} stroke="black">{entity}</text>
        {attributes_map}
	{relationships_map}
	{rightTable}
      </g>
    );
  }
};

ReadingAttributesD3V4.propTypes = {
  section: PropTypes.object
};
