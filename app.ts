import {  inquirerMenu, leerInput, pausa, listPlaces} from './src/helpers/inquirer'
import Search from './src/helpers/search';
import chalk from 'chalk';

const search = new Search; 
let opt:any

console.log('=====================');
console.log(chalk.blue('Seleccione una Opcion'));
console.log('===================== \n');

while (opt !== 0) {
  opt = await inquirerMenu()

  switch(opt) {
    case 1 : 
      const cityValue = await leerInput()

      const place = await search.city(cityValue)
      
      const placeId = await listPlaces(place);
      
      if (placeId == '0' || placeId == undefined) continue;

      const placeWeather = await search.cityWeather(placeId, place)
      

      search.addHistory(placeWeather.name)

      console.clear();
      console.log(chalk.bold.blue('\nCity Information\n'));
      console.log('City:', chalk.bold.greenBright(placeWeather.name));
      console.log('Temperatura:', chalk.green(placeWeather.temp));
      console.log('Minimum:', chalk.green( placeWeather.min ) );
      console.log('Maximum:', chalk.green( placeWeather.max ) );
      console.log('Whats the weather like:', chalk.green(placeWeather.description));     
      console.log('\n');
      

      break;

    case 2:
      search.historial.forEach(( place:string , i:any ) => {
        const idx = `${i + 1}.`
        console.log(`${idx} ${place}`);
      })
  }

  if ( opt !== 0 ) await pausa();
}


