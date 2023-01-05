import postScore from './postScore.js';

const name = document.querySelector('.name');
const score = document.querySelector('.score');

const addScore = (e) => {
  e.preventDefault();
  if (name.value && score.value) {
    // const scoreInput = {
    //   name: ,
    //   score: ,
    // };
    postScore(name.value, score.value);
    name.value = '';
    score.value = '';
  }
};

export default addScore;
