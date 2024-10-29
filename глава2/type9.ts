// Решение учителя:
// BEGIN
function last(value: string | number): string | number {
  if (typeof value === 'number') {
    return value % 10;
  }

  return value[value.length - 1] ?? '';
}
// END


// Ваше решение:
function isString(value: unknown): value  is string {
    return (typeof value === 'string') && (value !== '');
}
function last(par: string) : string
function last(par: number) : number
function last(par: unknown) : unknown {
    if(isString(par)){
        return par.split('').slice(-1)[0]
    }
    if(par === ''){
        return ''
    }
    return Number(String(par).split('').slice(-1)[0])
}
