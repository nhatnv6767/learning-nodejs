import connection from '../configs/connectDB'

let getHomePage = (req, res) => {
    // logic

    // simple query
    let data = [];
    connection.query(
        'SELECT * FROM `users` ',
        function (err, results, fields) {
            console.log('>>>> Check mysql')
            // console.log(results); // results contains rows returned by server

            data = results.map((row) => {
                data.push({
                    id: row.id,
                    email: row.email,
                    address: row.address,
                    firstName: row.firstName,
                    lastName: row.lastName
                })
            })

        }
    );

    console.log('>>>> Check data:', data);
    return res.render('test/index.ejs', { dataUser: JSON.stringify(data) });
}

module.exports = {
    getHomePage
}