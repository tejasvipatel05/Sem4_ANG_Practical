console.log("Hello World");

// type Student = {
//     name : string,
//     age : number,
//     email ?: string
// };

// let stu1 : Student = {name: "Tejasvi", age: 19}
// console.log("Name: ",stu1.name);
// console.log("Age: ",stu1.age);
// console.log("email: ",stu1.email);


let age : number | string = 19;
console.log("Age as number: ",age);
age = "nineteen";
console.log("Age as string: ",age);