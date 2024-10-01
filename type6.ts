// Анаграммы — это слова, которые состоят из одинаковых букв. Например:

// Реализуйте функцию filterAnagrams(), которая находит все анаграммы слова.
// Функция принимает исходное слово и список для проверки — массив.
// А возвращает функция массив всех анаграмм. Если в списке нет анаграммы,
// то возвращается пустой массив:

// Ужасное решение))) sort совсем в голову не пришел
function filterAnagrams(itemStr: string, itemsAr: Array<string>): Array<string>{
  let filterAr: Array<string> = [];
   itemsAr.forEach(item => {
   let cloneItem = itemStr.split('');
     let filterItem = item.split('').filter(sim => {
       if(cloneItem.indexOf(sim) !== -1) {
         cloneItem.splice(cloneItem.indexOf(sim), 1).join('');
         return sim
       }else {
         cloneItem = [''];
       }
     })
     filterItem.length === itemStr.split('').length ? filterAr.push(filterItem.join('')) : filterItem;
   })
   return filterAr;
 }

// Как надо было)))
 function filterAnagrams2(anagram: string, anagrams: string[]): string[] {
  const standard = anagram.split('').sort().join('');
  return anagrams.filter((item) => item.split('').sort().join('') === standard);
}