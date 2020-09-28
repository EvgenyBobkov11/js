var User = /** @class */ (function () {
    function User(userId, userName) {
        this.id = userId;
        this.name = userName;
    }
    User.prototype.getInfo = function () {
        return "id:" + this.id + " name:" + this.name;
    };
    return User;
}());
var tom = new User(1, "Tom");
console.log(tom.getInfo());
tom.id = 4;
var alice = new User(2, "Alice");
console.log(alice.getInfo());
