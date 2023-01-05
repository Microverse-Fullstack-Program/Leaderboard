import postScore from './postScore.js';

const name = document.querySelector('.name');
const score = document.querySelector('.score');

const addScore = (e) => {
  e.preventDefault();
  if (name.value && score.value) {
    const scoreInput = {
      name: name.value,
      score: score.value,
    };
    postScore(scoreInput);
    name.value = '';
    score.value = '';
  }
};

export default addScore;
