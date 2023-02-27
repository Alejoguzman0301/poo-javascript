// let persona = {
//     nombre: 'Jaime',
//     apellido: 'Zapata',
//     edad: 31,
//     direccion: {
//         ciudad: 'Medellin',
//         barrio: 'Belen',
//         coordenadas: {
//             latitud: '12.13',
//             altitud: null
//         }
//     }
// }
// console.log(persona)
// console.log(persona.apellido)
// console.log(persona.nombre)
// console.log(persona.edad)
// console.log(persona.direccion.barrio)
// console.log(persona.direccion.coordenadas.latitud)
// console.log(persona.direccion.coordenadas.altitud)

// console.log(persona);

let personas = [];
for (let index = 0; index < 2; index++) {
  let nombre = prompt("Ingrese su nombre: ");
  let apellido = prompt("Ingrese su apellido: ");
  let edad = prompt("Ingrese su edad: ");
  let ciudad = prompt("Ingrese su ciudad: ");
  let barrio = prompt("Ingrese su barrio: ");
  let persona = {
    nombre,
    apellido,
    edad,
    direccion: {
      ciudad,
      barrio,
    },
  };
  personas.unshift(persona);
}

// for (let index = 0; index < personas.length; index++) {
//     console.log(personas[index])    
// }


personas.forEach((persona)=>{
    console.log(persona)
})

personas.map((persona)=>{
    console.log(persona)
})

// for (const persona of personas) {
//     console.log(persona)
// }

let nuevasPersonasDos =personas.forEach((persona)=>{
    console.log(persona)
})

let nuevasPersonas = personas.map((persona)=>{
    console.log(persona)
})

console.log('Trabajando desde una nueva rama')
console.log('Trabajando desde una nueva rama')
console.log('Trabajando desde una nueva rama')
console.log('Trabajando desde una nueva rama')



