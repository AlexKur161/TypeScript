// Реализуйте namespace Company, в котором экспортируется функция isEmployeeEmail().
//  Функция принимает почту и домен. Если емейл пользователя содержит указанный домен, то функция возвращает true:

namespace Company {
  export function isEmployeeEmail(email: string, domain: string): boolean {
    return email.endsWith(`@${domain}`);
  }
}