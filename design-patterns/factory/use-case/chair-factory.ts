import SmallChair from "./small-chair";
import BigChair from "./big-chair";
import MediumChair from "./medium-chair";
import IChair from "./chair";

export default class ChairFactory {
    static getChair(chairType: string): IChair {
        if (chairType === "BigChair") return new BigChair();
        else if (chairType === "MediumChair") return new MediumChair();
        else return new SmallChair();
    }
}
