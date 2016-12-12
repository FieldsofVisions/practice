import React from 'react';
import ReactDOM from 'react-dom';
require('!style!css!sass!./style.scss');
var Button = require('react-bootstrap').Button
var Modal = require('react-bootstrap').Modal

class MainBox extends React.Component{
		render(){
			return(
				<div>
			<Header />
			</div>
			);
		}
}




class Header extends React.Component{
	render(){
		return(
			<div>
			 <h1>Meat Master 2000</h1>
		  </div>
		);
	}
}

ReactDOM.render(
 <MainBox />,
document.getElementById('stuff')
);