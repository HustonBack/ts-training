export class Calculator {

    public add(a: number, b: number): number {
        const sum = a + b;
        this.writeToConsole(sum.toString());
        return sum;
    }

    private writeToConsole(text: string): void {
        console.log(text);
    }
}
