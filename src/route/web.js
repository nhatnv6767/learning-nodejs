import express from 'express';

let router = express.Router();
const initWebRoute = (app) => {
    router.get('/', (req, res) => {
        res.render('test/index.ejs')
    })

    return app.use('/', router)
}

module.exports = initWebRoute;