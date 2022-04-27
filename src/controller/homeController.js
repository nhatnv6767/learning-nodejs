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
    return res.redirect('/')
}

let deleteUser = async (req, res) => {
    let userId = req.body.userId;
    await pool.execute('delete from users where id = ?', [userId])
    return res.redirect('/')
}

let getEditUser = async (req, res) => {
    let id = req.params.id;
    // biến user là 1 array có 2 phần tử,
    // phần tử 1 là data chúng ta lấy về, phần tử 2 là fields
    let [user] = await pool.execute('select * from users where id = ?', [id])
    // x <- y | key and value
    // key là cái ta muốn access bên view, còn giá trị của nó là user - biến 
    // đang sử dụng trong controller
    return res.render('update.ejs', { dataUser: user[0] })
}

module.exports = {
    getHomePage, getDetailPage, createNewUser, deleteUser, getEditUser
}