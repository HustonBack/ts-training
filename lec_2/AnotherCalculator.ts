import {ICalculator} from "./ICalculator";

export class AnotherCalculator implements ICalculator{

    public add(a: number, b: number): number {
        return a + b;
    }
}
