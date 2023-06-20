// Abstract Factory Concept Sample Code
import { FactoryA, IProductA } from "./factory-a";
import { FactoryB, IProductB } from "./factory-b";

interface IProduct extends IProductA, IProductB {}

export default class AbstractFactory {
    // The Abstract Factory Concrete Class
    static createObject(factory: string): IProduct | undefined {
        try {
            if (["aa", "ab", "ac"].indexOf(factory) > -1) return FactoryA.getObject(factory[1]);
            if (["ba", "bb", "bc"].indexOf(factory) > -1) return FactoryB.getObject(factory[1]);
            throw new Error("No Factory Found");
        } catch (ex) {
            console.log(ex);
        }
    }
}
