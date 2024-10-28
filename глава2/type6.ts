// Реализуйте функцию lessonsCount(), которая принимает на вход курс и возвращает количество лекций внутри него:

// Используйте внутри деструктуризацию, чтобы извлечь уроки прямо в параметрах функции.

type TypeCourse = {
  lessons: string[]
}

function lessonsCount({ lessons }: TypeCourse ): number{
  return lessons.length
}

const course = { lessons: ['intro', 'lala'] };
lessonsCount(course); // 2