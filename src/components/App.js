import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
 

class App extends Component {
	render() {
		return (
			<div className="row">
				<div className="col s2">
				</div>
				<div className="col s8">
					{this.props.children}
				</div>
				<div className="col s2">
				</div>
			</div> 
		);
	}
}

App.propTypes = {
	children: PropTypes.object.isRequired
};

export default App;
