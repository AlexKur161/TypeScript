// TypeScript не позволяет обращаться к несуществующим свойствам
let test = {
  firstName: 'test'
}
// test.age = 1; ошибка

function doSomething(user: { firstName: string, pointsCount?: number }) {
  return user.firstName;
}

doSomething(test);

// Реализуйте функцию isComplete(), которая принимает на вход курс и определяет,
// завершен ли он. Завершенным считается курс, в который добавлено четыре или более уроков:

const course = {
  name: 'Java',
  lessons: ['variables', 'functions', 'conditions'],
};
function isComplete(course: {name: string, lessons: string[]}): boolean  {
  return course.lessons.length >= 4 ? true : false
}
isComplete(course); // false