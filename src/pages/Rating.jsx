import { useEffect } from "react"
import axios from 'axios';
import { useState } from "react";

const api_key = '4f6b1f26c5fe436a829e8809aeb8a737';

export default function Rating() {
    const [ratingGames, setRatingGames] = useState([]);

    useEffect(() => {getAllGames()}, [])

    async function getAllGames() {
        await axios.get(`https://api.rawg.io/api/games?key=${api_key}&dates=2001-01-01,2001-12-31&ordering=-rating`)
            .then(res => {
                console.log(res)
                setRatingGames(res.data.results)
            })
            .catch(err => console.log(err))
    }
    return(
        <div className="popular">
            <h1>Rating APP</h1>

            <br />

            <div className="data">
                {
                    ratingGames.map(result => {
                        return(
                            <div className="item" key={result.id}>
                                <div className="name">
                                    {result.name}
                                </div>
                                <img src={result.background_image} alt="aa" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}