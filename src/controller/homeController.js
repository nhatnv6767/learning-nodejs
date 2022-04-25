import pool from '../configs/connectDB'

let getHomePage = async (req, res) => {


    const [rows, fields] = await pool.execute('SELECT * FROM users');
    return res.render('index.ejs', { dataUser: rows });

}

let getDetailPage = (req, res) => {
    console.log("Check req params: ", req.params)
    return res.send("Hello Detail Page")
}

module.exports = {
    getHomePage, getDetailPage
}