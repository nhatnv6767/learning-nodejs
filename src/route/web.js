import express from 'express';

let router = express.Router();
const initWebRoute = (app) => {
    router.get('/', (req, res) => {
        res.render('test/index.ejs')
    })

    router.get('/about', (req, res) => {
        res.send(`I'm rich!`)
    })

    return app.use('/', router)
}

module.exports = initWebRoute;