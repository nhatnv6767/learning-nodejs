import express from 'express';

const configViewEngine = (app) => {
    // nơi mà muốn cho thế giới bên ngoài có thể thấy được
    app.use(express.static('public'))
    app.set("view engine", "ejs")
    app.set("views", "./src/views")
}

export default configViewEngine;