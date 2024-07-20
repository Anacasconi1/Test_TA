// import { Router } from "express";
const { Router } = require('express')
const getController  = require('../controllers/controller')
const middleware = require('../middleware/middle')

const router = Router ();

router.get('/recovery',middleware, getController);

module.exports = router;
