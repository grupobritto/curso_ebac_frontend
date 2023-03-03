var isRaining: boolean = false; // True or False
var age: number = 26; // Inteiro
var height: number = 1.70; // Quebrado

const Nationality: string = 'Brazilian';
const Friend: string[] = ['Jiovane'];
const Friends: Array<string> = ['Jiovane','Kevin'];
const Notes: ReadonlyArray<number> = [2, 4, 6, 8, 10]; // Nao pode ser usado .push por ser Read Only.
const List: [name: string, isRaining: boolean, age: number] = ['Mauricio', true, 26];

var ageAna: number | string = 26;
ageAna = '26 anos';

var API: any;
API = 10;
API = true;
API = [1, 2, 3, 4, 5, 6];
API = 'string';