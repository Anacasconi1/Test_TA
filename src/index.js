const express = require('express')
const {router} = require('./routes/route.js')
// import express from "express";
// import {router} from './routes/route.js'
require("dotenv").config();

const PORT = process.env.APP_PORT;
const server = express();
server.use((req, res, next)=>{
    console.log("todo va bien por aqui")
    next()
})
server.use(router)
server.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`);
} );

