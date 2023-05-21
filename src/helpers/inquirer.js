import inquirer from 'inquirer';
import colors from 'colors';

const preguntas = [
  {
    type: 'list',
    name: 'opcion',
    message: '¿Qué desea hacer?',
    choices: [
      {
        value: 1,
        name: `${ '1.'.green } Buscar ciudad`
      },
      {
        value: 2,
        name: `${ '2.'.green } Historial`
      },
      {
        value: 0,
        name: `${ '0.'.green } Salir`
      },
    ]
  }
];


const leerInput = async( message ) => {

  const question = [
    {
      type: 'input',
      name: 'desc',
      message,
      validate( value ) {
        if( value.length === 0 ) {
          return 'Por favor ingrese un valor';
        }
        return true;
      }
    }
  ];

  const { desc } = await inquirer.prompt(question);
  return desc;
}



export {
  leerInput,
}
