
import React from 'react';
import Header from 'grommet/components/Header';
import Box from 'grommet/components/Box';
import ReadingEntitiesD3V4 from './ReadingEntitiesD3V4';

export default React.createClass({
 
  getInitialState () {
    return {dataII : []};
  }, 
  componentDidMount: function() {
    this.getModel();
  },

  getModel: function() {

    var dataII = [{"conceptual model":"customer", "entities":[{"name":"Organization","x":400,"y":50,"id":"1","attributes":[{"name":"Org ID","id":"1","dataType":"Char","definition":"Definition","keytype":"Non-Inherited Non-Key"},{"name":"Org Name","id":"2","dataType":"Char","definition":"Definition","keytype":"Non-Inherited Non-Key"}],"relationship":[{"to":"Site","on":"attribute 2","type":"One to Many"},{"to":"Business Relationship","on":"attribute 1","type":"Many to Many"}]},{"name":"Site","x":400,"y":250,"id":"2","attributes":[{"name":"Site ID","id":"1","dataType":"Char","definition":"Definition","keytype":"Non-Inherited Non-Key"},{"name":"Site Name","id":"2","dataType":"Char","definition":"Definition","keytype":"Non-Inherited Non-Key"}],"relationship":[{"to":"Site Instance","on":"attribute 2","type":"One to Many"},{"to":"Address","on":"attribute 2","type":"One to Many"}]},{"name":"Site Instance","x":400,"y":450,"id":"3","attributes":[{"name":"Site Instance ID","id":"1","dataType":"Char","definition":"Definition","keytype":"Non-Inherited Non-Key"},{"name":"Site Instance Name","id":"2","dataType":"Char","definition":"Definition","keytype":"Non-Inherited Non-Key"}],"relationship":[{"to":"Delivery Address","on":"attribute 1","type":"One to Many"}]},{"name":"Address","x":100,"y":250,"id":"4","attributes":[{"name":"Address","id":"1","dataType":"Char","definition":"Definition","keytype":"Non-Inherited Non-Key"},{"name":"City","id":"2","dataType":"Char","definition":"Definition","keytype":"Non-Inherited Non-Key"},{"name":"State","id":"3","dataType":"Char","definition":"Definition","keytype":"Non-Inherited Non-Key"},{"name":"Zip Code","id":"4","dataType":"Char","definition":"Definition","keytype":"Non-Inherited Non-Key"}],"relationship":[]},{"name":"Business Relationship","x":700,"y":50,"id":"4","attributes":[{"name":"Business Relationship","id":"1","dataType":"Char","definition":"Definition","keytype":"Non-Inherited Non-Key"}],"relationship":[{"to":"Site Instance","on":"attribute 1","type":"One to Many"}]},{"name":"Delivery Address","x":400,"y":650,"id":"4","attributes":[{"name":"Delivery Address","id":"1","dataType":"Char","definition":"Definition","keytype":"Non-Inherited Non-Key"}],"relationship":[]}]}];
	//var dataII = [{"conceptual model":"customer", "entities":[{"x":100,"y":100},{"x":400,"y":100}]}];
    this.setState({dataII: dataII});
  },
 
  render () {  
    var entities = this.state.dataII.map(function(comment) {
      console.log(comment);
      //console.log(comment.name);
      return (
	    <ReadingEntitiesD3V4 comment={comment} />
      );
    });	 

    return (
	<div>
	<Header>
	  <h3><b> &nbsp; &nbsp; E-R Relationship Diagram </b></h3><br/><h5>* Click on the entity frame to identify policies and request associated to the entities</h5>
	</Header>
	  <Box direction="row">
		  <Box direction="column" justify="start" align="stretch" marginRight="small" pad={{"horizontal": "medium", "vertical": "none"}} wrap={true} reverse={false} flex={true}>
			<Box>
             <svg width="100%" height="900">
				{entities}
	         </svg>
	 </Box>
	 </Box>
	 </Box>
	 
	 
</div>
    );
  }
});

