import inquirer from 'inquirer';
//import colors from 'colors';

const questions = [
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


const inquirerMenu = async() => {
  console.log('===========================')
  console.log('Seleccione una Opcion')
  console.log('===========================\n')

  const {opcion} = await inquirer.prompt(questions)
  return opcion
}


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

const pausa = async() => {
    
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${ 'enter'.green } para continuar`
        }
    ];

    console.log('\n');
    await inquirer.prompt(question);
}


export {
  leerInput,
  inquirerMenu,
  pausa
}
