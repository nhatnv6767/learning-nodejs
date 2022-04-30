import express from 'express';
import APIController from '../controller/APIController'

let router = express.Router();
const initAPIRoute = (app) => {
    router.get('/users', APIController.getAllUsers)
    router.post('/create-user', APIController.createNewUser)

    return app.use('/api/v1/', router)
}

export default initAPIRoute;
