let math = function () {}

math.prototype.div = function (a, b) {
    return a / b;
}

math.prototype.pow = function (a, b) {
    return Math.pow(a, b);
}

module.exports = exports = math;
