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

let createNewUser = async (req, res) => {
    console.log("check request: ", req.body);
    let { firstName, lastName, email, address } = req.body;
    await pool.execute('insert into users(firstName, lastName, email, address) values (?, ?, ?, ?)',
        [firstName, lastName, email, address])
    return res.send('call post create new user')
}

module.exports = {
    getHomePage, getDetailPage, createNewUser
}