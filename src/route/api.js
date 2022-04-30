import express from 'express';
import APIController from '../controller/APIController'

let router = express.Router();
const initAPIRoute = (app) => {
    router.get('/users', APIController.getAllUsers) // Read
    router.post('/create-user', APIController.createNewUser) // Create 
    router.put('/update-user', APIController.updateUser) // Update
    router.delete('/delete-user', APIController.deleteUser) // Delete

    return app.use('/api/v1/', router)
}

export default initAPIRoute;
