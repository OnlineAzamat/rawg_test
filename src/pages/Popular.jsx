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
                                <div className="game-card-video">
                                    <div className="game-card-back-photo"></div>
                                    <video className="game-card-video__video"></video>
                                </div>
                            </div>
                            <div className="game-card-medium__info">
                                <div className="game-card-heading">
                                    <a href="/uhwvioao">
                                        The best games
                                    </a>
                                </div>
                                <div className="game-card-buttons">
                                    <button className="game-card-buttons__add" type="button">
                                        <span>
                                            <svg class="SVGInline-svg game-card-button__icon-svg game-card-button__icon_12-svg game-card-button__icon_with-offset-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12"><g  fill-rule="evenodd"><rect width="3" height="12" x="4.5" rx=".75"></rect><rect width="3" height="12" x="4.5" rx=".75" transform="rotate(-90 6 6)"></rect></g></svg>
                                        </span>
                                        <span className="card-button__inner">1,319</span>
                                    </button>
                                    <button className="game-card-buttons__wishlist">
                                        <span>
                                            <svg class="SVGInline-svg game-card-button__icon-svg game-card-button__icon_20-svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><path d="M25.5 9.846h-4.746a5.87 5.87 0 00.837-.657 3.027 3.027 0 000-4.32c-1.175-1.158-3.223-1.159-4.4 0-.649.639-2.375 3.24-2.137 4.977h-.108c.237-1.738-1.488-4.339-2.138-4.978-1.176-1.158-3.224-1.157-4.4 0a3.028 3.028 0 000 4.321c.205.203.498.429.838.657H4.5A1.487 1.487 0 003 11.314v3.672c0 .405.336.734.75.734h.75v8.812c.004.813.675 1.47 1.5 1.468h18a1.487 1.487 0 001.5-1.468V15.72h.75c.414 0 .75-.329.75-.734v-3.672a1.487 1.487 0 00-1.5-1.468zM9.472 5.904a1.61 1.61 0 011.138-.464c.427 0 .83.164 1.135.464 1.011.995 2.016 3.54 1.667 3.893 0 0-.064.048-.278.048-1.036 0-3.015-1.054-3.662-1.691a1.578 1.578 0 010-2.25zm4.778 18.628H6V15.72h8.25v8.812zm0-10.28H4.5v-2.938h9.75v2.938zm4.005-8.348c.609-.598 1.665-.597 2.273 0a1.578 1.578 0 010 2.25c-.647.637-2.626 1.692-3.662 1.692-.214 0-.278-.047-.279-.049-.348-.354.657-2.898 1.668-3.893zM24 24.532h-8.25V15.72H24v8.812zm1.5-10.28h-9.75v-2.938h9.75v2.938z"></path></svg>
                                        </span>
                                    </button>
                                    <button className="game-card-buttons__all">***</button>
                                </div>
                                <ul className="game-card-about">
                                    <li>cbaiubanvawnvoan</li>
                                    <li>nviaownvpanwvwank</li>
                                    <li>nviaownvpanwvwankncuiwbvoiabvoa</li>
                                </ul>
                                <a href="" className="show-more-button">
                                    <span>Show more like this</span>
                                </a>
                                <div className="show-more-button_game-card">vaeeeeeeeeeeeasba</div>
                            </div>
                        </div>
                        <div className="game-card-medium">
                            <div className="game-card-medium__media">
                                <div className="game-card-video">
                                    <div className="game-card-back-photo"></div>
                                    <video className="game-card-video__video"></video>
                                </div>
                            </div>
                            <div className="game-card-medium__info">
                                <div className="game-card-heading">
                                    <a href="/uhwvioao">
                                        The best games
                                    </a>
                                </div>
                                <div className="game-card-buttons">
                                    <button className="game-card-buttons__add" type="button">
                                        <span>
                                            <svg class="SVGInline-svg game-card-button__icon-svg game-card-button__icon_12-svg game-card-button__icon_with-offset-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12"><g  fill-rule="evenodd"><rect width="3" height="12" x="4.5" rx=".75"></rect><rect width="3" height="12" x="4.5" rx=".75" transform="rotate(-90 6 6)"></rect></g></svg>
                                        </span>
                                        <span className="card-button__inner">1,319</span>
                                    </button>
                                    <button className="game-card-buttons__wishlist">
                                        <span>
                                            <svg class="SVGInline-svg game-card-button__icon-svg game-card-button__icon_20-svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><path d="M25.5 9.846h-4.746a5.87 5.87 0 00.837-.657 3.027 3.027 0 000-4.32c-1.175-1.158-3.223-1.159-4.4 0-.649.639-2.375 3.24-2.137 4.977h-.108c.237-1.738-1.488-4.339-2.138-4.978-1.176-1.158-3.224-1.157-4.4 0a3.028 3.028 0 000 4.321c.205.203.498.429.838.657H4.5A1.487 1.487 0 003 11.314v3.672c0 .405.336.734.75.734h.75v8.812c.004.813.675 1.47 1.5 1.468h18a1.487 1.487 0 001.5-1.468V15.72h.75c.414 0 .75-.329.75-.734v-3.672a1.487 1.487 0 00-1.5-1.468zM9.472 5.904a1.61 1.61 0 011.138-.464c.427 0 .83.164 1.135.464 1.011.995 2.016 3.54 1.667 3.893 0 0-.064.048-.278.048-1.036 0-3.015-1.054-3.662-1.691a1.578 1.578 0 010-2.25zm4.778 18.628H6V15.72h8.25v8.812zm0-10.28H4.5v-2.938h9.75v2.938zm4.005-8.348c.609-.598 1.665-.597 2.273 0a1.578 1.578 0 010 2.25c-.647.637-2.626 1.692-3.662 1.692-.214 0-.278-.047-.279-.049-.348-.354.657-2.898 1.668-3.893zM24 24.532h-8.25V15.72H24v8.812zm1.5-10.28h-9.75v-2.938h9.75v2.938z"></path></svg>
                                        </span>
                                    </button>
                                    <button className="game-card-buttons__all">***</button>
                                </div>
                                <ul className="game-card-about">
                                    <li>cbaiubanvawnvoan</li>
                                    <li>nviaownvpanwvwank</li>
                                    <li>nviaownvpanwvwankncuiwbvoiabvoa</li>
                                </ul>
                                <a href="" className="show-more-button">
                                    <span>Show more like this</span>
                                </a>
                                <div className="show-more-button_game-card">vaeeeeeeeeeeeasba</div>
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