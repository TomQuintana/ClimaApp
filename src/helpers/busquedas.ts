import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
import dotenv from 'dotenv'

dotenv.config()

export default class Busqueda {
  
    historial:Array<string> = [];

  constructor() {
  }

  async ciudad(place: any) {
    
    try {
      const limit = 5;
      const {data} = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${place}&limit=${limit}&appid=${process.env.APPID_WEATHER}`);

      return data.map( (place: any) => ({
        name: `${ place.name }, ${place.state}, ${place.country}`,
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
    console.log(data);
    
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

  agregarHistorial( lugar:string ) {

    if(this.historial.includes(lugar)) {
      return
    }

    this.historial = this.historial.splice(0,5);

    this.historial.unshift( lugar.toLocaleLowerCase() );

    // Grabar en DB
  }
}
