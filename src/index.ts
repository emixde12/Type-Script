let mensaje :string = "Hola, mundo!"

mensaje = "¡Hola, TypeScript!"

mensaje = "adios"
console.log(mensaje)
console.log(typeof[])

let extinsionDinosaurio = 65_500_000
let dinosaurioFavorito = "Tyrannosaurus Rex"
let extintos = true 

function chanchitofelix (config: any){
    return config
}

let animales = ["perro","feliz,", "felipe"]
let nums: number[] = [1,2,3,4,5,6,7,8,9]
let checks: boolean[] = []
let nums2: Array<number> = []

// animales.map(x => x.) el autocompletado sugiere metodos del tipo de dato
let tupla:[number, string]= [1, "hola"]

enum Talla {Chica = 's', Mediana = 'm', Grande = 'l', ExtraGrande = 'xl'}
const variable1 = Talla.Grande
console.log(variable1)

const enum  LoadingState {Idle, Loading, Success, Error}

const estado = LoadingState.Success



// OBJETOS
type Direccion = {
numero: number,
calle: string,
pais: string,


}



type Persona = {
    id: number,
    nombre: string,
    talla: Talla,
    direccion: Direccion,
}
const objeto: Persona = 
{id: 1, 
    nombre: ' OLA', 
    talla: Talla.Mediana,
    direccion:  {
        numero: 1,
        calle: "buena vista",
        pais: "México"
    }
}

const arr:Persona[] = []



//funciones
const fn: (a: number)=> string = (edad: number) =>{

    if (edad > 17)
        return 'puedes pasar'
    return 'no puedes pasar'
}

function validadEdad (edad: number, msg: string) {

    if (edad > 17)
        return 'puedes pasar' + msg

    return 'no puedes pasar'

}


validadEdad(18, '!!!')



// Never
function ErrorUsuario (): never{
    throw new Error('Error de usuario')


}
