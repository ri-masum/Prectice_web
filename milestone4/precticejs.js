// harry's mom give him 1000 taka and asked him to buy some oranges and apples . 
// Write a program to help harry calculate how much money the shopkeeper will return


var momGiveMoney=1000;
console.log('Mom Give total = '+momGiveMoney);
var apple=200;
console.log('Apple Price = '+apple);
var orange=300;
console.log('Orange Price = '+apple);

var totalSpend=apple+orange;
console.log('Total Sprend = '+totalSpend);


var shopOwnerReturn=momGiveMoney-totalSpend;
console.log("ShopOwner Will retutn = "+shopOwnerReturn);

console.log('________________________________________________');


// write a program ot calculate marks of math boi chemistry  physics bangla of a student 
// Write a program to calculate the avarage marks of the fice subjects respectivly 
// output: print the result in 2 decimal places.


var math=75.25;
var boi= 65;
var  chem=80;
var phy =35.45;
var ban=99.50;

var totalMarks=math+boi+chem+phy+ban;

console.log('Total Marks = '+ totalMarks);

var avgMarks= totalMarks / 5;
avgMarks = avgMarks.toFixed(2);
avgMarks = parseFloat(avgMarks)
console.log('Average Marks = '+ avgMarks);


console.log('________________________________________________');

// combine two string in one line 

var firstInput='i am going to be ';
var lastLine='an awesome web developer'
var combined=firstInput+' '+lastLine
console.log(combined);

console.log('________________________________________________');

//  reminder 
var givenNumber=119;
var smallNumber=5;
var remain=givenNumber%5;
console.log('remain = '+remain);
console.log('________________________________________________');
console.log(17%5);
