import {useEffect, useState} from "react";
import addCSS from "../elements/AddCSS";
import addJS from "../elements/AddJS";
import {useNavigate} from "react-router-dom";
import Cookies from "js-cookie";
import checkAuth from "../elements/CheckAuth";
import fetchGames from "../elements/FetchGames";
import {HashLink} from "react-router-hash-link";


function Discover() {
    const [toRender, CtoRender] = useState("")
    const navigate = useNavigate();


    const handleSearch = (text) => {
        let allGames = window.games;

        for (let category in allGames)
        {
            for (const [key, value] of Object.entries(document.getElementById(category).children)) { value.remove(); }

            for (let gameIndex in allGames[category])
            {
                let gameData = allGames[category][gameIndex];
                if (gameData['TITLE'].toLowerCase().includes(text.toLowerCase()))
                {
                    let newMainDiv = document.createElement("div");
                    newMainDiv.className = "game-item";
                    let newImage = document.createElement("img");
                    newImage.src = gameData['IMG'];
                    newImage.alt = gameData['TITLE'];
                    let newChildDiv = document.createElement("div");
                    newChildDiv.className = "game-info";
                    newChildDiv.innerHTML = `<h3>${gameData['TITLE']}</h3><p>${gameData['DESC']}</p>`;
                    newMainDiv.appendChild(newImage);
                    newMainDiv.appendChild(newChildDiv);
                    document.getElementById(category).appendChild(newMainDiv);
                }
            }
        }
    };


    useEffect(() => {
        let Bearer = Cookies.get('BEARER');
        checkAuth(Bearer).then(isCorrect => {
            if (isCorrect) {
                CtoRender(toReturn);
                let receivedGames = {};
                fetchGames().then(e => {
                    for (const [category, gameList] of Object.entries(e)) { receivedGames[category] = gameList; }
                    window.games = receivedGames;
                    handleSearch("");
                });
                addCSS("/css/discover.css");
                addCSS("https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css");
                addCSS("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css");
                addJS("/js/discover.js");
            }
            else { navigate("/login"); }
        })
    }, []);

    let toReturn = (
        <div className="Discover">
            <header>
                <div id="menu-bar" className="fas fa-bars"></div>
                <nav className="navbar">
                    <a href="/home">Home</a>
                    <a href="/discover">Games</a>
                    <a href="/feedback">Feedback</a>
                    <a href="/contact">Contact</a>
                    <div className="search-bar">
                        <input type="text" placeholder="Search..." onChange={(e) => handleSearch(e.target.value)}/>
                        <button type="submit">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                </nav>
            </header>
            <div className="sidebar">
                <ul>
                    <li>
                        <HashLink smooth to="#recent">
                            <i className="fa fa-fw fa-gamepad"></i>
                            <span>Recent Games</span>
                        </HashLink>
                    </li>
                    <li>
                        <HashLink smooth to="#recommended">
                            <i className="fa fa-fw fa-trophy"></i>
                            <span>Recommended</span>
                        </HashLink>
                    </li>
                    <li>
                        <a href="">
                            <i className="fa fa-fw fa-sun"></i>
                            <span>Seasonal Games</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i className="fa fa-fw fa-puzzle-piece"></i>
                            <span>Original</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-fw fa-retro"></i>
                            <span>Retro Games</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="right-hand-side-sections">
                <div className="sidebar">
                    <ul>
                        <li>
                            <a href="#">
                                <i className="fa fa-fw fa-gamepad"></i>
                                <span>Ree Games</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-fw fa-trophy"></i>
                                <span>Best</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-fw fa-sun"></i>
                                <span>Seasonal Games</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-fw fa-puzzle-piece"></i>
                                <span>Original</span>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <i className="fa fa-fw fa-car"></i>
                                <span>Car Games</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-fw fa-female"></i>
                                <span>Beauty Games</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-fw fa-motorcycle"></i>
                                <span>Bike Games</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-fw fa-fist-raised"></i>
                                <span>Action Games</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="sidebar">
                <ul>
                    <li>
                        <HashLink smooth to="#recent">
                            <i className="fa fa-fw fa-gamepad"></i>
                            <span>Recent Games</span>
                        </HashLink>
                    </li>
                    <li>
                        <a href="">
                            <i className="fa fa-fw fa-trophy"></i>
                            <span>Recommended</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-fw fa-sun"></i>
                            <span>Seasonal Games</span>
                        </a>
                    </li>

                    <li>
                        <HashLink smooth to="#car">
                            <i className="fa fa-fw fa-car"></i>
                            <span>Car Games</span>
                        </HashLink>
                    </li>
                    <li>
                        <HashLink smooth to="#bike">
                            <i className="fa fa-fw fa-motorcycle"></i>
                            <span>Bike Games</span>
                        </HashLink>
                    </li>
                    <li>
                        <HashLink smooth to="#action">
                            <i className="fa fa-fw fa-fist-raised"></i>
                            <span>Action Games</span>
                        </HashLink>
                    </li>
                    <li>
                        <HashLink smooth to="#adventure">
                            <i className="fa fa-fw fa-hiking"></i>
                            <span>Adventure Games</span>
                        </HashLink>
                    </li>
                    <li>
                        <HashLink smooth to="#card">
                            <i className="fa fa-fw fa-id-card"></i>
                            <span>Card Games</span>
                        </HashLink>
                    </li>
                    <li>
                        <HashLink smooth to="#controller">
                            <i className="fa fa-fw fa-gamepad"></i>
                            <span>Controller Games</span>
                        </HashLink>
                    </li>
                    <li>
                        <HashLink smooth to="#sports">
                            <i className="fa fa-fw fa-futbol"></i>
                            <span>Sports Games</span>
                        </HashLink>
                    </li>
                    <li>
                        <HashLink smooth to="#shooting">
                            <i className="fa fa-fw fa-crosshairs"></i>
                            <span>Shooting Games</span>
                        </HashLink>
                    </li>
                    <li>
                        <HashLink smooth to="#puzzle">
                            <i className="fa fa-fw fa-puzzle-piece"></i>
                            <span>Puzzle Games</span>
                        </HashLink>
                    </li>
                    <li>
                        <HashLink smooth to="#.io">
                            <i className="fa fa-fw fa-star"></i>
                            <span>.io</span>
                        </HashLink>
                    </li>


                    <li>
                        <HashLink smooth to="#horror">
                            <i className="fa fa-fw fa-ghost"></i>
                            <span>horror games</span>
                        </HashLink>
                    </li>
                    <li>
                        <HashLink smooth to="#escape">
                            <i className="fas fa-key"></i>
                            <span>Escape Games</span>
                        </HashLink>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fas fa-circle-notch"></i>
                            <span>8 Ball Pool</span>
                        </a>
                    </li>
                </ul>
            </div>


            <section className="games-section" id="recent">
                <h2>Recently Played</h2>
                <div className="game-grid" id="grid_recent"></div>
            </section>

            <section className="games-section" id="recommended">
                <h2>Recommended</h2>
                <div className="game-grid" id="grid_recommended"></div>
            </section>

            <section className="games-section" id="beauty">
                <h2>Beauty Games</h2>
                <div className="game-grid" id="grid_beauty"></div>
            </section>

            <section className="games-section" id="car">
                <h2>Car Games</h2>
                <div className="game-grid" id="grid_car"></div>
            </section>

            <section className="games-section" id="bike">
                <h2>bike Games</h2>
                <div className="game-grid" id="grid_bike"></div>
            </section>

            <section className="games-section" id="action">
                <h2>Action Games</h2>
                <div className="game-grid" id="grid_action"></div>
            </section>
            <section className="games-section" id="adventure">
                <h2>adventure Games</h2>
                <div className="game-grid" id="grid_adventure"></div>
            </section>
            <section className="games-section" id="card">
                <h2>card Games</h2>
                <div className="game-grid" id="grid_card"></div>
            </section>
            <section className="games-section" id="controller">
                <h2>controller Games</h2>
                <div className="game-grid" id="grid_controller"></div>
            </section>
            <section className="games-section" id="sports">
                <h2>SPORTS GAMES</h2>
                <div className="game-grid" id="grid_sports"></div>
            </section>
            <section className="games-section" id="shooting">
                <h2>shooting Games</h2>
                <div className="game-grid" id="grid_shooting"></div>
            </section>
            <section className="games-section" id="puzzle">
                <h2>puzzle Games</h2>
                <div className="game-grid" id="grid_puzzle"></div>
            </section>
            <section className="games-section" id="io">
                <h2>.io Games</h2>
                <div className="game-grid" id="grid_io"></div>
            </section>
            <section className="games-section" id="horror">
                <h2>horror Games</h2>
                <div className="game-grid" id="grid_horror"></div>
            </section>
            <section className="games-section" id="escape">
                <h2> escape Games</h2>
                <div className="game-grid" id="grid_escape"></div>
            </section>

            <HashLink smooth to="#top" className="back-to-top">
                <i className="fas fa-chevron-up"></i>
            </HashLink>

            <div id="top"></div>

        </div>
    );
    return toRender;
}

export default Discover;
