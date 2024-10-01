// Напишите функцию, которая возвращает массив четных чисел из массива numbers.
var numbers = [1, 3, 8, 9, 100, 23, 55, 34];
// обычная
function getEvenNumbers(ar) {
    return ar.filter(function (numb) { return numb % 2 === 0; });
}
// анонимная функция
var getEvenNumbers2 = function () { return numbers.filter(function (numb) { return numb % 2 === 0; }); };
