"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Programador {
    constructor(t) {
        this.computador = t;
    }
}
const programador = new Programador({ encender: () => { }, apagar: () => { } });
const programador1 = new Programador('Holi');
programador1.computador;
function fetchProduct() {
    return {
        key: 'id de producto',
        value: { id: 'id de producto' }
    };
}
function fetchStock() {
    return {
        key: 'id de producto',
        value: 100
    };
}
class Usuario {
    constructor(id) {
        this.id = id;
    }
}
function print(t) {
    console.log(t);
    return t;
}
print({ id: 'user_id', name: 'Felipe' });
class Estado {
    constructor() {
        this.data = [];
    }
    agregar(t) {
        this.data.push(t);
    }
    getEstado() {
        return this.data;
    }
}
class EstadoEliminar extends Estado {
    eliminar(id) {
        this.data = this.data.filter(x => x.id !== id);
    }
}
class EstadoUsuarios extends Estado {
    reiniciarContraseña() {
    }
}
const calendar = { id: 1, fuente: 'Google', dueño: 'YO' };
function getProp(objeto, property) {
    return objeto[property];
}
getProp(calendar, 'id');
getProp(calendar, 'fuente');
const keyVal = {
    'soy un string': 42
};
const p = {
    x: 1
};
const p1 = {
    x: 1,
    y: 2,
};
const readOnlyP = {
    x: 1,
    y: 2,
    desc: 'soy una descripción'
};
//# sourceMappingURL=genericos.js.map