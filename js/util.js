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

const showSuccessMessage = function () {
  const templateMessage = document.querySelector('#success').content;
  const messageSuccess = templateMessage.cloneNode(true);
  const success = messageSuccess.querySelector('.success');
  success.querySelector('.success__message').textContent = 'Ваше объявление успешно размещено!';
  document.body.appendChild(success);
  return success;
};
const showErrorMessage = function (message) {
  const templateMessage = document.querySelector('#error').content;
  const messageError = templateMessage.cloneNode(true);
  const err = messageError.querySelector('.error');
  err.querySelector('.error__message').textContent = message;
  document.body.append(err);
  return err;
};
const removeErrorMessage = function (error) {
  const errorButton = document.querySelector('.error__button');
  errorButton.addEventListener('click', () => {
    error.remove();
  });
};
export {getRandomNumDecimal, getRandomNum, getRandomIndex, showErrorMessage, showSuccessMessage, removeErrorMessage};
