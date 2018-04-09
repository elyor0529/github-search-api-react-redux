import React from 'react';
import PropTypes from 'prop-types';

const Searchbar = ({ term, onChange, onSave }) => {
	return (
		<div className="container">
			<form onSubmit={onSave}>
				<div className="input-field">
					<input id="icon_prefix" type="text" className="validate" placeholder="Search term ..." value={term} onChange={onChange} />
					<i className="fa fa-search material-icons prefix" aria-hidden="true" onClick={onSave}/>		
				</div>
			</form>
		</div>
	);
};

Searchbar.propTypes = {
	term: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	onSave: PropTypes.func.isRequired
};

export default Searchbar;
