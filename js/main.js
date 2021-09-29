function getRandomNum(from, to, decimal) {

  let result = Math.random() * (to - from) + from; // вычисляем любое целое число в диапазоне включительно

  if (from >= to) { // проверяем, что параметр "до" больше параметра "от"
    result = false;
    console.log('Программа не может быть выполнена');
  }
  if (from<0||to<0) { // проверяем, что параметры больше 0
    result = false;
    console.log('Программа не может быть выполнена');
  }

  return result;
}

getRandomNum(5, 22);

function getRandomNumDecimal(from, to, decimal) {

  let result = Math.random() * (to - from) + from; // вычисляем любое число с плавающей точкой в диапазоне включительно

  if (from >= to) { // проверяем, что параметр "до" больше параметра "от"
    result = false;
    console.log('Программа не может быть выполнена');
  }
  if (from<0||to<0) { // проверяем, что параметры больше 0
    result = false;
    console.log('Программа не может быть выполнена');
  }
  result = result.toFixed(decimal); // задаем параметр decimal
  return result;
}

getRandomNumDecimal(5, 12, 5);
