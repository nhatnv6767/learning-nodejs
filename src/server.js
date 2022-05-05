import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRoute from './route/web'
import initAPIRoute from './route/api'
// import connect from './configs/connectDB'

require('dotenv').config()
var morgan = require('morgan')

const app = express()
const port = process.env.PORT || 8087;

app.use((req, res, next) => {
    console.log('>>>>> RUN INTO MY MIDDLEWARE: ', req.method)
    console.log(req.header)
    // go to => continue
    next()
})

app.use(morgan('combined'))
// hỗ trợ gửi data từ client lên server
// để có thể lấy data dễ dàng
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setup view engine
configViewEngine(app)

// init web route
initWebRoute(app)

initAPIRoute(app)

// handle 404 notFound
app.use((req, res) => {
    return res.render('404.ejs')
})

app.listen(port, () => {
    console.log(`listening at http://localhost: ${port}`)
})

