import React from 'react';
import PropTypes from 'prop-types';

const App = (props) => {
	return (
		<div>
			<h1>Vintage Band Name Generator</h1>
			<div className="advice">Click label for another</div>
			<div className="label" onClick={props.makeBandName}>
				<div className="result">{props.band}</div>
			</div>
		</div>
	);
};

App.propTypes = {
	band: PropTypes.string,
	makeBandName: PropTypes.func,
};

export default App;
