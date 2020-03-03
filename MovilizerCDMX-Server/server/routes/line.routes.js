const express = require('express');
const router = express.Router();

const line = require('../controllers/line.controller');

router.get('/lines', line.getLines);
router.post('/new', line.addLine);
router.get('/line/:idLine', line.getStations)
router.post('/stations/:idLine', line.addStation);


module.exports = router;
