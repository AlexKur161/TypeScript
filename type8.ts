export enum ORDERSTATUS {
  Created,
  Paid,
  Shipped,
  Delivered,
}

const order = {
  items: 3,
  status: ORDERSTATUS.Created,
};

function test(order: {items: number, status: number}){
  return order
}


// Реализуйте перечисление ModalStatus с двумя значениями: Opened и Closed
// Реализуйте функцию buildModal(). Он возвращает объект, который описывает модальное окно. Параметры функции:
// Текст, который должен быть внутри окна после инициализации
// Статус, с которым надо создать объект окна
// Функция возвращает объект с двумя полями: text (здесь хранится переданный текст) и status (здесь хранится переданный статус)

enum MODALSTATUS {
  OPENED,
  STATUS
}

function buildModal(text: string, status: MODALSTATUS): {text: string, status: MODALSTATUS} {
 return {
   text: text,
   status: status
 }
}

buildModal('test', MODALSTATUS.OPENED);