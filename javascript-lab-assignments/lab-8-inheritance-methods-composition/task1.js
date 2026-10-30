
 // Name: Mayank Gupta
 // Roll No.: 2510303296
 // Assignment: 8, Task 1

class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return "Hi, I am " + this.name;
    }
}

class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
}

const teacher1 = new Teacher("Anita", "Maths");
console.log(teacher1.greet());
