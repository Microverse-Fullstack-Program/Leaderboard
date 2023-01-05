import url from './url.js';

const getScore = async () => {
  const response = await fetch(url);
  const res = await response.json();
  return res.result;
};
export default getScore;
