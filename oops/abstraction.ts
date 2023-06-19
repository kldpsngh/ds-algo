/**
 *
 *
 * Abstraction means showing only the relevant details to the end-user and hiding the irrelevant
 * features that serve as a distraction. For example, during an ATM operation, we only answer
 * a series of questions to process the transaction without any knowledge about what happens
 * in the background between the bank and the ATM.
 *
 */

abstract class Bike {
    constructor() {
        console.log("The Street Bob. ");
    }
    abstract drive(): void;
    weight() {
        console.log("Light on its feet with a hefty : 630 lbs.");
    }
}

class HarleyDavidson extends Bike {
    drive() {
        console.log("Old-school yet relevant.");
    }
}

export function main() {
    let obj: Bike = new HarleyDavidson();
    obj.drive();
}
