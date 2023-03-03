function calcArea(base: number, altura: number): number 
{
    return base * altura;
}

function somar(...number: number[]): void 
{
    //number.reduce();
    console.log(number);
}

function test(): string | number 
{
    if(10 > 5 ) 
    {
        return 'Verdadeiro'
    } else 
    {
        return 5;
    }
}

const areaCalc = (base: number, altura: number): number => base * altura;
const result = test();