"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Caballo {
    constructor() {
        this.name = 'Caballo';
    }
    caminar() {
        console.log("El caballo esta caminando");
    }
    onomatopeya() {
        return 'hin';
    }
}
class Cerdito {
    constructor() {
        this.name = 'Cerdito';
    }
    caminar() {
        console.log("El Cercito esta caminando");
    }
    onomatopeya() {
        return 'oing';
    }
}
class Perro {
    constructor() {
        this.name = 'Firu';
    }
    caminar() {
        console.log("El perro esta caminando");
    }
    onomatopeya() {
        return 'guau';
    }
}
class DiccionarioUsuario {
}
let diccionarioUsuario = new DiccionarioUsuario();
diccionarioUsuario['a1'] = 'usuario1';
diccionarioUsuario['a2'] = 'usuario2';
console.log(diccionarioUsuario);
//# sourceMappingURL=interfaces.js.map