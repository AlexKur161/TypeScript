// плохой способ описания функции как параметра
function process(callback: Function) {
  const value = callback();
  // ...
}
// функция вернет any

// как нужно указывать
function process2(callback: (n: number) => string) {
  const value = callback(10);
  // ...
}

// Решение учителя:
// BEGIN
function filter(numbers: number[], callback: (n: number) => boolean): number[] {
  const result: number[] = [];
  numbers.forEach((n) => {
    if (callback(n)) {
      result.push(n);
    }
  });
  return result;
}
// END

// Ваше решение:

function filter2(arrNumb: number[], callback: (n: number) => boolean): number[] {
    return arrNumb.filter(callback)
}

