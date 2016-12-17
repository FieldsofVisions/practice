import React from 'react';
import ReactDOM from 'react-dom';
require('!style!css!sass!./style.scss');

class Board extends React.Component{
	render(){
		return(
			<div>
			<h1>MeatMaster 2000</h1>
			<Search />
			</div>
			);
	}
}
class Search extends React.Component{
	render(){
		return(
			<form>
             <div>
			 <h1>Search</h1>
			 <div>Name: <input type='text' /></div>
			 <div>city: <input type='text' /></div>
			 <div>Zip Code: <input type='text' /></div>
			 </div>
			 </form>
		);
	}
}

class DataEntry extends React.Component{
	handleSubmit(){
alert("hey Now");
	}
	render(){
		return(
			<div>
			<form onSubmit={this.handleSubmit.bind(this)}>
			<div>
			<label>Customer Name: <input type="text" /></label>
			</div>
			<div><h1>Address</h1></div>
			<div><strong>Street:</strong> <input type="text" /></div>
			<div><strong>City:</strong> <input type="text" /></div>
			<div><strong>State:</strong> <input type="text" /></div>
			<div><strong>Zip Code:</strong> <input type="text" /></div>
			<div><strong>Phone:</strong> <input type="text" /></div>

			<div><h1>Items purchased</h1></div>
			<div><strong>Beef:</strong> <input type="text" /></div>
			<div><strong>Chicken:</strong> <input type="text" /></div>
			<div><strong>SeaFood:</strong> <input type="text" /></div>
			<div><strong>Pork:</strong> <input type="text" /></div>
			<button type='submit'>submit</button>
			</form>
			</div>
			);
	}
}



ReactDOM.render(
 <Board  name= "I'm fucking awesome" />,
document.getElementById('stuff')
);