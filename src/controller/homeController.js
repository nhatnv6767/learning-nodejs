import pool from '../configs/connectDB'
import multer from 'multer'


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

let postUpdateUser = async (req, res) => {
    let { firstName, lastName, email, address, id } = req.body

    await pool.execute('update users set firstName = ?, lastName = ?, email = ?, address = ? where id = ?', [firstName, lastName, email, address, id])
    return res.redirect('/')
}

let getUploadFilePage = async (req, res) => {
    return res.render('uploadFile.ejs', {})
}


let handleUploadFile = async (req, res) => {
    // 'profile_pic' is the name of our file input field in the HTML form
    // profile_pic mapping with uploadFile.ejs


    if (req.fileValidationError) {
        return res.send(req.fileValidationError);
    }
    else if (!req.file) {
        return res.send('Please select an image to upload');
    }

    // Display uploaded image for user validation
    res.send(`You have uploaded this image: <hr/><img src="/image/${req.file.filename}" width="500"><hr /><a href="/upload">Upload another image</a>`);
}

let handleUploadMultipleFiles = async (req, res) => {

    if (req.fileValidationError) {
        return res.send(req.fileValidationError);
    }
    else if (!req.files) {
        return res.send('Please select an image to upload');
    }

    let result = "You have uploaded these images: <hr />";
    const files = req.files;
    let index, len;

    // Loop through all the uploaded images and display them on frontend
    for (index = 0, len = files.length; index < len; ++index) {
        result += `<img src="/image/${files[index].filename}" width="300" style="margin-right: 20px;">`;
    }
    result += '<hr/><a href="/upload">Upload more images</a>';
    res.send(result);
}


module.exports = {
    getHomePage, getDetailPage, createNewUser, deleteUser, getEditUser, postUpdateUser,
    getUploadFilePage, handleUploadFile, handleUploadMultipleFiles
}