import getScore from './getScore.js';

const scoreContainer = document.querySelector('.score-wrapper');

const printScore = async () => {
  scoreContainer.innerHTML = '';
  const result = await getScore();

  result.forEach((game) => {
    const p = document.createElement('p');
    p.className = 'scores';
    p.innerHTML = `${game.user}: ${game.score}`;
    scoreContainer.appendChild(p);
  });
};

export default printScore;
