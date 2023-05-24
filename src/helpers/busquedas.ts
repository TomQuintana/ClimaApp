import axios from 'axios'

export default class Busqueda {

  historial = ['Barcelona']

  constructor() {
  }

  async ciudad(lugar = '') {
    console.log('Lugar', lugar)

    // search city
    const {data} = await axios.get('http://api.openweathermap.org/geo/1.0/direct?q=Barcelona&limit=5&appid=71bd496a0780bcd5c29fd5c670d2c300')
    console.log(data)

    // TODO: search by lat anf log fot take clima
    
  }
}
