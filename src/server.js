import express from 'express';
import configViewEngine from './configs/viewEngine';
require('dotenv').config()

const app = express()
const port = process.env.PORT || 8081;

configViewEngine(app)
app.get('/', (req, res) => {
    res.render('test/index.ejs')
})

app.listen(port, () => {
    console.log(`listening at http://localhost: ${port}`)
})