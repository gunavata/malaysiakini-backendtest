const express = require('express');

const controllers = require("../controllers/controllers.js");

const router = express.Router();

router.get('/api', controllers.getApi); // return JSON mock data

router.post('/api', controllers.postApi); // respond with JSON

router.get('/date', controllers.getDate); // return servers current date/time

router.get('/hash', controllers.getHash); // query a plainpassword which returns hashed value of plain password

router.get('/', controllers.getDefault); /// default

module.exports = router;