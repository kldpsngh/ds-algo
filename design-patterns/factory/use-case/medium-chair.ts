import Chair from "./chair";

export default class MediumChair extends Chair {
    constructor() {
        super();
        this.height = 70;
        this.width = 70;
        this.depth = 70;
    }
}
