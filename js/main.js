function getRandomNum(from, to) {

  from = Math.ceil(from); // округляем минимальное число в большую сторону
  to = Math.floor(to); // округляем максимальное число в меньшую сторону

  let result = Math.floor(Math.random() * (to - from + 1)) + from; // вычисляем любое целое число в диапазоне включительно

  if (from >= to) { // проверяем, что параметр "до" больше параметра "от"
    result = false;

  }
  if (from<0||to<0) { // проверяем, что параметры больше 0
    result = false;

  }

  return result;
}

getRandomNum(5, 22);

function getRandomNumDecimal(from, to, decimal) {

  let result = Math.random() * (to - from) + from; // вычисляем любое число с плавающей точкой в диапазоне включительно

  if (from >= to) { // проверяем, что параметр "до" больше параметра "от"
    result = false;

  }
  if (from<0||to<0) { // проверяем, что параметры больше 0
    result = false;

  }
  result = result.toFixed(decimal); // задаем параметр decimal
  return result;
}

getRandomNumDecimal(5, 12, 5);
