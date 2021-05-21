const R = require('ramda');

const xs = [{a: 1}, {a: 2}, {a: 3}];
var cari = R.find(R.propEq('a', 2))(xs); 

console.log(cari);