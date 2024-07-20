const express = require('express')
const router = require('./routes/route')
const cors = require('cors')
require("dotenv").config();

const PORT = process.env.APP_PORT;
const app = express();
app.use(cors())
app.use(express.json())
app.use(router)
app.listen(PORT || 3000, () => {
    console.log(`Escuchando en el puerto ${PORT}`);
} );

