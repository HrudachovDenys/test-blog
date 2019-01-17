const bodyParser = require('body-parser');
const config = require('../config');

class GlobalMiddleware {
    static async handle(app) { 
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(function (req, res, next) {
            res.setHeader('Access-Control-Allow-Origin', config.get('client-url'));
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
            res.setHeader('Access-Control-Allow-Credentials', true);
            next();
        });
    }
}

module.exports = GlobalMiddleware;