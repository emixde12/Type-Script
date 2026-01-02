interface Animal{

   name: string
     caminar(): void
     onomatopeya(): string

}
 

class Caballo implements Animal{
name: string = 'Caballo'
caminar(){


    console.log("El caballo esta caminando")
}
 onomatopeya(): string {
    return'hin'
}





}

class Cerdito implements Animal{
name: string = 'Cerdito'
caminar(){


    console.log("El Cercito esta caminando")
}
 onomatopeya(): string {
    return'oing'
}





}

class Perro implements Animal{
    name: string = 'Firu'
    caminar(): void {
        console.log("El perro esta caminando")
    }
    onomatopeya(): string {
       return'guau'
    }


}

class DiccionarioUsuario{
[id: string]: string

}
let diccionarioUsuario = new DiccionarioUsuario()
diccionarioUsuario['a1' ] =  'usuario1'
diccionarioUsuario['a2' ] =  'usuario2'

console.log(diccionarioUsuario)