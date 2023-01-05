import getScore from './getScore.js';

const scoreContainer = document.querySelector('.scores-container');

const printScore = async () => {
  scoreContainer.innerHTML = '';
  const result = await getScore();

  result.forEach((game) => {
    const p = document.createElement('p');
    p.className = 'user-score';
    p.innerHTML = `${game.user}: ${game.score}`;
    scoreContainer.appendChild(p);
  });
};

export default printScore;
