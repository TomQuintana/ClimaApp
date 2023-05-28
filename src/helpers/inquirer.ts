import select, { Separator } from '@inquirer/select';
import input from '@inquirer/input';
import chalk from 'chalk';

const inquirerMenu = async () => {
  const questions = await select({
    message: '¿What to want to do?\n',
    choices: [
      {
        value: 1,
        name: `${ '1.'} Search City`
      },
      {
        value: 2,
        name: `${ '2.'} Record`
      },
      {
        value: 0,
        name: `${ '0.'} Exit`
      },
    ]
  })

  return questions
}


const pausa = async() => {
  const answer = await input({ message: `Press ${ 'enter'} for continue \n` });
  return answer
}


const leerInput = async() => {
  const value = await input({
    message: 'Please enter a value'
  })
  console.clear();

  return value
}

const listPlaces = async( lugares: string[] ) => {
  
  const choices = lugares.map(( lugar:any, i:number ) => {
    const idx = `${i + 1}.`;

    return {
      value: lugar.id,
      name:  `${ idx } ${ lugar.name }`
    }
  })
  
  const questions = await select({
    message: 'Choose a Place ?',
    choices
  })
  
  return questions
}


export {
  inquirerMenu,
  pausa,
  leerInput,
  listPlaces
}
