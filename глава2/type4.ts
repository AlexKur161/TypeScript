// Реализуйте функцию fail(), которая выбрасывает любое исключение. Пропишете ее возвращаемый тип явно.

// BEGIN
function fail(): never {
  throw new Error('wow');
}
// END

export default fail;
Ваше решение:
function fail(): never {
    throw new Error('test')
}

export default fail;