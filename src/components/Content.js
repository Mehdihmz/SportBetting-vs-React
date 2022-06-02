import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom'
import Details from '../components/Details '; 

import logo from '../images/logo.png'
import Portugal from '../images/Portugal.png'
import Brazil from '../images/Brazil.png'
import France from '../images/France.png'
import England from '../images/England.png'
import USA from '../images/USA.png'

document.addEventListener("DOMContentLoaded", function (){
    setTimeout(() => {
        const params = new URLSearchParams(window.location.search);
        const betSuccessful = params.get("bet");
        if (betSuccessful === "true"){
            alert("Good Luck & Thanks for your bet !");
        }
    }, 500);
});


const Content = () => {
return ( 
    <div className='content-container'>
        <div class="container">
            <div className="match">
                <div class="match-header">
                    <div class="match-logo">
                        <img src={logo} alt="" />
                    </div>
                </div>
                <div class="match-content">
                    <div class="column">
                        <div class="team team--home">
                            <div class="team-logo">
                                <Link to="/Details"></Link><img src={USA} alt="" />          
                                {/* <a href="pages/details .html?id=1"><img src={RealMadrid} alt="" /></a> */}
                            </div>
                            <h2 class="team-name">USA</h2>
                        </div>
                    </div>
                    <div class="column">
                        <div class="match-details">
                            <div class="match-status">
                                <div class="match-status">Live</div>
                            </div>
                            <div class="match-score">
                                <span class="match-score-number match-score-number--leading">3</span>
                                <span class="match-score-divider">:</span>
                                <span class="match-score-number">1</span>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="team team--away">
                            <div class="team-logo">
                                <Link to="/Details"></Link><img src={Portugal} alt="" />
                                {/* <a href="pages/details .html?id=1"><img src={Portugal} alt="" /></a> */}
                                <h2 class="team-name">Portugal</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="match-content">
                    <div class="column">
                        <div class="team team--home">
                            <div class="team-logo">
                                <Link to="/Details"></Link><img src={France} alt="" />
                                {/* <a href="pages/details .html?id=1"><img src={Roma} alt="" /></a> */}
                                <h2 class="team-name">France</h2>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="match-details">
                            <div class="match-status">
                                <div class="match-status">Tomorrow</div>
                            </div>
                            <div class="match-vs">VS</div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="team team--away">
                            <div class="team-logo">
                                <Link to="/Details"></Link><img src={Brazil} alt="" />
                                {/* <a href="pages/details .html?id=1"><img src={Feyenoord} alt="" /></a> */}
                                <h2 class="team-name">Brazil</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="match-content">
                    <div class="column">
                        <div class="team team--home">
                            <div class="team-logo">
                                <Link to="/Details"></Link><img src={Brazil} alt="" />
                                {/* <a href="pages/details .html?id=1"><img src={Brazil} alt="" /></a> */}
                                <h2 class="team-name">Brazil</h2>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="match-details">
                            <div class="match-status">
                                <div class="match-status">Tomorrow</div>
                            </div>
                            <div class="match-vs">VS</div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="team team--away">
                            <div class="team-logo">
                                <Link to="/Details"></Link><img src={France} alt="" />
                                {/* <a href="pages/details .html?id=1"><img src={France} alt="" /></a> */}
                                <h2 class="team-name">France</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="match-content">
                    <div class="column">
                        <div class="team team--home">
                            <div class="team-logo">
                                <Link to="/Details"></Link><img src={England} alt="" />
                                {/* <a href="pages/details .html?id=1"><img src={England} alt="" /></a> */}
                                <h2 class="team-name">England</h2>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="match-details">
                            <div class="match-status">
                                <div class="match-status">Tomorrow</div>
                            </div>
                            <div class="match-vs">VS</div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="team team--away">
                            <div class="team-logo">
                                <Link to="/Details"></Link><img src={USA} alt="" />
                                {/* <a href="pages/details .html?id=1"><img src={USA} alt="" /></a> */}
                                <h2 class="team-name">USA</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Content