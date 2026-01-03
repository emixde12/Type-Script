/* function log<T, V>(a: T, b:V){

    console.log(a,b)
    return b
}



log<number, string>(12, 'dato')
log<string, string>('dato','dato2')

log(1 , 2)
log('hola' , 'Holi') */


// Genericos en Funciones 
/* 
/* function fetchData<T>(recurso:string):Promise<T>{
    const respuesta = await fetch (`${recurso}`)
    return respuesta.json()
}

type User = {
    id : string,
    name: string,
}
async function main (){

    const user = await fetchData<User>('/Usuarios')
        //user.
 
}  */

        //Genericos en Clases

type Computador = {
    encender: ( ) => void,
    apagar: () => void,

}

class Programador <T> {
    computador: T;
    constructor(t: T){
        this.computador = t
    } 
}

const programador = new Programador<Computador>({encender: () =>{}, apagar: () => {}})
const programador1 = new Programador<string>('Holi')
programador1.computador


// Genericos en Intefaces 

interface KeyValue <T, V>{
  key: T,
  value: V,

}

 interface Product{
    id: string,


 }
function fetchProduct(): KeyValue<string, Product>{

    return{
key: 'id de producto',
value: {id: 'id de producto'}
}


}

function fetchStock (): KeyValue<string, number>{

    return{
        key: 'id de producto',
        value: 100
    }
}

// Constraints 

/* interface Usuario {
    id: string,
    name: string,
} */

class Usuario {
    constructor(public id: string){}
}

function print<T extends Usuario>(t: T): T{
    console.log(t);
    return t


}
print({id: 'user_id', name: 'Felipe'})


// Genericos y Herencia

class Estado<T>{
    protected data: T[] = [];

    agregar(t: T): void{
        this.data.push(t)
    }

    getEstado(): T[]{
        return this.data
    }



}

type ObjectId = {
    id: string
}

class EstadoEliminar<T extends ObjectId> extends Estado<T>{
    eliminar (id: string){
        this.data = this.data.filter(x => x.id !== id  )
    }

}


class EstadoUsuarios extends Estado<Usuario>{

    reiniciarContraseña(){

    }
}

// Operador Keyof

type Calendar = {
    id: number,
    fuente: string,
    dueño: string,

}
const calendar: Calendar = {id: 1, fuente: 'Google', dueño: 'YO'}

function getProp<T>(objeto: T, property: keyof T): unknown{
    return objeto[property]
}

getProp<Calendar> (calendar, 'id')
getProp<Calendar> (calendar, 'fuente')


//utility types

type Punto = {
    x: number,
    y: number,
    desc?: string,

}


type PuntoOpcional = Partial<Punto>
type PuntoRequerido = Required<Punto>

const keyVal: Record <string, number> = {

    'soy un string' : 42
}

type kv = {[key: string]: number}
const p: Omit<Punto, 'desc' | 'y'>={
    x: 1
    // y: 2
}

const p1: Pick<Punto, 'x' | 'y'> = {

    x: 1,
    y: 2,
}

const readOnlyP: Readonly<Punto> = {
    x: 1,
    y: 2,
    desc: 'soy una descripción'
}