let getAllUsers = (req, res) => {
    return res.status(200).json({
        message: 'ok'
    })
}

module.exports = {
    getAllUsers
}