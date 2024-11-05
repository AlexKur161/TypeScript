// Задание
// Реализуйте функцию formatPrice(), которая принимает число и возвращает строку с 
// округлением до второго числа после запятой. Если пришел null или undefined должна вернуться '$0.00'.


// Решение учителя:
// BEGIN
function formatPrice(price?: number | null): string {
  if (price === undefined || price === null) {
    return '$0.00';
  }

  return `$${price.toFixed(2)}`;
}
// END


// Ваше решение:
function formatPrice(numb?: number | null): string {
    if(numb != null && numb != undefined) {
        return `$${numb.toFixed(2)}`
    } else {
        return '$0.00'
    }
}

