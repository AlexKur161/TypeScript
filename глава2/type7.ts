// BEGIN
function max(first: number, ...rest: number[]): number {
  return Math.max(first, ...rest);
}
// END


// Ваше решение:
function max(oneNumb: number, ...numb: number[])  {
    return Math.max(oneNumb, ...numb);
}

max(1,2,3);
max(234);
