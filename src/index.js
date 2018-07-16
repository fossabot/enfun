import path from 'path';
import app from './app';
app({
	port: process.env.PORT || 4999,
	config: {
		functionsDir: path.join(__dirname, 'functions'),
		endpoint: '/functions'
	}
});