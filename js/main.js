function getRandomNum(from, to) {
  from = Math.floor(Math.abs(from)); // округляем минимальное число в абсолютном значении в меньшую сторону
  to = Math.floor(Math.abs(to)); // округляем максимальное число в абсолютном значении в меньшую сторону
  let result = Math.floor(Math.random() * (to - from + 1)) + from; // вычисляем любое число в диапазоне включительно
  if (from >= to) { // проверяем, что параметр "до" больше параметра "от"
   result = false;
   console.log('Программа не может быть выполнена');
    }
    return result;
}
getRandomNum(-29, 10);

