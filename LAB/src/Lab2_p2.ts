class Circle{
    pi:number = 3.14;
    area(r:number):number {  
        return this.pi*(r*r);
    }
}
let c = new Circle();
console.log("Are of circle is: ",c.area(2));