import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';

export default class Busqueda {
  
  constructor() {
  }

  async ciudad(lugar: any) {

    try {

      let objCity: Array<any> = []
      const {data} = await axios.get('http://api.openweathermap.org/geo/1.0/direct?q=Barcelona&limit=5&appid=71bd496a0780bcd5c29fd5c670d2c300')
      
      return data.map( (place: any) => ({
        name: `${ place.name }, ${place.state}, ${place.country}`,
        id: uuidv4()
      }))
  
    } catch (error) {
      console.log(error);
      
    }
    
    // TODO: search by lat anf log fot take clima
    
  }
}
