// Задание
// Реализуйте функцию lastIndex(str, char), которая возвращает индекс последнего вхождения символа в строку или null, если такого символа нет.

// BEGIN
function lastIndex(str: string, char: string): number | null {
  const index = str.lastIndexOf(char);
  return index === -1 ? null : index;
}
// END

// Ваше решение:
type indexItem = number | null

function lastIndex(st: string, sym: string): indexItem{
    let indexSym = st.lastIndexOf(sym);
    return indexSym === -1 ? null : indexSym;
}
