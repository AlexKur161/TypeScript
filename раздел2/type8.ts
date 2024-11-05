// Решение учителя:
// BEGIN
function newYearCongratulate(name: string): string;
function newYearCongratulate(year: number, name: string): string;
function newYearCongratulate(data1: string | number, data2?: string): string {
  if (typeof data1 === 'number') {
    return `Hi ${data2}! Happy New Year ${data1}!`;
  }

  return `Hi ${data1}! Happy New Year!`;
}
// END


// Ваше решение:
const newYearCongratulate: {
    (a: number, b: string): string;
    (a: string): string;
}=(a: unknown, b?: unknown): string => {
    if(typeof a === 'string'){
        return `Hi ${a}! Happy New Year!`
    }
    return `Hi ${b}! Happy New Year ${a}!`
}

newYearCongratulate('John'); // Hi John! Happy New Year!
newYearCongratulate(2023, 'Mila'); // Hi Mila! Happy New Year 2023!