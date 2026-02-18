import  * as G from "./Group"
import {Point, PUNTITO }from "./Point"
import { Animales } from "./Animales/Animales";
import { Perro } from "./Animales/Perro";
import { Caballos } from "./Animales/Caballos";

console.log({Animales, Perro, Caballos});

const point = new Point(1,2)

const group = new G.default ( 1, "HOLA")
console.log(PUNTITO)
console.log(G.defaultGroups.admin)