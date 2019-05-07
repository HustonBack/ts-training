import {Calculator} from './lec_2/Calculator'


export class Claculator {

    public add(a: number, b: number): number {
        const sum = a + b;
        this.writeToConsole(sum.toString());
        return sum;
    }

    private writeToConsole(text: string): void {
        console.log(text);
    }
}

type Argument = {
    market: 'uk' | 'be' | 'nl',
    language: 'en' | 'nl' | 'fr' | Array<'en' | 'nl' | 'fr'>;
}



function init(config: Argument): void {
    //.....
}

init({
    market: 'nl',
    language: ['en'],
});







class Some implements ISome{

    private readonly a: number;

    constructor(a: number) {
        this.a = a;
    }

    public add(a: number, b: number): number {
        this.a = b;
        return a+b;
    }

}

interface ISome {
    add(a: number, b: number): number;
}













const array = [5, 8, 9, 1];
const newArray = array.map((argument, ) => {

    return 'claculator';
});

console.log(newArray);








