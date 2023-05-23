var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "axios"], function (require, exports, axios_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    axios_1 = __importDefault(axios_1);
    class Busqueda {
        constructor() {
            this.historial = ['Barcelona'];
        }
        async ciudad(lugar = '') {
            console.log('Lugar', lugar);
            // search city
            const { data } = await axios_1.default.get('http://api.openweathermap.org/geo/1.0/direct?q=Barcelona&limit=5&appid=71bd496a0780bcd5c29fd5c670d2c300');
            console.log(data);
            // TODO: search by lat anf log fot take clima
        }
    }
    exports.default = Busqueda;
});
//# sourceMappingURL=busquedas.js.map