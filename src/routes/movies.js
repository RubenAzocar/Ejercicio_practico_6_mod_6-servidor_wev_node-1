const express = require('express');
const { getMovies, addMovie, deleteMovie } = require('../controllers/moviesController');

const router = express.Router();

router.get('/', getMovies);
router.post('/', addMovie);
router.delete('/:name', deleteMovie);

module.exports = router;
