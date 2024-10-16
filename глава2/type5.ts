// Реализуйте функцию isPlainObject(), которая проверяет, является ли переданное значение объектом. Эта функция считает, что массив не объект:

// BEGIN
function isPlainObject(value: unknown): boolean {
  return value instanceof Object && !Array.isArray(value);
}
// END


Ваше решение:
function isPlainObject(data: unknown) : boolean {
    return Object.prototype.toString.call(data) === '[object Object]'
}
