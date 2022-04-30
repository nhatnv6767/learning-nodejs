import pool from '../configs/connectDB'

let getAllUsers = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * from users')
    return res.status(200).json({
        message: 'ok',
        data: rows,
    })
}

let createNewUser = async (req, res) => {
    return res.status(200).json({
        message: 'ok',

    })
}

module.exports = {
    getAllUsers, createNewUser
}