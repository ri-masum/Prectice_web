// prectice one
var fruits = ["apple", "banana", "orange"];
var positionIndex = fruits.indexOf("banana");
console.log("banana positin is " + positionIndex);
fruits[1] = "mango";
fruits.pop();
fruits.push("watermelon");
console.log(fruits);
console.log("____________________________________________________");

// prectice two

var masum = 85;
var tom = 66;
var jane = 95;
var peter = 56;
var john = 40;
// for masum
if (masum >= 80) {
  console.log("Masum got an A");
} else if (masum >= 60) {
  console.log("Masum got a B");
} else if (masum >= 50) {
  console.log("Masum Got a C");
} else if (masum >= 40) {
  console.log("Masum got a D");
} else if (masum <= 39) {
  console.log("Masum is Fail nad Got  F");
}
// for tom
if (tom >= 80) {
  console.log("tom got an A");
} else if (tom >= 60) {
  console.log("tom got a B");
} else if (tom >= 50) {
  console.log("tom Got a C");
} else if (tom >= 40) {
  console.log("tom got a D");
} else if (tom <= 39) {
  console.log("Tom is Fail nad Got  F");
}

// for jane
if (jane >= 80) {
  console.log("jane got an A");
} else if (jane >= 60) {
  console.log("jane got a B");
} else if (jane >= 50) {
  console.log("jane Got a C");
} else if (jane >= 40) {
  console.log("jane got a D");
} else if (jane <= 39) {
  console.log("jane is Fail nad Got  F");
}
// for peter
if (peter >= 80) {
  console.log("peter got an A");
} else if (peter >= 60) {
  console.log("peter got a B");
} else if (peter >= 50) {
  console.log("peter Got a C");
} else if (peter >= 40) {
  console.log("peter got a D");
} else if (peter <= 39) {
  console.log("peter is Fail nad Got  F");
}
// for john
if (john >= 80) {
  console.log("john got an A");
} else if (john >= 60) {
  console.log("john got a B");
} else if (john >= 50) {
  console.log("john Got a C");
} else if (john >= 40) {
  console.log("john got a D");
} else if (john <= 39) {
  console.log("john is Fail nad Got  F");
}
console.log("____________________________________________________");

// prectice three

var one = 13;
var two = 79;
var three = 45;

if (one > two && one > three) {
  console.log("one is largest");
} else if (two > one && two > three) {
  console.log("Two is largest");
} else if (three > one && three > two) {
  console.log("three is largest");
}
console.log("____________________________________________________");

// prectice four
var side1 = 9;
var side2 = 8;
var side3 = 9;
if (side1 == side2 || side1 == side3) {
  console.log("Isosceles");
} else if (side2 == side3 || side2 == side1) {
  console.log("Isosceles");
} else {
  console.log("No Ispsceles");
}
console.log("____________________________________________________");
