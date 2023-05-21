import { leerInput } from './src/helpers/inquirer.js'

const main = async () => {
  const text = await leerInput('Hola: ')
  console.log(text)
}

main()
