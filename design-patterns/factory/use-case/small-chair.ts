import Chair from "./chair";

export default class SmallChair extends Chair {
    constructor() {
        super();
        this.height = 60;
        this.width = 60;
        this.depth = 60;
    }
}
