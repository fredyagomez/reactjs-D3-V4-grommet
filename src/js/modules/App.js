import React from 'react';
import NavLink from './NavLink';
import Header from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';
import Image from 'grommet/components/Image';
import Footer from 'grommet/components/Footer';

export default class App extends React.Component {
  render() {
    return (
	<div>
	  <Header justify="between" colorIndex="neutral-1" pad={{"horizontal": "medium"}} role="nav">
	    <Image src="img/Logo.jpg" size="small" />
	    <Menu direction="row" size="medium">
		  <NavLink to="/Policy">
		  List
		  </NavLink>
		  <Menu label="Drop Down" dropColorIndex="neutral-1">	
	 	    <NavLink to="/FormDoc">
		       Form I
            </NavLink><br/>	
		  </Menu>
	  	  <NavLink to="/Bootstrap">
		    Bootstrap Example
		  </NavLink>
		  <NavLink to="/Element">
			HighCharts1
		  </NavLink>
		  <NavLink to="/Element2">
			HighCharts2
		  </NavLink>
		  <NavLink to="/D3_v4_er">
			D3
		  </NavLink>
	    </Menu>			  
	  </Header>
	  <div>
	    <Image src="img/Banner_DataCenter6a.jpg" full="horizontal" />
	       {this.props.children}
	  </div>
	  <Footer primary={true} appCentered={true} direction="column" align="center" pad="small" colorIndex="grey-1">
		<p>
		Footer Informatin
		</p>
	  </Footer>
	</div>
    );
  }
};
