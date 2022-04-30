import pool from '../configs/connectDB'

let getAllUsers = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * from users')
    return res.status(200).json({
        message: 'get all user ok',
        data: rows,
    })
}

let createNewUser = async (req, res) => {
    let { firstName, lastName, email, address } = req.body;

    if (!firstName || !lastName || !email || !address) {
        return res.status(200).json({
            message: 'missing required params'
        })
    }

    await pool.execute('INSERT INTO users(firstName, lastName, email, address) VALUES (?, ?, ?, ?)',
        [firstName, lastName, email, address])

    return res.status(200).json({
        message: 'create user ok',

    })
}

let updateUser = async (req, res) => {

    // let { firstName, lastName, email, address, id } = req.body;
    // if (!firstName || !lastName || !email || !address) {
    //     return res.status(200).json({
    //         message: 'missing required params'
    //     })
    // }
    // await pool.execute('UPDATE users SET firstName = ?, lastName = ?, email = ?, address = ? where id = ?',
    //     [firstName, lastName, email, address, id])

    return res.status(200).json({
        message: 'update user ok',
    })
}

let deleteUser = async (req, res) => {
    return res.status(200).json({
        message: 'delete user ok',
    })
}

module.exports = {
    getAllUsers, createNewUser, updateUser, deleteUser
}