import './style.css';
import addScore from './modules/addScore.js';

const form = document.querySelector('.score-form');

// call the addScore function and add the score
form.addEventListener('submit', addScore);
