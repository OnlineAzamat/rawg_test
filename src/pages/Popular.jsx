import { useEffect } from "react"
import axios from 'axios';
import { useState } from "react";
import { Link } from "react-router-dom";
import { API_KEY } from "../context/Context";
import GameCardMedium from "../components/popular/GameCardMedium";
import Loading from "../components/Loading/Loading";

const api_key = API_KEY;

export default function Popular() {
    const [popularGames, setPopularGames] = useState([]);

    useEffect(() => {getAllGames()}, [])

    async function getAllGames() {
        await axios.get(`https://api.rawg.io/api/games?key=${api_key}&dates=2019-01-01,2019-12-31&ordering=-added`)
            .then(res => {
                console.log(res)
                setPopularGames(res.data.results)
            })
            .catch(err => console.log(err))
    }
    return(
        <div className="popular">
            <h1>Popular</h1>
            <div className="data">
                <div className="discover-columns">
                    <div className="discover-columns__column">
                        {
                            popularGames.length > 0 ?
                            popularGames.map((item, index) => {
                                return(
                                <GameCardMedium 
                                gameName={item.name}
                                added={
                                    item.added > 999 ? 
                                    Math.floor(item.added / 1000) + "," + item.added % 1000 : 
                                    item.added
                                }
                                imgSrc={item.background_image} 
                                date={item.released} 
                                genres={
                                    item.genres[0].name
                                }
                                chart={item.rating_top}
                                key={index + item.added} />
                                )
                            }) : <Loading />
                        }
                    </div>
                    {/* Screenshotlar, video, teglar, platforma qosiwim kerek */}
                    <div className="discover-columns__column">
                        {
                            popularGames.map((item, index) => {
                                return(
                                <GameCardMedium 
                                gameName={item.name}
                                added={
                                    item.added > 999 ? 
                                    Math.floor(item.added / 1000) + "," + item.added % 1000 : 
                                    item.added
                                }
                                imgSrc={item.background_image} 
                                date={item.released} 
                                genres={
                                    item.genres[0].name
                                }
                                chart={item.rating_top}
                                key={index + item.added} />
                                )
                            })
                        }
                    </div>
                    <div className="discover-columns__column">
                        {
                            popularGames.map((item, index) => {
                                return(
                                <GameCardMedium 
                                gameName={item.name}
                                added={
                                    item.added > 999 ? 
                                    Math.floor(item.added / 1000) + "," + item.added % 1000 : 
                                    item.added
                                }
                                imgSrc={item.background_image} 
                                date={item.released} 
                                genres={
                                    item.genres[0].name
                                }
                                chart={item.rating_top}
                                key={index + item.added} />
                                )
                            })
                        }
                    </div>
                    <div className="discover-columns__column">
                        {
                            popularGames.map((item, index) => {
                                return(
                                <GameCardMedium 
                                gameName={item.name}
                                added={
                                    item.added > 999 ? 
                                    Math.floor(item.added / 1000) + "," + item.added % 1000 : 
                                    item.added
                                }
                                imgSrc={item.background_image} 
                                date={item.released} 
                                genres={
                                    item.genres[0].name
                                }
                                chart={item.rating_top}
                                key={index + item.added} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}