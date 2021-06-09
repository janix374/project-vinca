import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style/main.scss';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

ReactDOM.render(
	// <React.StrictMode>
	<ReduxProvider store={store}>
		<App />
	</ReduxProvider>,
	// </React.StrictMode>,
	document.getElementById('root')
);
