const express = require('express');
const { getSeries, addSeries, deleteSeries } = require('../controllers/seriesController');

const router = express.Router();

router.get('/', getSeries);
router.post('/', addSeries);
router.delete('/:name', deleteSeries);

module.exports = router;
