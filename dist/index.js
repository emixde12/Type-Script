"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Personaje {
    constructor(id, name, level, _hp) {
        this.id = id;
        this.name = name;
        this.level = level;
        this._hp = _hp;
    }
    subirNivel() {
        this.level = this.level + 1;
        return this.level;
    }
    cambiarHP(cantidad) {
        this._hp = this._hp + cantidad;
        return this._hp;
    }
    get hp() {
        return this._hp;
    }
    static agregarPersonaje() {
        Personaje.equipo++;
    }
    static getEquipo() {
        return Personaje.equipo;
    }
}
Personaje.equipo = 1;
const personaje = new Personaje(1, 'Felipe', 1, 100);
personaje.cambiarHP(-10);
const personaje1 = new Personaje(2, 'Chanchito feliz', 1, 100);
Personaje.agregarPersonaje();
console.log(Personaje.getEquipo());
//# sourceMappingURL=index.js.map