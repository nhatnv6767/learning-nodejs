import pool from '../configs/connectDB'

let getHomePage = async (req, res) => {


    const [rows, fields] = await pool.execute('SELECT * FROM users');
    return res.render('index.ejs', { dataUser: rows });

}

let getDetailPage = async (req, res) => {
    let id = req.params.id;
    let user = await pool.execute('select from users where id = 1')

    console.log("Check req params: ", user)
    return res.send("Hello Detail Page")
}

module.exports = {
    getHomePage, getDetailPage
}