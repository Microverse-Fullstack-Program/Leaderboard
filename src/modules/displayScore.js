import getScore from './getScore.js';

const scoreContainer = document.querySelector('.scores-container');

const printScore = async () => {
  const result = await getScore();
  const p = document.createElement('p');
  
  result.forEach((game) => {
    p.className = 'user-score';
    p.innerHTML = `${game.user}: ${game.score}`;
    scoreContainer.appendChild(p);
  });
};

export default printScore;
