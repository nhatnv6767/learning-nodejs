import connection from '../configs/connectDB'

let getHomePage = (req, res) => {
    // logic
    return res.render('test/index.ejs')
}

module.exports = {
    getHomePage
}