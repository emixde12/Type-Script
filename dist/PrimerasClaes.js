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
const objeto = {
    id: 1,
    nombre: " OLA",
    talla: Talla.Mediana,
    direccion: {
        numero: 1,
        calle: "buena vista",
        pais: "México",
    },
};
const arr = [];
const fn = (edad) => {
    if (edad > 17)
        return "puedes pasar";
    return "no puedes pasar";
};
function validadEdad(edad, msg) {
    if (edad > 17)
        return "puedes pasar" + msg;
    return "no puedes pasar";
}
validadEdad(18, "!!!");
function ErrorUsuario() {
    throw new Error("Error de usuario");
}
let puntaje = 98;
puntaje = "cien";
let animal = { id: 1, estado: "", name: "" };
function sumaDos(n) {
    if (typeof n === "number") {
        return n + 2;
    }
    return parseInt(n) + 2;
}
sumaDos("2");
let persona = "feliz";
const product = {
    created_at: "",
    modified_at: "",
    name: "",
};
const nDeFibo = 3;
function toNumber(s) {
    if (!s) {
        return 0;
    }
    return parseInt(s);
}
const n = toNumber(null);
function getUser(id) {
    if (id < 0) {
        return null;
    }
    return {
        id: 1,
        name: "Felipe",
        created_at: new Date(),
    };
}
const user = getUser(1);
console.log("usuario", user === null || user === void 0 ? void 0 : user.created_at);
const difficulty = 0;
const user2 = {
    username: "chanchito infeliz",
    difficulty: difficulty !== null && difficulty !== void 0 ? difficulty : 1,
};
console.log(user2);
function LaLa(x) {
    if (typeof x == "string") {
    }
    if (typeof x == "number") {
    }
}
function procesa(algo) {
    if (typeof algo == "string") {
        return algo.toUpperCase();
    }
    if (typeof algo == "number") {
        return algo.toString();
    }
    if (algo instanceof String) {
        return algo.toString();
    }
    return "";
}
//# sourceMappingURL=PrimerasClaes.js.map