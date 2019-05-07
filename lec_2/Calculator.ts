export class Calculator {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public add(a: number, b: number): number {
        const sum = a + b;
        this.writeToConsole(sum.toString());
        return sum;
    }

    private writeToConsole(text: string): void {
        console.log(text);
    }
}

export const MAX_INT = 100000000000;


// { Calculator, MAX_INT }
