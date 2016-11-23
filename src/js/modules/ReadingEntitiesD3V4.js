
import React from 'react';
import * as d3 from 'd3';
import DiagramBox from './DiagramBox';
import DiagramTitle from './DiagramTitle';
import DiagramLine from './DiagramLine';
import DiagramRelationship from './DiagramRelationship';
import DiagramAttribute from './DiagramAttribute';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import Layer from 'grommet/components/Layer';
import Heading from 'grommet/components/Heading';
import ReactTransitionGroup from 'react-addons-transition-group';

export default class ReadingEntitiesD3V4 extends React.Component {
  constructor() {
    super();
    this.parentHandleClick = this.parentHandleClick.bind(this);
    this._onClose = this._onClose.bind(this);
    this.state = {xaxis: [], xaxis1: [], entity :[], flag_rightTable: false};
  }  
  componentWillMount() {
    this.getData();
  }
  getData() {
    let xaxispush1 = [];
    this.props.comment.entities.map ((comment, index) => {
      let position_list = function() {
        this.xpos = comment.x;
        this.ypos = comment.y;
        this.length = comment.attributes.length;
        this.color = comment.color;
        this.name = comment.name;
        this.attributes = comment.attributes;
        this.relationship = comment.relationship;
      };
      let position = new position_list();
      let position_array = new Array(position);
      xaxispush1.push(position_array);
    });
    this.setState({xaxis1: xaxispush1});
  }
  parentHandleClick () {
    this.setState({flag_rightTable: true});
  }
  _onClose () {
    this.setState({flag_rightTable: false});
  }
  render () {
    let search_entity2 = [];
    let model = this.props.comment.title;
    let diagrambox = this.state.xaxis1.map ((xcomment, xindex) => {
      let x_pos;  
      for(let prop in xcomment) {
        x_pos = xcomment[prop];
        let entity_list = function() {
          this.name = x_pos.name;
          this.xpos = x_pos.xpos;
          this.ypos = x_pos.ypos;
          this.length = x_pos.attributes.length;
        };
        let entity2 = new entity_list();
        search_entity2.push(entity2);
        let transition = d3.transition().duration(2050).ease(d3.easeCubicInOut);
        return (
	       <DiagramBox onClick={this.parentHandleClick} model={model} relationship={x_pos.relationship} attributes={x_pos.attributes} entity={x_pos.name} letterx={x_pos.xpos} color={x_pos.color} length={x_pos.length} lettery={x_pos.ypos} i={xindex} key={`letter-${x_pos.x}${xindex}`} transition={transition} search_entity={search_entity2} />		 
        );
      }
      return true;
    }); 
    let diagramtitle = this.state.xaxis1.map ((xcomment, xindex) => {
      let x_pos;  
      for(let prop in xcomment) {
        x_pos = xcomment[prop];
        let transition = d3.transition().duration(2050).ease(d3.easeCubicInOut);
        let y = x_pos.ypos + 20;
        let x = x_pos.xpos + 5;
        return (
	  <DiagramTitle model={model} relationship={x_pos.relationship} attributes={x_pos.attributes} entity={x_pos.name} letterx={x} color={x_pos.color} length={x_pos.length} lettery={y} i={xindex} key={`letter-${x_pos.x}${xindex}`} transition={transition}/>		 
        );
      }
      return true;
    }); 
    let diagramattributearray = [];
    this.state.xaxis1.map ((comment, index) => {
      let x_pos;  
      for(let prop in comment) {
        x_pos = comment[prop];
        let y = x_pos.ypos + 28;
        let x = x_pos.xpos + 5;
        x_pos.attributes.map((xcomment, index) => {
          y = y + 18;
          let name = xcomment.name;
          diagramattributearray.push({x: x, y: y, name: name});
        });
      }
    });
    let diagramattribute = diagramattributearray.map ((comment, index) => {
      let transition = d3.transition().duration(2050).ease(d3.easeCubicInOut);
      return (
	 <DiagramAttribute x={comment.x} y={comment.y} name={comment.name} i={index} key={`letter-${comment.x}${index}`} transition={transition}/>		 		 
      ); 
    });
    
    let diagramline = this.state.xaxis1.map ((xcomment, xindex) => {
      let x_pos;  
      for(let prop in xcomment) {
        x_pos = xcomment[prop];
        let transition = d3.transition().duration(2050).ease(d3.easeCubicInOut);
        let lengthString=23;
        let NewLengthStringI=23;
        let NewLengthStringII;
        let NewLengthString;
        if (x_pos.name.length > lengthString) {
          NewLengthStringII = x_pos.name.length;
        } 
        x_pos.attributes.map ((comment, index) => {
          if (comment.name.length > NewLengthStringI) {
            NewLengthStringI = comment.name.length;
          } 
        });
        if (NewLengthStringII > NewLengthStringI) {
          NewLengthString = 5.1765*NewLengthStringII + 56.941;
        } else if (NewLengthStringI > NewLengthStringII) {
          NewLengthString = 5.1765*NewLengthStringI + 56.941;
        } else {
          NewLengthString = 210;
        }
        let y1 = x_pos.ypos + 30;
        let x1 = x_pos.xpos;
        let y2 = x_pos.ypos + 30;
        let x2 = x_pos.xpos+NewLengthString;
        return (
	  <DiagramLine model={model} relationship={x_pos.relationship} attributes={x_pos.attributes} entity={x_pos.name} x1={x1} y1={y1} x2={x2} y2={y2} color={x_pos.color} length={x_pos.length}  i={xindex} key={`letter-${x_pos.x}${xindex}`} transition={transition}/>		 
        );
      }
      return true;
    });
    let diagramrelationshiparray = [];
    this.state.xaxis1.map ((xcomment, xindex) => {
      let x_pos;  
      for(let prop in xcomment) {
        x_pos = xcomment[prop];
        let entity_list = function() {
          this.name = x_pos.name;
          this.xpos = x_pos.xpos;
          this.ypos = x_pos.ypos;
          this.length = x_pos.attributes.length;
        };
        let entity2 = new entity_list();
        search_entity2.push(entity2);
        let length = x_pos.length;
        let lengthString=23;
        let NewLengthStringI=23;
        let NewLengthStringII;
        let NewLengthString;
        if (x_pos.name.length > lengthString) {
          NewLengthStringII = x_pos.name.length;
        } 
        x_pos.attributes.map ((comment, index) => {
          if (comment.name.length > NewLengthStringI) {
            NewLengthStringI = comment.name.length;
          } 
        });
        if (NewLengthStringII > NewLengthStringI) {
          NewLengthString = 5.1765*NewLengthStringII + 56.941;
        } else if (NewLengthStringI > NewLengthStringII) {
          NewLengthString = 5.1765*NewLengthStringI + 56.941;
        } else {
          NewLengthString = 210;
        }
        let y1 = x_pos.ypos;
        let x1 = x_pos.xpos;
        let new_x1;
        let new_x2;
        let new_y1;
        let new_y2;
        x_pos.relationship.map ((commentI) => {
          let to = commentI.to;  
          let new_x;
          let new_y;
          let new_length;
          search_entity2.map ((commentII) => {
            if (to == commentII.name) {
              new_x = commentII.xpos;
              new_y = commentII.ypos;
              new_length = commentII.length;
            }
          });
          if (new_x > x1) {
            new_x1 = new_x;
            new_y1 = new_y+40;
            new_x2 = x1 + NewLengthString;
            new_y2 = y1+40;
          } else if (new_x == x1 && new_y > y1) {
            new_x1 = new_x+90;
            new_y1 = new_y;
            new_x2 = x1+90;
            new_y2 = y1 + 20*length+30; 
          } else if (new_x == x1 && new_y < y1) {
            new_x1 = new_x+90;
            new_y1 = new_y+ 20*new_length+30;
            new_x2 = x1+90;
            new_y2 = y1;
          } else if (new_x < x1) {
            new_x1 = new_x + NewLengthString;
            new_y1 = new_y+40;
            new_x2 = x1;
            new_y2 = y1+40;		  
          } else {
            new_x1 = new_x;
            new_y1 = new_y;
            new_x2 = x1;
            new_y2 = y1;
          }
          diagramrelationshiparray.push({new_x1: new_x1, new_y1:new_y1, new_x2:new_x2, new_y2:new_y2});
        });	
      }
      return true;
    });
    let diagramrelationship = diagramrelationshiparray.map ((comment, index) => {
      let transition = d3.transition().duration(2050).ease(d3.easeCubicInOut);
      return (
	 <DiagramRelationship x1={comment.new_x1} y1={comment.new_y1} x2={comment.new_x2} y2={comment.new_y2} i={index} key={`letter-${comment.new_x1}${index}`} transition={transition}/>		 		 
      ); 
    });
    let entity = "Title";
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
				   <th><b>Type</b></th>
				   <th><b>Title</b></th>
				   <th><b>Organization</b></th>
				   <th><b>Status</b></th>
				   <th><b>FullName</b></th>
				   <th><b>Domain</b></th>
			   </tr>
			   </thead>
			   <tbody>
			   <TableRow key="Title">
				  <td>Type</td>
				  <td>Title</td>
				  <td>Organization</td>
				  <td>Status</td>
				  <td>FullName</td>
				  <td>Domain</td>
			  </TableRow>
			   </tbody>
			   </Table>
		   </Layer>
      );
    }	
    return (  
	  <g>
	  {rightTable}
		<ReactTransitionGroup component="g">
		  {diagrambox} 
	    </ReactTransitionGroup> 
        <ReactTransitionGroup component="g">
		  {diagramtitle} 
	    </ReactTransitionGroup>	
		<ReactTransitionGroup component="g">
		  {diagramline} 
	    </ReactTransitionGroup>	
		<ReactTransitionGroup component="g">
		  {diagramrelationship} 
	    </ReactTransitionGroup>	
		<ReactTransitionGroup component="g">
		  {diagramattribute} 
	    </ReactTransitionGroup>
	  </g>
    );
  }
};
