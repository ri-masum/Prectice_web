var eggPrice=500;
var onion=50;
eggPrice = eggPrice + 500;

console.log(eggPrice+onion)
var totalPrice= onion + eggPrice;

var priceDifference=   eggPrice -onion;
console.log(priceDifference)


var priceGet = eggPrice / onion;
console.log(priceGet)

var multiplication=eggPrice * onion;
console.log(multiplication);
console.log('');


// string
var firstName = 'masum';
var lastName = 'ahmed';

var fullName =firstName +' ' +lastName+ '20';
console.log(  fullName);

var one='30';
var two=10;
console.log(one);
console.log( typeof two);
// convert into integer
var convert=parseInt(one)
console.log( convert);
console.log(typeof convert);
// undefine
var masum;
console.log(typeof masum);

// this is a prb in js that in this tow number its shows vary large number which we need to convet like this
var num1=0.1;
var num2=0.2;
var sum=num1+num2
sum=sum.toFixed(1)
sum=parseFloat(sum)
console.log(sum);

// 
var mangoes=11;
var persion=3;
console.log(mangoes/persion);