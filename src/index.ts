// let mensaje :string = "Hola, mundo!"

// mensaje = "¡Hola, TypeScript!"

// mensaje = "adios"
// console.log(mensaje)
// console.log(typeof[])

// let extinsionDinosaurio = 65_500_000
// let dinosaurioFavorito = "Tyrannosaurus Rex"
// let extintos = true 

// function chanchitofelix (config: any){
//     return config
// }

// let animales = ["perro","feliz,", "felipe"]
// let nums: number[] = [1,2,3,4,5,6,7,8,9]
// let checks: boolean[] = []
// let nums2: Array<number> = []

// // animales.map(x => x.) el autocompletado sugiere metodos del tipo de dato
// let tupla:[number, string]= [1, "hola"]

// enum Talla {Chica = 's', Mediana = 'm', Grande = 'l', ExtraGrande = 'xl'}
// const variable1 = Talla.Grande
// console.log(variable1)

// const enum  LoadingState {Idle, Loading, Success, Error}

// const estado = LoadingState.Success



// // OBJETOS
// type Direccion = {
// numero: number,
// calle: string,
// pais: string,


// }



// type Persona = {
//     id: number,
//     nombre: string,
//     talla: Talla,
//     direccion: Direccion,
// }
// const objeto: Persona = 
// {id: 1, 
//     nombre: ' OLA', 
//     talla: Talla.Mediana,
//     direccion:  {
//         numero: 1,
//         calle: "buena vista",
//         pais: "México"
//     }
// }

// const arr:Persona[] = []



// //funciones
// const fn: (a: number)=> string = (edad: number) =>{

//     if (edad > 17)
//         return 'puedes pasar'
//     return 'no puedes pasar'
// }

// function validadEdad (edad: number, msg: string) {

//     if (edad > 17)
//         return 'puedes pasar' + msg

//     return 'no puedes pasar'

// }


// validadEdad(18, '!!!')



// // Never
// function ErrorUsuario (): never{
//     throw new Error('Error de usuario')


// }


// let puntaje: number | string = 98
// puntaje = "cien"

// type Animal = {
//     id: number,
//     estado: string,

// }

// type Usuario = {

//     id: number,
//     name: string,


// }
// let animal: Usuario | Animal = {id: 1, estado: '', name: ''}

// function  sumaDos (n: number | string): number{
//     if (typeof n === 'number'){

//         return n+2
//     }
//  return parseInt(n) +2

// }

// sumaDos('2')


// let persona: number | string = 'feliz'

// type Audit = {
//     created_at: string,
//     modified_at: string,
// }
// type Product = {
//     name: string,
// }

// const product: Audit & Product = {
//     created_at: '',
//     modified_at:'',
//     name:''



// }

// type Fibo = 0| 1 | 3 | 5
// const nDeFibo: Fibo = 3 

// function toNumber (s: string | null | undefined){
//     if ( !s ){

//         return 0
//     }
//     return parseInt(s)


// }

// const n = toNumber(null)


// function getUser(id: number){
//     if (id <0){
//        return null

//     }

//     return {
// id: 1,
// name:'Felipe',
// created_at: new Date(),



//     }


// }

// const user = getUser(1)
// console.log('usuario', user?.created_at)


// //nullish coalescing operator
// const difficulty: number| null = 0
// const user2 = {
//     username: "chanchito infeliz",
//     difficulty: difficulty ?? 1,

// }
// console.log(user2)


// //Type assertions

// const elem: any = null
// const elem1 = elem as number

// const input = <HTMLInputElement> document.getElementById('username')


// // Type narrowing


// function LaLa (x: string | number){
// if (typeof x == 'string'){


//     //x.
// }

// if (typeof x=='number'){

//     //x.
// }

// }

// // type unknown
// function procesa(algo: unknown){

// if (typeof algo == 'string'){
// return algo.toUpperCase()

// }

// if (typeof algo == 'number'){
// return algo.toString()

// }

// if (algo instanceof String){


// }

//     algo.hacerCosas()
//     algo.otrascosas()
//     algo.nosequeMas()

// }


// //clases con  TypeScript

class Personaje {

profesion?: string
private static equipo: number = 1   
constructor(
     public  readonly id:number ,
     public  name: string, 
     public level: number, 
     private _hp:number)
     {



}
 
subirNivel(): number{
    this.level = this.level +1
    return this.level
}

cambiarHP(cantidad:number):number {
this._hp = this._hp +cantidad


return this._hp


}

get hp(): number{
    return this._hp
}

static agregarPersonaje(): void{
    Personaje.equipo++
}

static getEquipo(): number{
    return Personaje.equipo
}

}

const personaje = new Personaje(1, 'Felipe', 1, 100)
personaje.cambiarHP(-10)



const personaje1 = new Personaje(2, 'Chanchito feliz', 1, 100)
Personaje.agregarPersonaje()

console.log(Personaje.getEquipo())


