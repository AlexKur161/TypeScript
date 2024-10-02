function doSomething2(user) {
    return user;
}
var user1 = { name: 'Petr', age: 8 };
function getOlderUser(user1, user2) {
    if (user1.age > user2.age) {
        return user1;
    }
    if (user1.age < user2.age) {
        return user2;
    }
    return null;
}
