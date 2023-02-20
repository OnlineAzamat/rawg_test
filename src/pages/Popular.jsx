import { useEffect } from "react"
import axios from 'axios';
import { useState } from "react";
import { Link } from "react-router-dom";
import { API_KEY } from "../context/Context";

const api_key = API_KEY;

export default function Popular() {
    // const [popularGames, setPopularGames] = useState([]);

    // useEffect(() => {getAllGames()}, [])

    // async function getAllGames() {
    //     await axios.get(`https://api.rawg.io/api/games?key=${api_key}&dates=2019-01-01,2019-12-31&ordering=-added`)
    //         .then(res => {
    //             console.log(res)
    //             setPopularGames(res.data.results)
    //         })
    //         .catch(err => console.log(err))
    // }
    return(
        <div className="popular">
            <h1>Popular</h1>
            <div className="data">
                <div className="discover-columns">
                    <div className="discover-columns__column">
                        <div className="game-card-medium">
                            <div className="game-card-medium__media">
                                vneiooieovnpqovnpanvian
                            </div>
                            <div className="game-card-medium__info">
                                avmioenvpoenionaiooae
                            </div>
                        </div>
                    </div>
                    <div className="discover-columns__column"></div>
                    <div className="discover-columns__column"></div>
                    <div className="discover-columns__column"></div>
                </div>
            </div>
        </div>
    )
}