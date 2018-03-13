import React from 'react';
const bandName = require('./BandName.js').bandName;

class Web extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			bandName: bandName()
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
				<div id="label">
					<div id="result">{this.state.bandName}</div>
				</div>
				<button id="generate-button" onClick={this.handleClick}>Play me another!</button>
			</div>
		);
	}
}

export default Web;