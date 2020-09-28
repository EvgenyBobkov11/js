function mathOp(x, y, operation) {
    var result = operation(x, y);
    return result;
}
var operationFunc;
operationFunc = function (a, b) {
    return a + b;
};
console.log(mathOp(10, 20, operationFunc));
operationFunc = function (a, b) {
    return a * b;
};
console.log(mathOp(10, 20, operationFunc));
//# sourceMappingURL=App.js.map