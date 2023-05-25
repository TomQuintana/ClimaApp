import {  inquirerMenu, leerInput, pausa, listarLugares } from './src/helpers/inquirer'
import Busqueda from './src/helpers/busquedas';

const busquedas = new Busqueda
let opt:any

console.log('=====================');
console.log('Seleccione una Opcion');
console.log('===================== \n');

while (opt !== 0) {
  opt = await inquirerMenu()

  switch(opt) {
    case 1 : 
      // Show message
      const cityValue = await leerInput()

      // search City
      const place = await busquedas.ciudad(cityValue)
      
      const putPlace = await listarLugares(place);
      console.log(putPlace);
      
      

    break;
  }

  if ( opt !== 0 ) await pausa();
}


