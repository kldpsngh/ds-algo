/**
 *
 * Encapsulation is a means of binding data variables and methods together in a class.
 * Only objects of the class can then be allowed to access these entities.
 * This is known as data hiding and helps in the insulation of data.
 *
 *
 */

class Encapsulate {
    private name: string;
    private height: number;
    private weight: number;

    getHeight() {
        return this.height;
    }

    getName() {
        return this.name;
    }

    getWeight() {
        return this.weight;
    }

    setHeight(height: number): void {
        this.height = height;
    }
    setWeight(weight: number): void {
        this.weight = weight;
    }

    setName(name: string): void {
        this.name = name;
    }
}

export function main() {
    let obj: Encapsulate = new Encapsulate();
    obj.setName("Abi");
    obj.setWeight(70);
    obj.setHeight(178);

    console.log("My name: " + obj.getName());
    console.log("My height: " + obj.getWeight());
    console.log("My weight " + obj.getHeight());
}
