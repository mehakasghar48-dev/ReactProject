const fs = require('fs');
const path = require('path');

const moviesPath = path.join(__dirname, '../data/movies.json');

const getMoviesData = () => {
  const fileData = fs.readFileSync(moviesPath, 'utf-8');
  return JSON.parse(fileData);
};

const getAllMovies = (req, res) => {
  try {
    let movies = getMoviesData();
    const { search, genre } = req.query;

    if (search) {
      movies = movies.filter((m) =>
        m.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (genre) {
      movies = movies.filter(
        (m) => m.genre.toLowerCase() === genre.toLowerCase()
      );
    }

    return res.status(200).json({
      success: true,
      message: 'Movies fetched',
      data: movies,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
};

const getMovieById = (req, res) => {
  try {
    const movies = getMoviesData();
    const movie = movies.find((m) => String(m.id) === req.params.id);

    if (!movie) {
      return res.status(404).json({
        success: false,
        message: 'Movie not found',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Movie fetched',
      data: movie,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
};

module.exports = {
  getAllMovies,
  getMovieById,
};