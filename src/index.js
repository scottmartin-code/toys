'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import AppContainer from './containers/AppContainer';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(
	thunkMiddleware
));

ReactDOM.render(
	<Provider store={store}>
		<AppContainer />
	</Provider>,
	document.getElementById('root')
);
