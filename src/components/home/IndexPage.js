import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as termActions from '../../actions/termAction';
import Repo from '../Common/SearchRepo';
import Searchbar from '../Shared/Searchbar';

class HomePage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			term: "elyor"
		};
		this.updateSearch = this.updateSearch.bind(this);
		this.saveSearch = this.saveSearch.bind(this);
	}

	updateSearch(e) { 

		return this.setState({ 
			term: e.target.value 
		});
	}

	saveSearch(e) {
		e.preventDefault();

		this.props.actions.loadTerm(this.state.term);
	}

	repoRow(repo, index) {
		return (
			<div key={index}>
				<Repo key={repo.id} repo={repo} />
			</div>
		);
	}

	render() {
		return (
			<div className="container">
				<Searchbar
					term={this.state.term}
					onChange={this.updateSearch}
					onSave={this.saveSearch}
				/>
				{this.props.repos.map(this.repoRow)}
			</div>
		);
	}
}

HomePage.propTypes = {
	repos: PropTypes.array.isRequired,
	term: PropTypes.string.isRequired,
	actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
	return {
		repos: state.repos,
		term: state.term
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(termActions, dispatch),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
