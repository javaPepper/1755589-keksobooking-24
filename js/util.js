
function getRandomNum(from, to) {

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
}

function getRandomNumDecimal(from, to, decimal) {

  let resultFloat = Math.random() * (to - from) + from;

  if (from >= to) {
    resultFloat = false;

  }
  if (from<0||to<0) {
    resultFloat = false;

  }
  resultFloat = resultFloat.toFixed(decimal);
  return resultFloat;
}

const getUrl = function(number) {
  if (number<10) {
    return  `img/avatars/user/0${  number  }.png`;
  }
  return `img/avatars/user${  number  }.png`;
};

const getTitleNum = function (num) {
  return `${num  }-е объявление`;
};
function getRandomIndex(array) {
  return Math.floor(Math.random()*array.length);
}


export {getRandomNumDecimal, getRandomNum, getUrl, getTitleNum, getRandomIndex};
