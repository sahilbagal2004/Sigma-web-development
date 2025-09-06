console.log("I am a tutorial on loops in JavaScript");

let a= 1;


for (let i = 0; i < 100; i++) {
    console.log(a + i);
}

let object = {
    name: "harry",
    section: "A",
    rollno: 1
};
for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        console.log( key,element);
    }
}   
// for (const element of Object.values(object)) {
//     console.log(element);
for (const element of Object.entries(object)) {
    console.log(element[0], element[1]);
}
// }

let arr = [1,2,3,4,5,6,7,8,9];
for (const element of arr) {
    console.log(element);

}

arr.forEach((element) => {
    console.log(element);
});     