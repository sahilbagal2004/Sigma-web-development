function nice(name) {
    console.log("Hey " + name + " you are nice.");
    console.log("Hey " + name + " you are bad.");
    console.log("Hey " + name + " you are good.");
    console.log("Hey " + name + " you are sad.");
}
function sum(a, b) {
    console.log(a + b);
    return a + b;
}
result1 = sum(5, 10);
result2 = sum(5, 15);
result3 = sum(5, 17);

console.log("The sum is: " + result1);
console.log("The sum is: " + result2);
console.log("The sum is: " + result3);
nice("John");

const func1 = (x)=>{
    console.log("I am an arrow function " + x);
}
func1(34);
const func2 = (x)=>{
    console.log("I am an arrow function " + x);
}
func2(67);
const func3 = (x)=>{
    console.log("I am an arrow function " + x);
}
func3(89);
const func4 = (x)=>{
    console.log("I am an arrow function " + x);
}

