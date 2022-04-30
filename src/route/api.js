import express from 'express';

let router = express.Router();
const initAPIRoute = (app) => {
    router.get('/', homeController.getHomePage)

    return app.use('/', router)
}

export default initAPIRoute;
// module.exports = initWebRoute;