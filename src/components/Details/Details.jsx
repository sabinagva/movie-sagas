import { useSelector } from "react-redux"

function Details () {

    detailsReducer = useSelector(store => store.details)
    genresReducer = useSelector(store => store.genres)

    return (
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
    )

}

export default Details