import select, { Separator } from '@inquirer/select';
import input from '@inquirer/input';

// import { input } from '@inquirer/prompts';

const inquirerMenu = async () => {
  const questions = await select({
    message: '¿Qué desea hacer?',
    choices: [
      {
        value: 1,
        name: `${ '1.'} Buscar ciudad`
      },
      {
        value: 2,
        name: `${ '2.'} Historial`
      },
      {
        value: 0,
        name: `${ '0.'} Salir`
      },
    ]
  })

  return questions
}


const pausa = async() => {

  const answer = await input({ message: `Presione ${ 'enter'} para continuar` });
  console.log(answer);
}


const leerInput = async() => {
  const value = await input({
    message: 'Please enter a value'
  })
  
}

const listarLugares = async( lugares: string[] ) => {
  
  const choices = lugares.map(( lugar:any, i:number ) => {
    const idx = `${i + 1}.`;

    return {
      value: lugar.id,
      name:  `${ idx } ${ lugar.name }`
    }
  })
  
  console.log({ choices });
  
  
  const questions = await select({
    message: '¿Qué desea hacer?',
    choices
  })
  
  return questions
}


export {
  inquirerMenu,
  pausa,
  leerInput,
  listarLugares
}
