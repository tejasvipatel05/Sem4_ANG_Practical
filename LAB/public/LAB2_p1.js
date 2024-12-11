"use strict";
class Employee {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    getDetail() {
        console.log("Name: ", this.name);
        console.log("Age: ", this.age);
        console.log("Email: ", this.email);
    }
}
let e1 = new Employee("Payal", 19, "pkava@gmail.com");
e1.getDetail();
