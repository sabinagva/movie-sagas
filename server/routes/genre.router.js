const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

//Getting movie genres 
router.get('/', (req, res) => {
  // Add query to get all genres
  const query = `
  SELECT m.title, m.description, m.poster, g.name
FROM movies AS m
JOIN movies_genres AS mg ON m.id = mg.movie_id
JOIN genres AS g ON mg.genre_id = g.id
WHERE m.id = $1;
  `;
  const newGenre = req.params.id
  pool.query(query, [newGenre])
  .then(result => {
    res.send(result.rows);
  })
  .catch(error=> {
    console.log('error getting genres from databse', error)
    res.sendStatus(500)

  })
});

module.exports = router;