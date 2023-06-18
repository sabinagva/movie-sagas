import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    history = useHistory()

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

   const handleClick = () => {
    dispatch({type: 'SET_DETAILS', payload: movies})
    history.push('/details')
   }

    return (
        <main>
            <h1>MovieList</h1>
            <button onClick={handleClick}>details</button>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;