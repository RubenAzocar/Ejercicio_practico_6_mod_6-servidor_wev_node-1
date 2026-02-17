const fs = require('node:fs');
const moviesFile = './movies.txt';

const getMovies = (req, res) => {
    fs.readFile(moviesFile, 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Error al leer el archivo de películas' });
            return;
        }
        const movies = data.split('\n').filter(Boolean).map(line => {
            const [name, director, year] = line.split(',');
            return { name: name.trim(), director: director.trim(), year: Number.parseInt(year.trim()) };
        });
        res.json(movies);
    });
};

const addMovie = (req, res) => {
    const { name, director, year } = req.body;
    const newMovie = `\n${name}, ${director}, ${year}`;
    fs.appendFile(moviesFile, newMovie, err => {
        if (err) {
            res.status(500).json({ error: 'Error al guardar la película' });
            return;
        }
        res.status(201).json({ message: 'Película agregada exitosamente' });
    });
};

const deleteMovie = (req, res) => {
    const movieName = decodeURIComponent(req.params.name);
    fs.readFile(moviesFile, 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Error al leer el archivo de películas' });
            return;
        }
        const movies = data.split('\n').filter(Boolean).filter(line => !line.startsWith(movieName));
        fs.writeFile(moviesFile, movies.join('\n'), err => {
            if (err) {
                res.status(500).json({ error: 'Error al eliminar la película' });
                return;
            }
            res.json({ message: 'Película eliminada exitosamente' });
        });
    });
};

module.exports = { getMovies, addMovie, deleteMovie };
