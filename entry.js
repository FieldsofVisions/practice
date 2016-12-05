import React from 'react';
import ReactDOM from 'react-dom';
require('!style!css!sass!./style.scss');

class CoolStuff extends React.Component{
		
	render(){
		let recipeItems = this.props.recipes.map((recipe, i)=>{
			return <li key={i}>{recipe}</li>
		});
		return(<div>{recipeItems}</div>)
		  
	}
}

class Board extends React.Component{
	
	render(){
		let name = "I'm Fucking awesome!!!"
		let recipes = ["chicken","pork","Steak","Fish"]
		return(
		<div >
		Hello World! {name}
		<CoolStuff recipes={recipes} />
       </div>
		);
	}
}

ReactDOM.render(
 <Board  name= "I'm fucking awesome" />,
document.getElementById('stuff')
);