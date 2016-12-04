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
			    <RecipeList recipes = {this.props.recipes}/>
			  <Footer />
			</div>
			);
	}
}
class Header extends React.Component{
	render(){
		return(
			<div>
			 <h1>Recipe Box</h1>
			 <ModalButton />
			</div>
			);
	}
}
class RecipeList extends React.Component{
	constructor(){
		super();
		
			this.defaultProps={recipes:[
				{
				 name: 'Chicken',
			     ingredients: ['','',''],
				 directions:""
					},
					{
				 name: 'Beef',
			     ingredients: ['','',''],
				 directions:""
					},
					{
				 name: 'Pork',
			     ingredients: ['','',''],
				 directions:""
					},
			]
			}
	}
	render(){
		return(
			<div>
			{this.props.recipes}
			</div>
			);
	}
}
class ModalButton extends React.Component{
 constructor(){
	 super();
	 this.state={show:false}
 }

  render() {
    let close = () => this.setState({ show: false});
    let open = () =>this.setState({show:true});
    return (
      <div className="modal-container" style={{height: 200}}>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={() => this.setState({ show: true})}
        >
          Launch contained modal
        </Button>

        <Modal
          show={this.state.show}
          onHide={close}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Contained Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

class Footer extends React.Component{
	render(){
		return(
			<div>
			<h3>My Stuff goes here</h3>
			</div>
			);
	}
}
ReactDOM.render(
 <MainBox />,
document.getElementById('stuff')
);