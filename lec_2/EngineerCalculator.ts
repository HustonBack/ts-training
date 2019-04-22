import {Calculator} from "./Calculator";

export class EngineerCalculator extends Calculator{

    public add(a: number, b: number): number {
        // const sum = super.add(a, b);
        return Math.floor(a + b);
    }

}
