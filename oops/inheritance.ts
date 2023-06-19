/**
 * 
 * 
 * 
Inheritance is the process by which one class inherits the functions and properties of another class. The main function of inheritance is the reusability of code. Each subclass only has to define its features. The rest of the features can be derived directly from the parent class.

Single Inheritance – Refers to a parent-child relationship where a child class extends the parent class features. Class Y extends Class X.

Multilevel Inheritance – Refers to a parent-child relationship where a child class extends another child’s class. Class Y extends Class X. Class Z extends Class Y.

Hierarchical Inheritance – This refers to a parent-child relationship where several child classes extend one class. Class Y extends Class X, and Class Z extends Class X.

Multiple Inheritance – Refers to a parent-child relationship where one child class is extending from two or more parent classes. JAVA does not support this inheritance.
 * 
 */

class Animal {
    habit(): void {
        console.log("I am nocturnal!! ");
    }
}

class Mammal extends Animal {
    nature(): void {
        console.log("I hang upside down!! ");
    }
}

class Bat extends Mammal {
    hobby(): void {
        console.log("I fly !! ");
    }
}

export function main() {
    let b: Bat = new Bat();
    b.habit();
    b.nature();
    b.hobby();
}
