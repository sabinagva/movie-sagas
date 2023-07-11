import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./MovieList.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);
  //we passed the movie parameter so button knows which
  //movie we are clicking on
  const handleClick = (movie) => {
    dispatch({ type: "SET_DETAILS", payload: movie });

    history.push("/details");
  };

  return (
    <main>
      <h1>MovieList</h1>
      <section className="movies">
        {movies.map((movie) => {
          return (
            <div key={movie.id} className="movieItem">
              <h3>{movie.title}</h3>

              <img src={movie.poster} alt={movie.title} />
              <button onClick={() => handleClick(movie)}>details</button>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default MovieList;
