// Попробуйте самостоятельно определить функцию forEach() для чисел:

function forEach(numbers: number[], callback: (n: number, index: number) => void): void {
  numbers.forEach((n, index) => callback(n, index));
}
// END


// Ваше решение:
function forEach(arrNumb: number[], callback: (n: number, index: number) => void): void {
    arrNumb.forEach(callback);
}



function forEach(arrNumb: number[], callback: (n: number, index: number) => void): void {
  arrNumb.forEach(callback);
}

// если не указываю тип массиву вылезает ошибка
// Variable 'result' implicitly has type 'any[]' in some locations where its type cannot be determined.
// Variable 'result' implicitly has an 'any[]' type. 
const result: number[] = [];
forEach([1, 2, 3], (n) => result.push(n));
forEach([8, 9], (n, index) => console.log(index + n));
console.log(result)