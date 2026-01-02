
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


