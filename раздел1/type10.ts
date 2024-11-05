// Реализуйте функцию getParams(), которая принимает на вход
// строку запроса (query string) и возвращает параметры в виде объекта:

function getParams(params: string){
  const objParams: any = {};
  params.split('&').forEach(item => {
     let [key, value] = item.split('=');
     objParams[key] = value;
  })
  return objParams;
}

console.log(getParams('name=hexlet&count=3&order=asc'));