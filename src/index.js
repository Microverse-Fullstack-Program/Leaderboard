import './style.css';
import addScore from './modules/addScore.js';
import printScore from './modules/displayScore.js';
// import getGameId from './modules/getGameId.js';

const form = document.querySelector('.score-form');
const refreshBtn = document.querySelector('.refreshBtn');

// call the addScore function and add the score
form.addEventListener('submit', addScore);
refreshBtn.addEventListener('click', printScore);

// getting game id
// getGameId();

// Game ID: hkSSwDAz6zTnDxFsgDmT