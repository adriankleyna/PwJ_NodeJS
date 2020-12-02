//Zad1
// const wait = 3000;
// console.log("Początek skryptu");
// setTimeout(function (){
//    console.log("Upłynęły minimum 3 sek...")
// }, wait);
// console.log("koniec skryptu");


//Zad2
// let fs = require("fs");
// let data = fs.readFileSync('package.json');
//
// console.log("Początek skryptu");
// console.log(data.toString());
// console.log("Koniec skryptu");


// let fs = require("fs");
// console.log("Początek skryptu.");
// fs.readFile('package.json', function (err, data) {
//     if (err) return console.error(err);
//     console.log(data.toString());
// });
// console.log("Koniec skryptu.");

//Zad3
// const http = require('http');
// let path = require("path");
// const util = require("util");
// const v8 = require("v8");
// const hostname = '127.0.0.1';
// const port = 8888;
// const server = http.createServer((request, response) => {
//     response.statusCode = 200;
//     response.setHeader('Content-Type', 'text/plain');
//     response.end('Hello, from node.js serwer !\n');
// });
// server.listen(port, hostname, () => {
//     util.log(v8.getHeapStatistics());
//     console.log(path.basename(__filename));
//     util.log(path.join(__dirname, 'uploads','images'));
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

//Zad4
const cryptoRandomString = require('crypto-random-string');

const http = require('http');
const hostname = '127.0.0.1';
const port = 8888;
const server = http.createServer(function(request, response) {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Witaj, z serwera node.js !\n\n' +
        'Uzycie bilbioteki CryptoRandomString\n\n' +
        cryptoRandomString({length: 15}));
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    console.log("\nCrypto-Random-String generuje losowy ciąg znaków, zakodowany\n" +
        "\nMożemy wybrać długość (length) oraz typ (type) kodowania\n" +
        "\n przykładowe typy to base64, url-safe, numeric, distingushable, ascii-printable, alphanumeric, abc");
});