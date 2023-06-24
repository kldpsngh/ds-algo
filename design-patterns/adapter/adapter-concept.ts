// Adapter Concept Sample Code

interface IA {
    methodA(): void;
}

interface IB {
    methodB(): void;
}

class A implements IA {
    methodA(): void {
        console.log("method A");
    }
}

class B implements IB {
    methodB(): void {
        console.log("method B");
    }
}

class ClassBAdapter implements IA {
    private classBObject: IB;

    constructor() {
        this.classBObject = new B();
    }

    methodA(): void {
        this.classBObject.methodB();
    }
}

// The Client
// Before the adapter I need to test the objects class to know which
// method to call.
const ITEMS = [new A(), new B()];
ITEMS.forEach((item) => {
    if (item instanceof B) {
        item.methodB();
    } else {
        item.methodA();
    }
});

// After creating an adapter for ClassB I can reuse the same method
// signature as ClassA (preferred)
const ADAPTED = [new A(), new ClassBAdapter()];
ADAPTED.forEach((item) => {
    item.methodA();
});
