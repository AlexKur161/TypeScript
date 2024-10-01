// Напишите функцию, которая возвращает массив четных чисел из массива numbers.

const numbers = [1, 3, 8, 9, 100, 23, 55, 34];

// обычная
function getEvenNumbers(ar: Array<number>) {
  return ar.filter((numb: number) => numb % 2 === 0)
}
// анонимная функция
const getEvenNumbers2 = () => numbers.filter((numb: number) => numb % 2 === 0)