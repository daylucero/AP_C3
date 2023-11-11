let mensaje: string = "Hola mundo"

mensaje = "chanchito feliz"

console.log(mensaje)

mensaje = "chau mundo"

let extincionDinosaurios = 76_000_000
let dinosaurioFavorito = "T-Rex"
let extintos: true

function chanchitoFeliz (config: any){
    return config
}

let animales:string[] = ['chanchito', 'feliz', 'felipe']
let nums: number [] = [1,2,3]
let checks: boolean[] = []
let nums2: Array<number> = []

//animales.map(x => x.) // el autocompletado sugiere métodos del tipo de dato
let tupla: [number, string[]] = [1, ['chanchito feliz', 'chanchito Felipe']]

const chica = 's'
const mediana = 'm'
const grande = 'l'
const extragrande = 'xl'

//PascalCase comienzo de cada palabra con mayúscula, lo demás minúscula
enum Talla { Chica = 's', Mediana = 'm', Grande = 'l', ExtraGrande = 'xl' }

const variable1 = Talla.Grande
console.log(variable1)

const enum LoadingState { Idle, Loading, Success, Error}
const estado = LoadingState.Success
type Direccion = {
        numero: number,
        calle: string,
        pais: string
    }
type Persona = {
    readonly id: number, //solamente puede ser de lectura, no podemos escribir sobre ella
    nombre: string,
    talla: Talla,
    direccion: Direccion
}
const objeto: Persona = {
    id: 1, 
    nombre: 'Hola Mundo', 
    talla: Talla.Mediana,
    direccion: {
        numero: 1,
        calle: 'Siempre viva',
        pais: 'Chanchitolandia'
    }
}

const arr: Persona[] = []


//objeto.nombre = 'Hola Mundo'
//nombre?: string  ? -> opcional