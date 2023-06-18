import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"


function Details () {
//getting genre and details reducers from index store
    const history = useHistory();
    const dispatch = useDispatch();
    detailsReducer = useSelector(store => store.details);
    genresReducer = useSelector(store => store.genres);

    //
    useEffect(() => {
        dispatch({type: 'GET_DETAILS', payload: detailsReducer.id})
    }, [])

    //this button enable user to go back to movie list
   const handleClick = () => {
    history.pushState('/')
   }

   //bellow we will be rendering movie genres and description to dom
    return (
        <>
        <button onClick={handleClick}>Movie list</button>
        <div>
            {genresReducer.map((genre) => (
                <p>
                    {genre.name}
                </p>

            ))}
            <h2>{detailsReducer.title}</h2>
            <img src={detailsReducer.poster}></img>
            <h1>{detailsReducer.description}</h1>
        </div>
        </>
    )

}

export default Details