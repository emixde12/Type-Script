"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const G = require("./Group");
const Point_1 = require("./Point");
const Animales_1 = require("./Animales/Animales");
const Perro_1 = require("./Animales/Perro");
const Caballos_1 = require("./Animales/Caballos");
console.log({ Animales: Animales_1.Animales, Perro: Perro_1.Perro, Caballos: Caballos_1.Caballos });
const point = new Point_1.Point(1, 2);
const group = new G.default(1, "HOLA");
console.log(Point_1.PUNTITO);
console.log(G.defaultGroups.admin);
//# sourceMappingURL=index.js.map