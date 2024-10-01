// Анаграммы — это слова, которые состоят из одинаковых букв. Например:
// Реализуйте функцию filterAnagrams(), которая находит все анаграммы слова.
// Функция принимает исходное слово и список для проверки — массив.
// А возвращает функция массив всех анаграмм. Если в списке нет анаграммы,
// то возвращается пустой массив:
// Ужасное решение))) sort совсем в голову не пришел
function filterAnagrams(itemStr, itemsAr) {
    var filterAr = [];
    itemsAr.forEach(function (item) {
        var cloneItem = itemStr.split('');
        var filterItem = item.split('').filter(function (sim) {
            if (cloneItem.indexOf(sim) !== -1) {
                cloneItem.splice(cloneItem.indexOf(sim), 1).join('');
                return sim;
            }
            else {
                cloneItem = [''];
            }
        });
        filterItem.length === itemStr.split('').length ? filterAr.push(filterItem.join('')) : filterItem;
    });
    return filterAr;
}
// Как надо было)))
function filterAnagrams2(anagram, anagrams) {
    var standard = anagram.split('').sort().join('');
    return anagrams.filter(function (item) { return item.split('').sort().join('') === standard; });
}
