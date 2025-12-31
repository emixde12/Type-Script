"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let mensaje = "Hola, mundo!";
mensaje = "¡Hola, TypeScript!";
mensaje = "adios";
console.log(mensaje);
console.log(typeof []);
let extinsionDinosaurio = 65500000;
let dinosaurioFavorito = "Tyrannosaurus Rex";
let extintos = true;
function chanchitofelix(config) {
    return config;
}
let animales = ["perro", "feliz,", "felipe"];
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let checks = [];
let nums2 = [];
let tupla = [1, "hola"];
var Talla;
(function (Talla) {
    Talla["Chica"] = "s";
    Talla["Mediana"] = "m";
    Talla["Grande"] = "l";
    Talla["ExtraGrande"] = "xl";
})(Talla || (Talla = {}));
const variable1 = Talla.Grande;
console.log(variable1);
var LoadingState;
(function (LoadingState) {
    LoadingState[LoadingState["Idle"] = 0] = "Idle";
    LoadingState[LoadingState["Loading"] = 1] = "Loading";
    LoadingState[LoadingState["Success"] = 2] = "Success";
    LoadingState[LoadingState["Error"] = 3] = "Error";
})(LoadingState || (LoadingState = {}));
const estado = LoadingState.Success;
const objeto = { id: 1,
    nombre: ' OLA',
    talla: Talla.Mediana,
    direccion: {
        numero: 1,
        calle: "buena vista",
        pais: "México"
    }
};
const arr = [];
const fn = (edad) => {
    if (edad > 17)
        return 'puedes pasar';
    return 'no puedes pasar';
};
function validadEdad(edad, msg) {
    if (edad > 17)
        return 'puedes pasar' + msg;
    return 'no puedes pasar';
}
validadEdad(18, '!!!');
function ErrorUsuario() {
    throw new Error('Error de usuario');
}
//# sourceMappingURL=index.js.map