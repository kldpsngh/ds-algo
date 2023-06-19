// links to read - https://techaffinity.com/blog/oops-concepts-in-java/
// https://www.javatpoint.com/runtime-polymorphism-in-java

/**
 *
 * It is an object-oriented approach that allows the developer to assign and perform several actions
 *  using a single function. For example, “+” can be used for addition as well as string
 * concatenation. Static Polymorphism is based on Method Overloading, and Dynamic Polymorphism
 * is based on Method Overriding.
 *
 */

//Example Program of Static Polymorphism with Method Overloading

//Method Overloading

class CubeArea {
    area(x: number): number {
        return 6 * x * x;
    }
}

class SphereArea {
    area(x: number): number {
        return 4 * 3.14 * x * x;
    }
}

class CylinderArea {
    area(x: number, y: number): number {
        return x * y;
    }
}

// Example Program of Dynamic Polymorphism with Method Overriding

class Shape {
    draw(): void {
        console.log("Your favorite shape");
    }
    numberOfSides(): void {
        console.log("side = 0");
    }
}
class Square extends Shape {
    draw(): void {
        console.log("SQUARE ");
    }
    numberOfSides(): void {
        console.log("side = 4 ");
    }
}

class Pentagon extends Shape {
    draw(): void {
        console.log("PENTAGON");
    }
    numberOfSides(): void {
        console.log("side = 5");
    }
}

class Hexagon extends Shape {
    draw(): void {
        console.log("HEXAGON");
    }
    numberOfSides(): void {
        console.log("side = 6");
    }
}

export function main() {
    // Method Overloading

    let ca: CubeArea = new CubeArea();
    let sa: SphereArea = new SphereArea();
    let cia: CylinderArea = new CylinderArea();

    console.log("Surface area of cube = " + ca.area(1));
    console.log("Surface area of sphere= " + sa.area(2));
    console.log("Surface area of cylinder= " + cia.area(3, 4));

    // Method Overriding

    let s: Square = new Square();
    s.draw();
    s.numberOfSides();

    let p: Pentagon = new Pentagon();
    p.draw();
    p.numberOfSides();

    let h: Hexagon = new Hexagon();
    h.draw();
    h.numberOfSides();
}
