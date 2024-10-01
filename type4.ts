// Обязательный параметр, тип указываем через:
function requiredPar(name: string) {
  return name;
}

// Для того чтобы сделать не обязательным добавить ?:
function optional(name: string) {
  return `Hello, ${name}!`;
}

//Когда пишем дефолтное значение параметр становится не обязательным
function defaultPar(name = 'default')  {
  return `Hello efwef feffse, ${name}!`;
}

// Явно указываем тип возвращаемого значения
function returnPar(name: string): string {
  return `${name}!efsfesfsefe`;
}
