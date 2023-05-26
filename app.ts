import {  inquirerMenu, leerInput, pausa, listarLugares } from './src/helpers/inquirer'
import Busqueda from './src/helpers/busquedas';


const search = new Busqueda
let opt:any

console.log('=====================');
console.log('Seleccione una Opcion');
console.log('===================== \n');

while (opt !== 0) {
  opt = await inquirerMenu()

  switch(opt) {
    case 1 : 
      const cityValue = await leerInput()

      const place = await search.ciudad(cityValue)
      
      const placeId = await listarLugares(place);

      const placeWeather = await search.cityWeather(placeId, place)

      console.clear();
      console.log('\nCity Information\n');
      console.log('Ciry:', placeWeather.name );
      console.log('Temperatura:', placeWeather.temp);
      console.log('Minimum:', placeWeather.min );
      console.log('Maximum:', placeWeather.max );
      console.log('Whats the weather like:',  placeWeather.description );     

      break;
  }

  if ( opt !== 0 ) await pausa();
}


