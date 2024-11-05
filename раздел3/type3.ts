// Задание
// Реализуйте функцию reverse(), которая переворачивает массив. Технически она должна возвращать новый массив,
//  в котором элементы расположены в обратном порядке.
// Используйте модификатор readonly для входящего массива. Не используйте встроенный метод reverse().

// Решение учителя:
// BEGIN
function reverse(coll: readonly number[]): number[] {
  return coll.map((_, index) => coll[coll.length - 1 - index]);
}
// END

// Ваше решение:
function reverse(arr: readonly number[]): number[] {
    const newArr: number[] = [];
    for(let i = arr.length - 1; i >= 0; i--){
        newArr.push(arr[i]);
    }
    return newArr;
}
