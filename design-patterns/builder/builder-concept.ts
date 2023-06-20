// Builder Concept Sample Code
class Product {
    parts: string[] = [];
}

interface IBuilder {
    buildPartA(): this;
    buildPartB(): this;
    buildPartC(): this;
    getResult(): Product;
}

class Builder implements IBuilder {
    // The Concrete Builder
    product: Product;
    constructor() {
        this.product = new Product();
    }
    buildPartA(): this {
        this.product.parts.push("a");
        return this;
    }
    buildPartB(): this {
        this.product.parts.push("b");
        return this;
    }
    buildPartC(): this {
        this.product.parts.push("c");
        return this;
    }
    getResult(): Product {
        return this.product;
    }
}

export default class Director {
    // The Director, building a complex representation
    static construct() {
        "Constructs and returns the final product";
        return new Builder().buildPartA().buildPartB().buildPartC().getResult();
    }
}

// The Client
// const PRODUCT1 = Director.construct()
// console.log(PRODUCT1.parts)
