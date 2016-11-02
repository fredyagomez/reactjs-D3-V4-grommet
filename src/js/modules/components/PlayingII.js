
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
      //.attr('x', this.state.x)
      .style('fill-opacity', 0.5)
      .on('end', () => {
        //this.setState({y: 60, fillOpacity: 1, color: UpdateColor});
        this.setState({fillOpacity: 0.5});
        callback();
      });
  }

/*  
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

      this.setState({x: this.state.x});
      node.transition(this.props.transition)
        .attr('x', nextProps.i*32)
        .on('end', () => this.setState({x: nextProps.i*32}));
    }
  }
*/
  render() {
    let x = this.props.letterx;
    let y = this.props.lettery;
    //let y = this.props.i;
    //console.log(x);
    //console.log(y);
    return (
				
			<rect y={y} x={x}  rx="6" ry="6" width="176" height="130.76923076923077" stroke="black" style={{fillOpacity: this.state.fillOpacity, fill: this.state.color}}>
                
            </rect>
				
    );
  }
};

export default Playing;
