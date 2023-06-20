// FactoryA Sample Code

export interface IProductA {
    name: string;
}

class ConcreteProduct implements IProductA {
    name = "";
}

class ConcreteProductA extends ConcreteProduct {
    constructor() {
        super();
        this.name = "FactoryA:ConcreteProductA";
    }
}

class ConcreteProductB extends ConcreteProduct {
    constructor() {
        super();
        this.name = "FactoryA:ConcreteProductB";
    }
}

class ConcreteProductC extends ConcreteProduct {
    constructor() {
        super();
        this.name = "FactoryA:ConcreteProductC";
    }
}

export class FactoryA {
    static getObject(someProperty: string): IProductA {
        try {
            if (someProperty === "a") return new ConcreteProductA();
            else if (someProperty === "b") return new ConcreteProductB();
            else if (someProperty === "c") return new ConcreteProductC();
            else throw new Error("Class not found");
        } catch (ex) {
            console.log(ex);
        }
        return new ConcreteProduct();
    }
}
