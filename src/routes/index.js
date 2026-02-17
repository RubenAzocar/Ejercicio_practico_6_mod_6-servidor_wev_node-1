const express = require('express');
const moviesRoutes = require('./movies');
const seriesRoutes = require('./series');

const router = express.Router();

router.use('/movies', moviesRoutes);
router.use('/series', seriesRoutes);

module.exports = router;
