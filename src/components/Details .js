import React from 'react'
// import Content from './components/Content' ;
import Portugal from '../images/Portugal.png'
import USA from '../images/USA.png'


const matches = [
  {
      live: true,
      status: "Live",
      teamA: {
          name: "Portugal",
          src: "photo/Portugal.png",
          score: 3,
      },
      teamB: {
          name: "USA",
          src: "photo/USA.png",
          score: 0,
      },
  },
  {
      live: false,
      matchDate: "10 May",
      teamA: {
          name: "France",
          src: "photo/France.png",
      },
      teamB: {
          name: "Denmark",
          src: "photo/Denmark.png",
      },
  },
  {
      live: false,
      matchDate: "09 September",
      teamA: {
          name: "Brazil",
          src: "photo/Brazil.png",
      },
      teamB: {
          name: "Spain",
          src: "photo/Spain.png",
      },
  },
  {
      live: false,
      matchDate: "21 November",
      teamA: {
          name: "England",
          src: "photo/England.png",
      },
      teamB: {
          name: "Ecuador",
          src: "photo/Ecuador.png",
      },
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const matchId = params.get("id");
  const selectedMatch = matches[matchId - 1];
  if (matchId && selectedMatch) {
      document.querySelector("#teamAName").innerText = selectedMatch.teamA.name;
      document.querySelector("#teamBName").innerText = selectedMatch.teamB.name;
      document.querySelector("#teamAImage").src = "../" + selectedMatch.teamA.src;
      document.querySelector("#teamBImage").src = "../" + selectedMatch.teamB.src;
      if (selectedMatch.live) {
          document.querySelector("#teamAScore").innerText = selectedMatch.teamA.score;
          document.querySelector("#teamBScore").innerText = selectedMatch.teamB.score;
      } else {
          document.querySelector("#matchScore").remove();
          document.querySelector("#matchCurent").remove();
          document.querySelector("#matchDate").innerText = selectedMatch.matchDate;
      }
  }
});




const Details  = () => {
  return (
    <div className='detils-container'>
      <div class="container">
          <div class="match">
              <div class="match-header">
                  <div id="matchCurent" class="match-status"> Live </div>
                </div>
                <div class="match-content">
                    <div class="column">
                        <div class="team-home">
                            <h2 class="team-name" id="teamAName"> Portugal </h2>
                            <div class="team-logo">
                                <img src={Portugal} alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="match-details">
                            <div id="matchDate" class="match-date"></div>
                            <div id="matchScore" class="match-score">
                                <span id="teamAScore" class="match-score-number"> 3 </span>
                                <span class="match-score-divider">:</span>
                                <span id="teamBScore" class="match-score-number"> 1 </span>
                            </div>
                            <div class="match-bet-options">
                                <div class="radio">
                                    <input type="radio" name="r1" value=""  /> Home
                                    <input type="radio" name="r1" value="" /> Draw
                                    <input type="radio" name="r1" value="" /> Away
                                    <input class="match-bet-place" type="button" onclick="submitBet()" id="submitBet"
                                        value="Place a bet" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="team-away">
                            <h2 class="team-name" id="teamBName"> USA </h2>
                            <div class="team-logo">
                                <img src={USA} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Details 