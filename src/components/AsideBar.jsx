import { Link } from "react-router-dom";

export default function AsideBar() {
    return(
        <div className="asidebar">
            <h1>Home</h1>

            <div className="discover-sidebar__menu">
                <span className="discover-sidebar__title">
                    <a href="/username">
                        <span className="discover-sidebar__username">Home</span>
                        <div className="avatar"></div>
                    </a>
                </span>
                <ul className="discover-sidebar__list">
                    <li className="discover-sidebar__item">
                        <a href="/discover/wishlist">
                            <span className="discover-sidebar__icon">
                                <i class="bi bi-trophy-fill"></i>
                            </span>
                            <span className="discover-sidebar__label">Best of the year</span>
                        </a>
                    </li>
                    <li>
                        <a href="/discover/popular-in-2022">
                            <span className="discover-sidebar__icon">
                                <i class="bi bi-bar-chart-fill"></i>
                            </span>
                            <span className="discover-sidebar__label">Popular in 2022</span>
                        </a>
                    </li>
                    <li>
                        <a href="/discover/all-time-top">
                            <span className="discover-sidebar__icon">
                                <i class="bi bi-arrow-up-circle-fill"></i>
                            </span>
                            <span className="discover-sidebar__label">All time top 250</span>
                        </a>
                    </li>
                </ul>

                <span className="discover-sidebar__title">
                    <span className="discover-sidebar__username">New Releases</span>
                    <div className="avatar"></div>
                </span>
                <ul className="discover-sidebar__list">
                    <li className="discover-sidebar__item">
                        <a href="/discover/wishlist">
                            <span className="discover-sidebar__icon">
                                <i class="bi bi-star-fill"></i>
                            </span>
                            <span className="discover-sidebar__label">Last 30 days</span>
                        </a>
                    </li>
                    <li>
                        <a href="/discover/popular-in-2022">
                            <span className="discover-sidebar__icon">
                                <i class="bi bi-fire"></i>
                            </span>
                            <span className="discover-sidebar__label">This week</span>
                        </a>
                    </li>
                    <li>
                        <a href="/discover/all-time-top">
                            <span className="discover-sidebar__icon">
                                <svg class="SVGInline-svg discover-sidebar__icon-svg discover-sidebar__icon_next-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16"><path d="M19.788.212a.712.712 0 00-.503-.197h-1.428a.712.712 0 00-.502.197.619.619 0 00-.212.468v7.05a.669.669 0 00-.146-.198L9.073.15c-.141-.132-.26-.177-.357-.135-.097.042-.145.152-.145.333V7.73a.668.668 0 00-.145-.198L.502.15C.361.018.242-.027.145.015.048.057 0 .167 0 .348v15.304c0 .18.049.291.145.333.097.042.216-.004.357-.135l7.924-7.382a.906.906 0 00.145-.198v7.382c0 .18.049.291.145.333.097.041.216-.004.357-.136l7.924-7.381a.909.909 0 00.146-.198v7.05c0 .18.07.335.212.467a.712.712 0 00.502.197h1.429c.193 0 .36-.065.502-.197a.62.62 0 00.212-.468V.68a.62.62 0 00-.212-.468z"></path></svg>
                            </span>
                            <span className="discover-sidebar__label">Next week</span>
                        </a>
                    </li>
                    <li>
                        <a href="/discover/popular-in-2022">
                            <span className="discover-sidebar__icon">
                                <svg class="SVGInline-svg discover-sidebar__icon-svg discover-sidebar__icon_calendar-svg" width="19" height="14" viewBox="0 0 19 14" xmlns="http://www.w3.org/2000/svg"><path d="M3.736 8.017V5.688h1.65c1.145 0 1.9-.635 1.9-1.601 0-.967-.736-1.565-1.929-1.565-1.174 0-1.966.69-2.003 1.73H.252C.298 1.657 2.31 0 5.432 0c2.982 0 5.031 1.482 5.031 3.627 0 1.528-1.034 2.733-2.543 3.01v.174c1.854.194 3.037 1.4 3.037 3.111 0 2.403-2.292 4.078-5.58 4.078C2.236 14 .12 12.306 0 9.702h3.261c.047 1.012.876 1.638 2.171 1.638 1.211 0 2.05-.681 2.05-1.675 0-1.022-.792-1.648-2.097-1.648H3.736zm11.845 5.624V3.406h-.177L12.16 5.569V2.66l3.421-2.3H19v13.282h-3.42z" opacity=".9"></path></svg>
                            </span>
                            <span className="discover-sidebar__label">Release calendar</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}