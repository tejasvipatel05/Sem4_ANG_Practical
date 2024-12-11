"use strict";
class Circle {
    constructor() {
        this.pi = 3.14;
    }
    area(r) {
        return this.pi * (r * r);
    }
}
let c = new Circle();
console.log("Are of circle is: ", c.area(2));
