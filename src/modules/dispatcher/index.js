import express from "express";
import consola from 'consola';

const mod = {
	init({app, store, config}) {
		this.bind({app, store, config});
	},
    bind({app, store, config}) {
        const router = express.Router();
        for(let [functionName, functionHandler] of Object.entries(store.functions)) {
        	router.all(functionName, (req, res) => {
				functionHandler.default(req, res);
			});
        	consola.info(`Successfully loaded: ${functionName}. It is available on: ${config.endpoint}/${functionName}`);
		}
        app.use(config.endpoint, router);
    }
};

export default mod;