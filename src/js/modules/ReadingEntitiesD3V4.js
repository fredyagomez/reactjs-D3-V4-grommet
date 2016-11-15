

import React from 'react';
import * as d3 from 'd3';
import Letter from './components/Letter';
import PlayingII from './components/PlayingII';
import ReadingAttributesD3V4 from './ReadingAttributesD3V4';
import ReactTransitionGroup from 'react-addons-transition-group';

export default class ReadingEntitiesD3V4 React.Component {
  constructor () {
    super();
    this.state = {xaxis: [], xaxis1: [], entity :[]};
  }
  componentWillMount() {
    d3.interval(() => this.getData(), 1500);
  }
  getData: function() {
    let xaxispush = ["E","-","R","-Diagram"];
    let xaxispush1 = [];
    this.props.comment.entities.map ((comment, index) => {
      let position_list = function() {
        this.xpos = comment.x;
        this.ypos = comment.y;
      };
      var position = new position_list();
      var position_array = new Array(position);
      xaxispush1.push(position_array);
    });
    this.setState({xaxis: xaxispush});
    this.setState({xaxis1: xaxispush1});
  },
  render () {
    let search_entity = [];
    var entities_map = this.props.comment.entities.map ((comment, index) => {
      let transition = d3.transition().duration(6050).ease(d3.easeCubicInOut);
      let entity_list = function() {
        this.name = comment.name;
        this.xpos = comment.x;
        this.ypos = comment.y;
      };
      let entity1 = new entity_list();
      search_entity.push(entity1);
      return (
	<ReadingAttributesD3V4 comment={comment} x={comment.x} y={comment.y} index={index} entity={comment.name} transition={transition} search_entity={search_entity}/>
      );
    });    
    var playingII = this.state.xaxis1.map ((xcomment, xindex) => {
      let x_pos; 
      for(let prop in xcomment) {
        x_pos = xcomment[prop];
        let transition = d3.transition().duration(6050).ease(d3.easeCubicInOut);	  
        return (
	   <PlayingII letterx={x_pos.xpos} lettery={x_pos.ypos} i={xindex} key={`letter-${x_pos.x}${xindex}`} transition={transition}/>		 
        );
      }
    }); 
    return (  
      <g>
	<ReactTransitionGroup component="g">
          {this.state.xaxis.map((d, i) => (
             <Letter letter={d} i={i} key={`letter-${d}`}
              transition={transition} />
           ))}
        </ReactTransitionGroup>
	<ReactTransitionGroup component="g">
	  {playingII}
        </ReactTransitionGroup>  
	<ReactTransitionGroup component="g">        
	  {entities_map}
        </ReactTransitionGroup>
      </g>
    );
  }
};
