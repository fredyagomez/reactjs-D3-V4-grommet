
import React from 'react';
import Section from 'grommet/components/Section';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Image from 'grommet/components/Image';
import NavLink from './NavLink';

export default class Home extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    const path = `/Taxonomy`;
    this.context.router.push(path);	
  }
  render() {
    return (
        <div>
	  <Section align="start" pad={{"horizontal": "medium", "vertical": "medium", "between": "small"}} >	  
	    <Tiles>
	      <Tiles fill={true} colorIndex="accent-2" flush={true} justify="center" full="horizontal" responsive={true}>
	 	<Tile colorIndex="neutral-1" fill={false} flush={true} pad={{"horizontal": "medium"}} onClick={this.handleSubmit}>
	          <Header>
		    <NavLink to="/Taxonomy">
			<b>Tile 1</b>
		    </NavLink>
		  </Header>
		  <Footer>						
		    Sub-title
                  </Footer>
		</Tile>
		<Tile colorIndex="neutral-2" pad={{"horizontal": "medium"}}>
		    <Image src="img/tile_data.jpg" />
		</Tile>
		<Tile colorIndex="neutral-1" fill={false} flush={true} pad={{"horizontal": "medium"}} onClick={this.handleSubmit}>
		  <Header>
		    <NavLink to="/Discovery">
		      <b>Tile 2</b>
                    </NavLink>
		  </Header>
		  <Footer>
		    Sub-title
		  </Footer>
		</Tile>
	      </Tiles>
	      <Tiles fill={true} colorIndex="accent-2" flush={true} justify="center" full="horizontal" >
	        <Tile colorIndex="neutral-2" pad={{"horizontal": "medium"}}>
	          <Image src="img/tile_ux.jpg" />
	        </Tile>
	        <Tile colorIndex="neutral-1" fill={false} flush={true}  pad={{"horizontal": "medium"}} onClick={this.handleSubmit}>
	          <Header>
	            <NavLink to="/Policy">
	             <b>Tile 3</b>
	      	    </NavLink>
	    	  </Header>
                  <Footer>
	            Sub-title
	          </Footer>
	        </Tile>
	        <Tile colorIndex="neutral-2" pad={{"horizontal": "medium"}}>
	           <Image src="img/tile_demos.jpg" />
	        </Tile>
              </Tiles>
              <Tiles fill={true} colorIndex="accent-2" flush={true} justify="center" full="horizontal">
	        <Tile colorIndex="neutral-1" fill={false} flush={true} pad={{"horizontal": "medium"}} onClick={this.handleSubmit}>
	          <Header>
	            <NavLink to="/Change">
		      <b>Tile 4</b>
	            </NavLink>
	          </Header>
                  <Footer>
			  Sub-title
		  </Footer>
	        </Tile>
		<Tile colorIndex="neutral-2" pad={{"horizontal": "medium"}}>
		  <Image src="img/tile_strategy.jpg" />
		</Tile>
		<Tile colorIndex="neutral-1" fill={false} flush={true} pad={{"horizontal": "medium"}} onClick={this.handleSubmit}>
		  <Header>
		    <NavLink to="/Support">
			<b>Tile 5</b>
		    </NavLink>
		  </Header>
		  <Footer>
		    Sub-title
		  </Footer>
                </Tile>
              </Tiles>
            </Tiles>
          </Section>
        </div>);
  }
};
	    
	    contextTypes: {
    router: React.PropTypes.object
  }
