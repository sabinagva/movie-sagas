const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:id', (req, res) => {
  const movieId = req.params.id;
  const query = `
    SELECT m.title, m.description, m.poster, g.name FROM movies AS m
    JOIN movies_genres AS mg ON m.id = mg.movie_id
    JOIN genres AS g ON mg.genre_id = g.id
    WHERE m.id = $1;
  `;

  pool
    .query(query, [movieId])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('Error getting genres from the database:', error);
      res.status(500).send(error.message);
    });
});

module.exports = router;