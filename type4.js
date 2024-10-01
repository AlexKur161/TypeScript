// Обязательный параметр, тип указываем через:
function requiredPar(name) {
    return name;
}
// Для того чтобы сделать не обязательным добавить ?:
function optional(name) {
    return "Hello, ".concat(name, "!");
}
//Когда пишем дефолтное значение параметр становится не обязательным
function defaultPar(name) {
    if (name === void 0) { name = 'default'; }
    return "Hello efwef feffse, ".concat(name, "!");
}
// Явно указываем тип возвращаемого значения
function returnPar(name) {
    return "".concat(name, "!efsfesfsefe");
}
