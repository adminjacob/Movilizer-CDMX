const express = require('express');
const router = express.Router();

const python = require('../controllers/python.controller');

router.get('/station/:id', python.usePython);

module.exports = router;
