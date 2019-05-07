import BaseClass, {MAX_INT} from "./Calculator";


export class EngineerCalculator extends BaseClass{

    private ght: number;

    constructor(name: number, ght: number) {
        super(name.toString());
        this.ght = ght;
    }

}
