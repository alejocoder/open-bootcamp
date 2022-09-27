import { multiplica, suma } from "./controller.js";
import chalk from 'chalk';

let suma1 = suma(1,2);
console.log(suma);

let suma2 = suma(4,5);
console.log(suma2);

let multipica1= multiplica(suma1,suma2);
console.log(chalk.green(multipica1));