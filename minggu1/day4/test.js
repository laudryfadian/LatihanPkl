const _ = require('underscore');
var num = [3, 6, 9];
var kata = ["Laury", "Iza", "Fadian"];
var listNum = '';
var listKata = '';

_.each(num, function(x) { listNum += x * 5 + ' ' });
_.map(kata, function(y) { listKata += y + ' '});
console.log(listNum);
console.log(listKata);