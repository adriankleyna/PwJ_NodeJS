const currency1 = require('./currency1');
const Currency = require('./currency2');

//moduł math1
const math1 = require('./myMathModule1');
//modulmath2
const Math = require('./myMathModule2');
let numbers = new Math();

console.log('50 zlotych polskich odpowiada następującej ilości Euro:');
console.log(currency1.polishToEuro(50));
console.log('50 zlotych polskich odpowiada następującej ilości Dollara:');
console.log(currency1.polishToDollar(50));
console.log('50 zlotych polskich odpowiada następującej ilości Forinta Węgierskiego:');
console.log(currency1.polishToForint(50));
console.log('50 zlotych polskich odpowiada następującej ilości Franka Szwajcarskiego:');
console.log(currency1.polishToFrank(50));
console.log('50 zlotych polskich odpowiada następującej ilości Koron Szwajcarskich:');
console.log(currency1.polishToKorona(50));

let currency2 = new Currency();
console.log("\nWywołanie obiektowe----------------");
console.log("Euro -> " + currency2.polishToEuro(50));
console.log("Dolary -> " + currency2.polishToDollar(50));
console.log("Forint -> " + currency2.polishToForint(50));
console.log("Frank Szwajcarski -> " + currency2.polishToFrank(50));
console.log("Korona Szwajcarska -> " + currency2.polishToKorona(50));


const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("\nZAD2 - MATEMATYCZNE")
rl.question(`Podaj a `, (a) => {
    rl.question(`Podaj b `, (b) => {
        console.log('\n----------REFERENCYJNY--------------------');
        console.log('Dodawanie: ' + math1.sum(Number(a), Number(b)));
        console.log('Odejmowanie: ' + math1.sub(Number(a), Number(b)));
        console.log('Mnożenie: ' + math1.multiply(Number(a), Number(b)))

        console.log('\n----------OBIEKTOWY--------------------');
        console.log('Dzielenie: ' + numbers.div(Number(a), Number(b)));
        console.log('Potegowanie: ' + numbers.pow(Number(a), Number(b)));

        rl.close();
    });
});



rl.on("close", function () {
    console.log('\nKoniec');
    process.exit(0);
});