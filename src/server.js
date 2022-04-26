import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRoute from './route/web'
// import connect from './configs/connectDB'

require('dotenv').config()

const app = express()
const port = process.env.PORT || 8087;

// hỗ trợ gửi data từ client lên server
// để có thể lấy data dễ dàng
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setup view engine
configViewEngine(app)

// init web route
initWebRoute(app)

app.listen(port, () => {
    console.log(`listening at http://localhost: ${port}`)
})

