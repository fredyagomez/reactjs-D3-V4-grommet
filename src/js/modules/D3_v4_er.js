import React from 'react';
import Header from 'grommet/components/Header';
import Box from 'grommet/components/Box';
import ReadingEntitiesD3V4 from './ReadingEntitiesD3V4';

export default class D3_v4_er extends React.Component {
  constructor () {
    super();
    this.state = {dataII : []};
  }
  componentDidMount () {
    var dataII = [{"conceptual model":"customer", "entities":[{"name":"Entity 1","x":400,"y":50,"color":"#29D3C8","id":"1","attributes":[{"name":"Attribute 1","id":"1","dataType":"Char","definition":"Definition","keytype":"Non-Inherited Non-Key"},{"name":"Attribute 2","id":"2","dataType":"Char","definition":"Definition","keytype":"Non-Inherited Non-Key"}],"relationship":[{"to":"Entity 3","on":"attribute 2","type":"One to Many"},{"to":"Entity 6","on":"attribute 1","type":"Many to Many"}]},{"name":"Entity 3","x":400,"y":250,"color":"#604765","id":"2","attributes":[{"name":"Attribute 1","id":"1","dataType":"Char","definition":"Definition","keytype":"Non-Inherited Non-Key"},{"name":"Attribute 2","id":"2","dataType":"Char","definition":"Definition","keytype":"Non-Inherited Non-Key"}],"relationship":[{"to":"Entity 4","on":"attribute 2","type":"One to Many"},{"to":"Entity 2","on":"attribute 2","type":"One to Many"}]},{"name":"Entity 4","x":400,"y":450,"color":"#FE8D6B","id":"3","attributes":[{"name":"Attribute 1","id":"1","dataType":"Char","definition":"Definition","keytype":"Non-Inherited Non-Key"},{"name":"Attribute 2","id":"2","dataType":"Char","definition":"Definition","keytype":"Non-Inherited Non-Key"}],"relationship":[{"to":"Entity 5","on":"attribute 1","type":"One to Many"}]},{"name":"Entity 2","x":100,"y":250,"color":"#FE8D6B","id":"4","attributes":[{"name":"Attribute 1","id":"1","dataType":"Char","definition":"Definition","keytype":"Non-Inherited Non-Key"},{"name":"Attribute 2","id":"2","dataType":"Char","definition":"Definition","keytype":"Non-Inherited Non-Key"},{"name":"Attribute 3","id":"3","dataType":"Char","definition":"Definition","keytype":"Non-Inherited Non-Key"},{"name":"Attribute 4","id":"4","dataType":"Char","definition":"Definition","keytype":"Non-Inherited Non-Key"}],"relationship":[]},{"name":"Entity 6","x":700,"y":50,"color":"#29D3C8","id":"4","attributes":[{"name":"Attribute 1","id":"1","dataType":"Char","definition":"Definition","keytype":"Non-Inherited Non-Key"}],"relationship":[{"to":"Entity 4","on":"attribute 1","type":"One to Many"}]},{"name":"Entity 5","x":400,"y":650,"color":"#FE8D6B","id":"4","attributes":[{"name":"Attribute 1","id":"1","dataType":"Char","definition":"Definition","keytype":"Non-Inherited Non-Key"}],"relationship":[]}]}];
    this.setState({dataII: dataII});
  }
  render () {  
    var entities = this.state.dataII.map((comment) => {
      console.log(comment);
      return (
	    <ReadingEntitiesD3V4 comment={comment} />
      );
    });	 
    return (
	<div>
	  <Header>
	    <h3><b> E-R Relationship Diagram </b></h3><br/><h5>* Click on the entity frame to find out more information</h5>
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
};
