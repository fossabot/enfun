import express from 'express';
import consola from 'consola';
import loader from './modules/loader';
import dispatcher from './modules/dispatcher';

export default ({port, config}) => {
	const app = express();
	const store = {};
	loader.init({app, config, store});
	dispatcher.init({app, config, store});
	app.listen(port, () => {
		consola.ready(`Listening on port: ${port}`);
	});
};