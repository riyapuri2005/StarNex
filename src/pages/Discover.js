import {useEffect} from "react";
import addCSS from "../elements/AddCSS";
import addJS from "../elements/AddJS";
import { HashLink } from "react-router-hash-link";


function Discover() {

    useEffect(() => {
        addCSS("/css/discover.css");
        addCSS("https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css");
        addCSS("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css");
        addJS("/js/discover.js");
    }, []);

    return (
        <div className="Discover">
            <header>
                <div id="menu-bar" className="fas fa-bars"></div>
                <nav className="navbar">
                    <a href="/home">Home</a>
                    <a href="/discover">Games</a>
                    <a href="/feedback">Feedback</a>
                    <a href="/contact">Contact</a>
                    <div className="search-bar">
                        <input type="text" placeholder="Search..."/>
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
                <div className="game-grid">
                    <div className="game-item">

                        <img src="https://images.crazygames.com/fashion-famous_16x9/20240227083828/fashion-famous_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=461" alt="Game 1"/>

                        <div className="game-info">
                            <h3>Fashion Famous</h3>
                            <p>Short description of the game goes here...</p>
                        </div>

                    </div>
                    <div className="game-item">

                        <img src="https://images.crazygames.com/offroad-master_16x9/20240826030317/offroad-master_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 2"/>
                        <div className="game-info">
                            <h3>Crazy Hills</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">

                        <img src="https://images.crazygames.com/games/air-hockey-cup/cover_16x9-1712905959843.png?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 3"/>
                        <div className="game-info">
                            <h3>Air Hockey Cup</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/monster-mash-pet-trainer_16x9/20240205093011/monster-mash-pet-trainer_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 4"/>
                        <div className="game-info">
                            <h3>Monster Mash</h3>
                            <p>Short description of the game goes here...</p>
                        </div>

                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/mr-stretch-and-the-stolen-fortune_16x9/20231227165550/mr-stretch-and-the-stolen-fortune_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 5"/>
                        <div className="game-info">
                            <h3>Mr Stretch</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/bike-jump_16x9/20240411041219/bike-jump_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 87"/>
                        <div className="game-info">
                            <h3>Bike Jump</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/skillfite-io_16x9/20240423025145/skillfite-io_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 88"/>
                        <div className="game-info">
                            <h3>SkillFite</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/goober-dash_16x9/20231002025033/goober-dash_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=344" alt="Game 89"/>
                        <div className="game-info">
                            <h3>Goober Dash</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="games-section" id="recommended">
                <h2>Recommended</h2>
                <div className="game-grid">
                    <div className="game-item">
                        <img src="https://images.crazygames.com/smash-karts_16x9/20240116074535/smash-karts_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=344" alt="Game 5"/>
                        <div className="game-info">
                            <h3>Smash Karts</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/solar-smash_16x9/20240722073047/solar-smash_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=344" alt="Game 6"/>
                        <div className="game-info">
                            <h3>Planet Smash</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/no-pain-no-gain---ragdoll-sandbox_16x9/20240823041948/no-pain-no-gain---ragdoll-sandbox_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=344" alt="Game 7"/>
                        <div className="game-info">
                            <h3>NO PAIN NO GAIN</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/tag-2-3-4-players_16x9/20240403022813/tag-2-3-4-players_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=344" alt="Game 8"/>
                        <div className="game-info">
                            <h3>TAG</h3>
                            <p>Short description of the game goes here...</p>
                        </div>

                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/elemental-merge_16x9/20240729132517/elemental-merge_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=344" alt="Game 9"/>
                        <div className="game-info">
                            <h3>WAR</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/card-shuffle-sort_16x9/20240827032645/card-shuffle-sort_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 82"/>
                        <div className="game-info">
                            <h3>CARD SHUFFLE</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/fork-n-sausage_16x9/20240517041857/fork-n-sausage_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=343" alt="Game 83"/>
                        <div className="game-info">
                            <h3>FORK & SAUSAGE</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/slice-master_16x9/20240731033229/slice-master_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=461" alt="Game 90"/>
                        <div className="game-info">
                            <h3>SLICE MASTER</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="games-section" id="beauty">
                <h2>Beauty Games</h2>
                <div className="game-grid">
                    <div className="game-item">
                        <img src="https://images.crazygames.com/bffs-k-pop-fangirls_16x9/20240425062730/bffs-k-pop-fangirls_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 9"/>
                        <div className="game-info">
                            <h3>BFFS</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/fashion-famous_16x9/20240227083828/fashion-famous_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=461" alt="Game 10"/>
                        <div className="game-info">
                            <h3>FASHION FAMOUS</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/makeup-studio-glam-diva_16x9/20240312095439/makeup-studio-glam-diva_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=461" alt="Game 11"/>
                        <div className="game-info">
                            <h3>MAKEUP STUDIO</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/beauty-princess-makeup-game_16x9/20240422064146/beauty-princess-makeup-game_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=461" alt="Game 12"/>
                        <div className="game-info">
                            <h3>BEAUTY PRINCESS</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/monsterella-fantasy-makeup_16x9/20240221092917/monsterella-fantasy-makeup_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 12"/>
                        <div className="game-info">
                            <h3>MONSTERELLA</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>

                    <div className="game-item">
                        <img src="https://images.crazygames.com/glamour-beachlife/20220805111132/glamour-beachlife-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 87"/>
                        <div className="game-info">
                            <h3>GLAMOUR</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/princess-lovely-fashion/20220315124739/princess-lovely-fashion-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 88"/>
                        <div className="game-info">
                            <h3>LOVELY FASHION</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/fairy-s-magical-makeover/20210728144813/fairy-s-magical-makeover-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 89"/>
                        <div className="game-info">
                            <h3>FAIRY MAKEOVER</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="games-section" id="car">
                <h2>Car Games</h2>
                <div className="game-grid">
                    <div className="game-item">
                        <img src="https://images.crazygames.com/sky-riders-buk_16x9/20240206045724/sky-riders-buk_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=461" alt="Game 13"/>
                        <div className="game-info">
                            <h3>SKY RIDERS</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/drift-zero_16x9/20240715092411/drift-zero_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 14"/>
                        <div className="game-info">
                            <h3>DRIFT ZERO</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/offroad-master_16x9/20240826030317/offroad-master_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342 " alt="Game 15"/>
                        <div className="game-info">
                            <h3>CRAZY HILLS</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/eggy-car/20230720050147/eggy-car-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 16"/>
                        <div className="game-info">
                            <h3>EGG CORE </h3>
                            <p>Short description of the game goes here...</p>
                        </div>

                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/taxi-rush_16x9/20240726033945/taxi-rush_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 16"/>
                        <div className="game-info">
                            <h3>TAXI RUSH</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/games/drift-boss/cover-1626884625264.png?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 87"/>
                        <div className="game-info">
                            <h3>DRIFT BOSS</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/mini-caps-arena/20230411150743/mini-caps-arena-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=461" alt="Game 88"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/ram-cars_16x9/20231023064048/ram-cars_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 89"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="games-section" id="bike">
                <h2>bike Games</h2>
                <div className="game-grid">
                    <div className="game-item">
                        <img src="https://images.crazygames.com/games/moto-x3m/cover_16x9-1700625476572.png?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 13"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/cartoon-moto-stunt_16x9/20240403100312/cartoon-moto-stunt_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=343" alt="Game 14"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/riders-downhill-racing_16x9/20240326045302/riders-downhill-racing_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 15"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/cycle-extreme/20210618150637/cycle-extreme-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 16"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>


                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/ramp-bike-jumping/20230721110729/ramp-bike-jumping-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 18"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>

                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/bike-jump_16x9/20240411041219/bike-jump_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 87"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/switch-wheel-race-master_16x9/20231218143647/switch-wheel-race-master_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 88"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/night-rider/20221216172807/night-rider-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 89"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="games-section" id="action">
                <h2>Action Games</h2>
                <div className="game-grid">
                    <div className="game-item">
                        <img src="https://images.crazygames.com/stickman-supreme-duelist-2/20230314082715/stickman-supreme-duelist-2-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 21"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/dino-world-merge-fight_16x9/20230929094550/dino-world-merge-fight_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 22"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/summoner-master/20230503162836/summoner-master-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 23"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/wizard-io_16x9/20240311051231/wizard-io_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 24"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/monster-mash-pet-trainer_16x9/20240205093011/monster-mash-pet-trainer_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 25"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>

                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/escape-from-prison-multiplayer_16x9/20240712090255/escape-from-prison-multiplayer_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 87"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/build-and-crush_16x9/20240508095251/build-and-crush_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 88"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/monster-box-bae/20221221170051/monster-box-bae-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 89"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="games-section" id="adventure">
                <h2>adventure Games</h2>
                <div className="game-grid">
                    <div className="game-item">
                        <img src="https://images.crazygames.com/el-dorado-lite_16x9/20240202061232/el-dorado-lite_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 13"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/battle-arena_16x9/20240523085305/battle-arena_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 14"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/knight-hero-adventure-idle-rpg_16x9/20240711085041/knight-hero-adventure-idle-rpg_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 15"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/firestone-idle-rpg_16x9/20240402021238/firestone-idle-rpg_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 16"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>


                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/risehero_16x9/20240228022040/risehero_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 18"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>

                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/skillfite-io_16x9/20240423025145/skillfite-io_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 87"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/captains-idle/20230323175033/captains-idle-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 88"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/duck-life-adventure-demo/20200722114337/duck-life-adventure-demo-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 89"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="games-section" id="card">
                <h2>card Games</h2>
                <div className="game-grid">
                    <div className="game-item">
                        <img src="https://images.crazygames.com/kings-and-queens-solitaire-tripeaks_16x9/20240709032726/kings-and-queens-solitaire-tripeaks_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 13"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/foono-online-multiplayer-card-game_16x9/20231002101605/foono-online-multiplayer-card-game_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 14"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/spooky-tripeaks/20221010121338/spooky-tripeaks-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 15"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/games/solitaire-farm-seasons-2/cover-1683001381829.jpeg?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 16"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>


                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/games/uno-online/cover-1679068977831.png?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 18"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>

                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/tongits_16x9/20231219144615/tongits_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 87"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/games/solitaire-story-tripeaks-3/cover-1649690926868.png?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 88"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/duo-with-friends/20211116161001/duo-with-friends-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=343" alt="Game 89"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="games-section" id="controller">
                <h2>controller Games</h2>
                <div className="game-grid">
                    <div className="game-item">
                        <img src="https://images.crazygames.com/snake-lite-worm-snake-game_16x9/20231030060228/snake-lite-worm-snake-game_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 13"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/rock-climbing_16x9/20240201042059/rock-climbing_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 14"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/mr-stretch-and-the-stolen-fortune_16x9/20231227165550/mr-stretch-and-the-stolen-fortune_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 15"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/buildnow-gg/20210823164305/buildnow-gg-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 16"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>


                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/poobo-survival_16x9/20240712025840/poobo-survival_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 18"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>

                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/drop-ahead-sandbox-madness_16x9/20240801114822/drop-ahead-sandbox-madness_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 87"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/adventneon/20210202084011/adventneon-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 88"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/smash-karts_16x9/20240116074535/smash-karts_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=343" alt="Game 89"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="games-section" id="sports">
                <h2>SPORTS GAMES</h2>
                <div className="game-grid">
                    <div className="game-item">
                        <img src="https://images.crazygames.com/hoop-world-3d_16x9/20240418065301/hoop-world-3d_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=461" alt="Game 13"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/games/air-hockey-cup/cover_16x9-1712905959843.png?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 14"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/cricket-superstar-league_16x9/20231226161704/cricket-superstar-league_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 15"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/games/power-badminton/cover_16x9-1714706052969.png?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 16"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>


                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/mini-golf-club_16x9/20230911115853/mini-golf-club_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 18"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>

                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/games/basketbros/cover-1586360611838.jpg?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 87"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/pill-soccer/20230424174048/pill-soccer-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=343" alt="Game 88"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/carball-io_16x9/20240418110827/carball-io_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=343" alt="Game 89"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="games-section" id="shooting">
                <h2>shooting Games</h2>
                <div className="game-grid">
                    <div className="game-item">
                        <img src="https://images.crazygames.com/drunken-duel-2/20230221103853/drunken-duel-2-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 13"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/sniper-master/20221026091440/sniper-master-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 14"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/games/sniper-clash-3d/cover-1584470271989.png?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 15"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/buildnow-gg/20210823164305/buildnow-gg-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 16"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>


                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/puppetman-ragdoll-shooter_16x9/20240522094640/puppetman-ragdoll-shooter_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 18"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>

                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/muscle-gun-io_16x9/20240722033441/muscle-gun-io_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=343" alt="Game 87"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/shellshockersio_16x9/20240105032649/shellshockersio_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=343" alt="Game 88"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/splatmans_16x9/20240729100953/splatmans_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=461" alt="Game 89"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="games-section" id="puzzle">
                <h2>puzzle Games</h2>
                <div className="game-grid">
                    <div className="game-item">
                        <img src="https://images.crazygames.com/blockbuster-puzzle_16x9/20240523094042/blockbuster-puzzle_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=461" alt="Game 13"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/kitty-scramble_16x9/20240206053210/kitty-scramble_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=461" alt="Game 14"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/mahjong-unlimited_16x9/20240827081746/mahjong-unlimited_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 15"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/block-puzzle/20210105170856/block-puzzle-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=461" alt="Game 16"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/twirl-pja/20221130164015/twirl-pja-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=344" alt="Game 18"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/games/word-wipe/cover_16x9-1707829913887.png?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=343" alt="Game 87"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/block-puzzle-master_16x9/20240308034605/block-puzzle-master_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=343" alt="Game 88"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/games/inca-cubes-2048/cover-1680024941220.png?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=343" alt="Game 89"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="games-section" id=".io">
                <h2>.io Games</h2>
                <div className="game-grid">
                    <div className="game-item">
                        <img src="https://images.crazygames.com/paper-io-2/20230505085019/paper-io-2-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=344" alt="Game 13"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/goober-dash_16x9/20231002025033/goober-dash_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=344" alt="Game 14"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/flyordieio/20210614144226/flyordieio-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=344" alt="Game 15"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/worm-hunt_16x9/20230913105128/worm-hunt_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=344" alt="Game 16"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>


                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/stabfish-io_16x9/20240416060337/stabfish-io_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=344" alt="Game 18"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>

                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/games/gulper-io/cover_16x9-1722864711255.png?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=343" alt="Game 87"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/rocket-bot-royale/20220310095708/rocket-bot-royale-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=343" alt="Game 88"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/games/duckpark-io/cover-1585853392521.jpg?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=343" alt="Game 89"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="games-section" id="horror">
                <h2>horror Games</h2>
                <div className="game-grid">
                    <div className="game-item">
                        <img src="https://images.crazygames.com/exhibit-of-sorrows/20220426111642/exhibit-of-sorrows-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=344" alt="Game 13"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/horror-tale-kidnapper/20230307092027/horror-tale-kidnapper-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=344" alt="Game 14"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/diner-in-the-storm_16x9/20240129051818/diner-in-the-storm_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=344" alt="Game 15"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/haunted-school-2---horror-game/20230111200747/haunted-school-2---horror-game-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=344" alt="Game 16"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>


                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/celestina-chapter-two_16x9/20230925124844/celestina-chapter-two_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=344" alt="Game 18"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>

                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/night-watchman/20220623075320/night-watchman-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=343" alt="Game 87"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/bear-haven/20220714074451/bear-haven-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=343" alt="Game 88"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/cursed-cabin/20230215104028/cursed-cabin-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=343" alt="Game 89"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="games-section" id="escape">
                <h2> escape Games</h2>
                <div className="game-grid">
                    <div className="game-item">
                        <img src="https://images.crazygames.com/escape-from-prison-multiplayer_16x9/20240712090255/escape-from-prison-multiplayer_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 13"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/daily-room-escape_16x9/20240214031258/daily-room-escape_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 14"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/stickman-escape-school/20220802125849/stickman-escape-school-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 15"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/think-to-escape/20220628155714/think-to-escape-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 16"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>


                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/open-100-doors/20220915183643/open-100-doors-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 18"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>

                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/escape-puzzle-game---moon-trip_16x9/20230905033505/escape-puzzle-game---moon-trip_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 87"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/cat-lovescapes/20221205123919/cat-lovescapes-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 88"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                    <div className="game-item">
                        <img src="https://images.crazygames.com/jailbreak-hide-or-attack_16x9/20231025040559/jailbreak-hide-or-attack_16x9-cover?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=342" alt="Game 89"/>
                        <div className="game-info">
                            <h3>Game Title</h3>
                            <p>Short description of the game goes here...</p>
                        </div>
                    </div>
                </div>
            </section>


            <HashLink smooth to="#top" className="back-to-top">
                <i className="fas fa-chevron-up"></i>
            </HashLink>

            <div id="top"></div>

        </div>
    );
}

export default Discover;
