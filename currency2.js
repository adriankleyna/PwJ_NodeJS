let euro = 0.23;
let dollarUSA = 0.28;
let forintWegry = 80.10;
let frankSzwajcarski = 0.24;
let koronaNorweska = 2.38;

let Currency = function (polish) {
    this.polish = polish;
}

Currency.prototype.roundTwoDecimals = function (amount) {
    return Math.round(amount * 100)/100;
}

Currency.prototype.polishToEuro = function (polish) {
    return this.roundTwoDecimals(polish * euro);
}

Currency.prototype.polishToDollar = function (polish) {
    return this.roundTwoDecimals(polish * dollarUSA);
}

Currency.prototype.polishToForint = function (polish) {
    return this.roundTwoDecimals(polish * forintWegry);
}

Currency.prototype.polishToFrank = function (polish) {
    return this.roundTwoDecimals(polish * frankSzwajcarski);
}

Currency.prototype.polishToKorona = function (polish) {
    return this.roundTwoDecimals(polish * koronaNorweska);
}


module.exports = exports = Currency;