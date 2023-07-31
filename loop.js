// প্রিভিওউস প্রেচটিস
// var ar = ["masum", "sowrab"];
// ar.unshift("tuhser");
// console.log(ar);

// ar.shift();
// console.log(ar);

// var positionIndex = ar.indexOf("sowrab");
// console.log(positionIndex);

// ar[0]='rahat';
// console.log(ar);
// প্রিভিওউস প্রেচটিস

// module 18 now
// while loop
// var rostGiven = 0;
// while(rostGiven < 9){
//     console.log(rostGiven);
//     console.log('New mama rost kaw tmi');

//     rostGiven++;
// }
// another one sample
// odd number

/**
 * var rostGiven=1
while(rostGiven <= 10){
    console.log(rostGiven);
    rostGiven+=2;

}
 */

// even number
/**
 * var rostGiven=0
while(rostGiven <=10){
    rostGiven =+2;
    console.log(rostGiven);

}
 */

// for loop
/**
 * for (var i = 0; i <= 20; i += 2) {
  console.log(i);
  console.log("rost kaw");
}
 */

// array element print
/**
 * var numbers = [
  100, 200, 300, 20, 40, 28, 90, 19, 129, 29, 3923, 392, 23923, 923823, 23832,
  32,
];
for (var i = 0; i < numbers.length; i++) {
  number = numbers[i];
  console.log(number);
}

 */

// array with name
/**
 * var items = [
  "masum",
  "sowrab",
  "tusher",
  "rasel",
  "rabbi",
  "shahrier",
  "fahim",
];
for (var i = 0; i < items.length; i++) {
  item = items[i];
  console.log(item);
}
 */

// reverse loop

/**
 * //number reverse
 * var num=10;
while(num > 1){
    console.log(num);
    num--;
}
// array name element reverse
var items=["masum",
"sowrab",
"tusher",
"rasel",
"rabbi",
"shahrier",
"fahim"];
for(var i=items.length;i>=0;i--){
    item=items[i]
    console.log(item);
}
 */
//

/**
//  * testing input
 * const prompt =require("prompt-sync")();
var a=parseInt(prompt("Enter First Number: "));
var b=parseInt(prompt("Enter Second Number: "));
console.log(a+b);

 */

// prectice problem solution with from user input
/**
const prompt =require("prompt-sync")();
var monGive=parseInt(prompt("Ammu taka dice = "));
var applePrice=parseInt(prompt("apple price = "));
var orangePrice=parseInt(prompt("orange price= "));
var dukandarDice=monGive-(applePrice+orangePrice);
console.log("dukaner firot dise: "+dukandarDice);
 */

// prectice
/**
 *displaying 39 time 
 var one=39;
for (var i=0; i<=one; i++){
console.log(i);
  console.log('Ajek amr mon valo nei ');
}
 * 
 */

// displaying numbers between 58 to 98
/**
  var one=98;
for(var i=58; i<one; i++){
   console.log(i);
}
 */

// even numbers between 412 to 456
/**
 var one = 456;
for (var i = 412; i < one; i+=2) {
  console.log(i);
}
 */

// odd numbers between 581 to 623

/**
var one = 623;
for (var i = 581; i < one; i+=2) {
  console.log(i);
}
 */
// displaying array using loop
/**
var items=['html','css','tailwind', 'daisyui','bootstrap','javascript'];
console.log(items.length);

for(i=0;i<items.length;i++){
  console.log(items[i]);

}
 */
// loop will stop when find number 48
/*
var number=30;
while(number<86){
  if(number==48){
    break;
  }
  console.log(number);;
  number++
}
*/
// display the price if its lower then 200

/**
 var arr=[100,150,199,120,198,200,2020,230,235];
for(var i=0;i<arr.length;i++){
  if(arr[i]<200){
    console.log(arr[i]);
  }
}
 */

var moneyHave=55000;
if(moneyHave>=80000){
console.log('you can bouy iphone');}
else if(moneyHave>=60000){
  
  console.log('you can buy lenevo');

}




else if(moneyHave>=20000){
  console.log('you have to use mobile ');
}
else{
  console.log('do nothing and sleep');
}