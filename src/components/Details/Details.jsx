import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import './Details.css'

function Details () {
//getting genre and details reducers from index store
    const history = useHistory();
    const dispatch = useDispatch();
    const detailsReducer = useSelector(store => store.details);
    console.log('detailsReducer is', detailsReducer)
    const genresReducer = useSelector(store => store.genres);

    //
    useEffect(() => {
        dispatch({type: 'GET_GENRES', payload: detailsReducer.id})
        console.log('detailReducer.id is', detailsReducer.id)
    }, [])

   // this button enable user to go back to movie list
//    const handleRefresh = (event) => {
//     event.preventDefault();
//     history.push('/')
//    }

   //bellow we will be rendering movie genres and description to dom
    return (
        <>
        {/* <button onClick={handleClick}>Movie list</button> */}
        <div className="card">
            <b>Genre:</b>
            {genresReducer.map((genre) => (
                <p>
                    {genre.name}
                </p>

            ))}
            <h2>{detailsReducer.title}</h2>
            <img src={detailsReducer.poster}></img>
            <h3><b>Description:</b>{detailsReducer.description}</h3>
        </div>
        </>
    )

}

export default Details