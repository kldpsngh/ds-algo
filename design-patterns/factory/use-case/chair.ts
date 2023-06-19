import { dimension } from "./dimension";

// A Chair Interface
interface IChair {
    height: number;
    width: number;
    depth: number;
    getDimensions(): dimension;
}

// The Chair Base Class
export default class Chair implements IChair {
    height = 0;
    width = 0;
    depth = 0;

    getDimensions(): dimension {
        return {
            height: this.height,
            width: this.width,
            depth: this.depth
        };
    }
}

//client ...
// const CHAIR = ChairFactory.getChair('SmallChair')
// console.log(CHAIR.getDimensions())
