import { connect } from 'react-redux';

import { makeBandName } from '../actions/';
import App from '../components/App';

const getBandName = state => state.band;

const mapStateToProps = state => ({
	band: getBandName(state),
});

const mapDispatchToProps = dispatch => ({
	makeBandName: () => dispatch(makeBandName()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
