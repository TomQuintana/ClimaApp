import fs from 'fs'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
import dotenv from 'dotenv'
import chalk from 'chalk';

dotenv.config()

export default class Search {

  historial:Array<string> = [];
  dbPath = './database.json'

  constructor() {
    this.readDB()
  }

  async city(place: string) {
    
    if (place == '') {
      return console.log(chalk.bgRed('Please Enter a Value'));
    }

    try {
      const limit = 5;
      const {data} = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${place}&limit=${limit}&appid=${process.env.APPID_WEATHER}`);

      return data.map( (place: any) => ({
        name: `${ place.name }, ${place.country}`,
        lat: place.lat,
        lon: place.lon,
        id: uuidv4()
      }))

    } catch (error) {
      console.log(error);
    }

  }

  async cityWeather ( id:any, places:Array<Object>) {
    let lat = ''
    let lon = ''
    let name = ''

    places.forEach(( element:any ) => {
      if (element.id == id) {
        name = element.name
        lat = element.lat
        lon = element.lon
      }
    });

    const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.APPID_WEATHER}`);

    let description = ''
    data.weather.forEach(( element: any ) => {
      return description = element.description
    }); 

    return {
      description,
      temp: Math.round( data.main.temp - 273),
      max: Math.round( data.main.temp_max - 273),
      min: Math.round( data.main.temp_min - 273),
      name
    }
  }

  addHistory( lugar:string ) {
    if(this.historial.includes(lugar.toLocaleLowerCase())) {
      console.log('Ya existe');

      return
    }

    this.historial = this.historial.splice(0,5);

    this.historial.unshift( lugar.toLocaleLowerCase() );

    this.saveDB()
  }

  saveDB() {
    const payload = {
      historial: this.historial
    }

    fs.writeFileSync(this.dbPath, JSON.stringify(payload))
  }

  readDB() {
    if(! fs.existsSync(this.dbPath)) return;
    const info = fs.readFileSync(this.dbPath, {encoding: 'utf-8'})
    const data = JSON.parse(info)

    this.historial = data.historial;
  }
}
