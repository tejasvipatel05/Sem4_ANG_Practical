// Type Assertion
let here:any;
here = 'This is a statement'
console.log("Type is: ",typeof(here));
console.log("Value is: ",here);
console.log("Length is: ",<string>here.length);

here = 10;
console.log("Type is: ",typeof(here));
console.log("Value is: ",here);
console.log("Number is: ",<number>here);