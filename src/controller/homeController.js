import pool from '../configs/connectDB'

let getHomePage = async (req, res) => {


    const [rows, fields] = await pool.execute('SELECT * FROM users');
    return res.render('index.ejs', { dataUser: rows });

}

let getDetailPage = async (req, res) => {
    let userId = req.params.id;
    // [] - giá trị tương ứng truyền vào dấu ?
    let [user] = await pool.execute(`select * from users where id = ?`, [userId])
    return res.send(JSON.stringify(user))
}

module.exports = {
    getHomePage, getDetailPage
}