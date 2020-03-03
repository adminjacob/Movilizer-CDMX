const express = require('express');
const router = express.Router();

const station = require('../controllers/station.controller');

router.post('/info', station.addInformation);

module.exports = router;
