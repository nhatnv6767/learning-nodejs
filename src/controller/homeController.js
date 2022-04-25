import pool from '../configs/connectDB'

let getHomePage = async (req, res) => {
    // logic

    // simple query
    let data = [];
    // connection.query(
    //     'SELECT * FROM `users` ',
    //     function (err, results, fields) {

    //         results.map((row) => {
    //             data.push({
    //                 id: row.id,
    //                 email: row.email,
    //                 address: row.address,
    //                 firstName: row.firstName,
    //                 lastName: row.lastName
    //             })
    //         })
    //         // return res.render('index.ejs', { dataUser: data });
    //     }
    // );


    const [rows, fields] = await pool.execute('SELECT * FROM users');
    return res.render('index.ejs', { dataUser: rows });


}

module.exports = {
    getHomePage
}