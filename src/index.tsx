import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './_store';
import { Provider } from 'react-redux';
import Application from './app/list';
import FileInput from './app/FileInput';
import DownloadButton from './app/DownloadButton';

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<Application />
			<FileInput />
			<DownloadButton />
		</React.StrictMode>
	</Provider>,
	document.getElementById('root')
);
