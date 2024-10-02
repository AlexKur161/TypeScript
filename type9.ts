type User = {
  firstName: string;
  pointsCount: number;
}

function doSomething2(user: User) {
  return user;
}


// Типы можно задавать для любых типов данных, например, для простых:

type SomeType = string;

// А также для составных:

// union тип из трех возможных значений
type SomeType2 = string | number | null;

// Функция
type Countable3 = (coll: number[]) => number

// Описание типа функции вне объекта и внутри отличается.
// Когда функция записывается самостоятельно, используется формат стрелочной функции:

type Countable = (coll: number[]) => number
// Внутри типа, который описывает объект, формат меняется на используемый для обычных свойств:

type User2 = {
  firstName: string;
  pointsCount: number;
  count(coll: number[]): number;
}
// Но это не касается колбеков, которые могут быть использованы внутри:

type User3 = {
  firstName: string;
  pointsCount: number;
  // Типы взяты для примера
  count(coll: (v: string) => string): number;
}

// Реализуйте функцию getOlderUser(), которая принимает на вход двух
// пользователей и возвращает того, который старше. Если пользователи являются ровесниками, то возвращается null:
type User4 = {
  name: string,
  age:number
}
const user1 = { name: 'Petr', age: 8 };

function getOlderUser(user1: User4, user2: User4): User4 | null {
  if(user1.age > user2.age){
    return user1;
  }
  if(user1.age < user2.age){
    return user2;
  }
  return null
}