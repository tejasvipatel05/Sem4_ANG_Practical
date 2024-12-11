interface Person{
    name: string;
    age: Number;
    email : string;

    getDetail() : void
}
class Employee implements Person{
    name:string;
    age: Number;
    email : string;
    constructor(name:string,age:number,email:string){
        this.name=name;
        this.age=age;
        this.email=email;
    }
    getDetail(): void {
        console.log("Name: ",this.name);
        console.log("Age: ",this.age);
        console.log("Email: ",this.email);
    }
}
let e1 = new Employee("Payal",19,"pkava@gmail.com");
e1.getDetail();