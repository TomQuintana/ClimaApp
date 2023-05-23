var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "inquirer"], function (require, exports, inquirer_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.pausa = exports.inquirerMenu = exports.leerInput = void 0;
    inquirer_1 = __importDefault(inquirer_1);
    //import colors from 'colors';
    const questions = [
        {
            type: 'list',
            name: 'opcion',
            message: '¿Qué desea hacer?',
            choices: [
                {
                    value: 1,
                    name: `${'1.'.green} Buscar ciudad`
                },
                {
                    value: 2,
                    name: `${'2.'.green} Historial`
                },
                {
                    value: 0,
                    name: `${'0.'.green} Salir`
                },
            ]
        }
    ];
    const inquirerMenu = async () => {
        console.log('===========================');
        console.log('Seleccione una Opcion');
        console.log('===========================\n');
        const { opcion } = await inquirer_1.default.prompt(questions);
        return opcion;
    };
    exports.inquirerMenu = inquirerMenu;
    const leerInput = async (message) => {
        const question = [
            {
                type: 'input',
                name: 'desc',
                message,
                validate(value) {
                    if (value.length === 0) {
                        return 'Por favor ingrese un valor';
                    }
                    return true;
                }
            }
        ];
        const { desc } = await inquirer_1.default.prompt(question);
        return desc;
    };
    exports.leerInput = leerInput;
    const pausa = async () => {
        const question = [
            {
                type: 'input',
                name: 'enter',
                message: `Presione ${'enter'.green} para continuar`
            }
        ];
        console.log('\n');
        await inquirer_1.default.prompt(question);
    };
    exports.pausa = pausa;
});
//# sourceMappingURL=inquirer.js.map