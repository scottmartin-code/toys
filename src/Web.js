import React from 'react';
const bandName = require('./BandName.js');

class Web extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			bandName: bandName(),
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick () {
		this.setState({ bandName: bandName() });
	}

	render() {
		return (
			<div>
				<h1>Vintage Band Name Generator</h1>
				<div id="advice">Click label for another</div>
				<div id="label" onClick={this.handleClick}>
					<div id="result">{this.state.bandName}</div>
				</div>
			</div>
		);
	}
}

export default Web;
