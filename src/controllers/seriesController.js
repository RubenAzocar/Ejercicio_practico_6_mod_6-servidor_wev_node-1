const fs = require('node:fs'); // Updated import
const seriesFile = './series.txt';

const getSeries = (req, res) => {
    fs.readFile(seriesFile, 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Error al leer el archivo de series' });
            return;
        }
        const series = data.split('\n').filter(Boolean).map(line => {
            const [name, year, seasons] = line.split(',');
            return { name: name.trim(), year: Number.parseInt(year.trim()), seasons: Number.parseInt(seasons.trim()) };
        });
        res.json(series);
    });
};

const addSeries = (req, res) => {
    const { name, year, seasons } = req.body;
    const newSeries = `\n${name}, ${year}, ${seasons}`;
    fs.appendFile(seriesFile, newSeries, err => {
        if (err) {
            res.status(500).json({ error: 'Error al guardar la serie' });
            return;
        }
        res.status(201).json({ message: 'Serie agregada exitosamente' });
    });
};

const deleteSeries = (req, res) => {
    const seriesName = decodeURIComponent(req.params.name);
    fs.readFile(seriesFile, 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Error al leer el archivo de series' });
            return;
        }
        const series = data.split('\n').filter(Boolean).filter(line => !line.startsWith(seriesName));
        fs.writeFile(seriesFile, series.join('\n'), err => {
            if (err) {
                res.status(500).json({ error: 'Error al eliminar la serie' });
                return;
            }
            res.json({ message: 'Serie eliminada exitosamente' });
        });
    });
};

module.exports = { getSeries, addSeries, deleteSeries };
