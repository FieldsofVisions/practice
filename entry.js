import React from 'react';
import ReactDOM from 'react-dom';
require('!style!css!sass!./style.scss');

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
}

class Board extends React.Component{
	constructor(){
		super()
		this.state={comments: [
		'andre', 
		'is',
		'awesome'
		]}
	}
	render(){
		return(
		<div className="bigBoard">
		{
			this.state.comments.map(function(item, i){
				return(<CoolStuff key={i}>{item}</CoolStuff>)
			})
			
		}
       </div>
		);
	}
}

ReactDOM.render(
 <Board />,
document.getElementById('stuff')
);