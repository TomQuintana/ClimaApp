import {  inquirerMenu, leerInput, pausa, listPlaces} from './src/helpers/inquirer'
import Search from './src/helpers/search';
import chalk from 'chalk';

const search = new Search; 
let opt:any

console.clear();
console.log('================');
console.log(chalk.bold.cyan('Select an Option'));
console.log('================ \n');

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
      console.log(chalk.bgBlue.bold('\nCity Information\n'));
      console.log(chalk.bold('City:'), chalk.bold.greenBright(placeWeather.name));
      console.log(chalk.bold('Temperatura:'),chalk.bold.yellow(placeWeather.temp));
      console.log(chalk.bold('Minimum:'), chalk.bold.yellow( placeWeather.min ) );
      console.log(chalk.bold('Maximum:'),  chalk.bold.yellow( placeWeather.max ) );
      console.log(chalk.bold('Whats the weather like:'), chalk.bold.yellow(placeWeather.description));     
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


