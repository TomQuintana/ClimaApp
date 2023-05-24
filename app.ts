import {  inquirerMenu, pausa } from './src/helpers/inquirer'

let opt:any

console.log('=====================');
console.log('Seleccione una Opcion');
console.log('===================== \n');

while (opt !== 0) {
  opt = await inquirerMenu()

  if ( opt !== 0 ) await pausa();
}


