
const getRandomNum = function(from, to) {

  from = Math.ceil(from);
  to = Math.floor(to);

  let result = Math.floor(Math.random() * (to - from + 1)) + from;

  if (from >= to) {
    result = false;

  }
  if (from<0||to<0) {
    result = false;

  }

  return result;
};

const getRandomNumDecimal = function(from, to, decimal) {

  let resultFloat = Math.random() * (to - from) + from;

  if (from >= to) {
    resultFloat = false;

  }
  if (from<0||to<0) {
    resultFloat = false;

  }
  resultFloat = resultFloat.toFixed(decimal);
  return resultFloat;
};

function getRandomIndex(array) {
  return Math.floor(Math.random()*array.length);
}


export {getRandomNumDecimal, getRandomNum, getRandomIndex};
