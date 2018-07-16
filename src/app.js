import express from 'express';
import consola from 'consola';
import fs from 'fs';
import path from 'path';

export default ({ port }) => {
    const app = express();
    const moduleNames = fs.readdirSync(path.join(__dirname, 'modules'));
    for(let moduleName of moduleNames) {
        const module = require(path.join(__dirname, 'modules', moduleName));
        module.routes(app);
    }
    app.listen(port, () => {
       consola.ready(`Listening on port: ${port}`);
    });
    return app;
}