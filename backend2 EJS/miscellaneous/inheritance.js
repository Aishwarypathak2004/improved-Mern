class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    sayHello(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
class Student extends Person{
    constructor(name, age, grade){
        super(name, age); // Call the constructor of the parent class
        this.grade = grade; // Add a new property specific to student
    }

    sayHello(){
        super.sayHello(); // Call the parent class method
        console.log(`I am in grade ${this.grade}.`); // Add additional functionality
    }
}
class Teacher extends Person{
    constructor(name, age, subject){
        super(name, age); // Call the constructor of the parent class
        this.subject = subject; // Add a new property specific to teacher
    }

    sayHello(){
        super.sayHello(); // Call the parent class method
        console.log(`I teach ${this.subject}.`); // Add additional functionality
    }

}
