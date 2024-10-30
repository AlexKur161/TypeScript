// Реализуйте функцию getField(), которая генерирует игровое поле для крестиков ноликов.
// Функция принимает на вход размерность поля и возвращает массив массивов нужного размера, заполненный значениями null.


Решение учителя:
// BEGIN
function getField(size: number): null[][] {
  const field = Array<null>(size).fill(null).map(() => Array<null>(size).fill(null));
  return field;
}
// END

Ваше решение:
function getField(quantity: number) {
    const arr: null[][] = [];
    const arrNull: null[] = [];
    for(let i = 1; i <= quantity; i++){
        arrNull.push(null);
    }
    console.log()
    for(let i = 1; i <= quantity; i++){
        arr.push(arrNull);
    }
    return arr
}
