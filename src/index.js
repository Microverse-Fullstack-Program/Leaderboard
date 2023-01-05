import './style.css';
import addScore from './modules/addScore.js';
import printScore from './modules/displayScore.js';

const form = document.querySelector('.score-form');
const refreshBtn = document.querySelector('.refreshBtn');

// call the addScore function and add the score
form.addEventListener('submit', addScore);
refreshBtn.addEventListener('click', printScore);
