import React from 'react';
import ReactDOM from 'react-dom';
require('!style!css!sass!./style.scss');
var Button = require('react-bootstrap').Button
var Modal = require('react-bootstrap').Modal

<<<<<<< HEAD
class MainBox extends React.Component{
		render(){
			return(
				<div>
			<Header />
			</div>
			);
		}
||||||| merged common ancestors
class CoolStuff extends React.Component{
	constructor(){
		super()
		this.state={editing:false};
		
	}
	edit(){
		this.setState({editing:true});
	}
	remove(){
		comments.slice(1,i);
	}
	save(){
		this.setState({editing: false})
		var val = this.refs.newText.value;
	}
		
	render(){
		if(this.state.editing){
			
			return(<div  className="board">
		      <textarea ref= "newText" defaultValue={this.props.children}></textarea>
           <button className="btn-save" onClick={this.save.bind(this)}>SAVE</button>		   
		</div>
		);
		
		}else{
			
			return(<div className="board">
			   <h2>{this.props.children}</h2>
                 <button onClick={this.edit.bind(this)} className="btn-primary">EDIT</button>
	           <button onClick={this.remove.bind(this)} className="btn-warn">REMOVE</button>
			</div>	
		);	
		}
		  
	}
=======
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
>>>>>>> master
}

<<<<<<< HEAD



class Header extends React.Component{
||||||| merged common ancestors
class Board extends React.Component{
	constructor(){
		super()
		this.state={comments: [
		'andre', 
		'is',
		'awesome'
		]}
	}
=======
class DataEntry extends React.Component{
	handleSubmit(){
alert("hey Now");
	}
>>>>>>> master
	render(){
		return(
<<<<<<< HEAD
			<div>
			 <h1>Meat Master 2000</h1>
		  </div>
		);
||||||| merged common ancestors
		<div className="bigBoard">
		{
			this.state.comments.map(function(item, i){
				return(<CoolStuff key={i}>{item}</CoolStuff>)
			})
			
		}
       </div>
		);
=======
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
>>>>>>> master
	}
}



ReactDOM.render(
<<<<<<< HEAD
 <MainBox />,
||||||| merged common ancestors
 <Board />,
=======
 <Board  name= "I'm fucking awesome" />,
>>>>>>> master
document.getElementById('stuff')
);