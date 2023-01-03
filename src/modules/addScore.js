const scoreContainer = document.querySelector('.scores-container');

const name = document.querySelector('.name');
const score = document.querySelector('.score');

const addScore = (e) => {
  e.preventDefault();
  if (name.value && score.value) {
    const result = document.createElement('p');
    result.className = 'user-score';
    result.innerHTML = `${name.value}: ${score.value}`;
    name.value = '';
    score.value = '';
    scoreContainer.appendChild(result);
  }
};

export default addScore;
