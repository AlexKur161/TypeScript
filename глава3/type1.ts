// BEGIN
function unique(coll: (number | string)[]): (number | string)[] {
  const init: (number | string)[] = [];

  return coll.reduce(
    (acc, curr) => (acc.includes(curr) ? acc : [...acc, curr]),
    init,
  );
}
// END

export default unique;
Ваше решение:
function unique(arr: (string | number)[]): (number | string)[] {
    const arNew: (string|number)[] = [];
   arr.forEach((item) => {
    	arNew.includes(item) ? item : arNew.push(item);
    })
    return arNew
}

export default unique;