import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRoute from './route/web'

require('dotenv').config()

const app = express()
const port = process.env.PORT || 8081;

// setup view engine
configViewEngine(app)

// init web route
initWebRoute(app)

app.listen(port, () => {
    console.log(`listening at http://localhost: ${port}`)
})

