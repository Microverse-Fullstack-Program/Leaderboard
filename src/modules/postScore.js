import url from './url.js';

const postScore = async (name, score) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      user: `${name}`,
      score: `${score}`
    }),
  });
  const res = await response.json();
  return res;
};

export default postScore;
