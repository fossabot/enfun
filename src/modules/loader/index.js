import fs from 'fs';
import path from 'path';

const mod = {
	init({config, store}) {
		this.load({functionsDir: config.functionsDir, store});
	},
	load({functionsDir, store}) {
		store.functions = {};
		let functionFiles = fs.readdirSync(path.resolve(functionsDir));
		for (let functionFile of functionFiles) {
			store.functions[functionFile.replace('.js', '').replace( /([a-z])([A-Z])/g, '$1-$2' ).toLowerCase()] = require(path.join(functionsDir, functionFile));
		}
	}
};

export default mod;