let euro = 0.23;
let dollarUSA = 0.28;
let forintWegry = 80.10;
let frankSzwajcarski = 0.24;
let koronaNorweska = 2.38;


function roundTwoDecimals(amount) {
    return Math.round(amount * 100) / 100;
}

exports.polishToEuro = function (polish) {
    return roundTwoDecimals(polish * euro);
}

exports.polishToDollar = function (polish) {
    return roundTwoDecimals(polish * dollarUSA);
}

exports.polishToForint = function (polish) {
    return roundTwoDecimals(polish * forintWegry);
}

exports.polishToFrank = function (polish) {
    return roundTwoDecimals(polish * frankSzwajcarski);
}

exports.polishToKorona = function (polish) {
    return roundTwoDecimals(polish * koronaNorweska);
}

