//promesas
// let promesa = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     reject("No se cumplió la promesa");
//   },2000)
// })
// console.warn(promesa);
//Tres momentos Pending resolve y reject
const heroesMarvel = [
  { 
      nombre: "Iron Man",
      id: 1,
      poder: "Tecnología avanzada y armadura de combate"
  },
  { 
      nombre: "Spider-Man",
      id: 2,
      poder: "Agilidad sobrehumana y sentido arácnido"
  },
  { 
      nombre: "Thor",
      id: 3,
      poder: "Fuerza sobrehumana, control del trueno y martillo mágico"
  },
  { 
      nombre: "Hulk",
      id: 4,
      poder: "Fuerza descomunal y regeneración rápida"
  },
  { 
      nombre: "Black Widow",
      id: 5,
      poder: "Maestría en combate cuerpo a cuerpo y habilidades de espionaje"
  },
  { 
      nombre: "Captain America",
      id: 6,
      poder: "Fuerza, agilidad y habilidades de liderazgo"
  },
  { 
      nombre: "Black Panther",
      id: 7,
      poder: "Fuerza, agilidad y habilidades de lucha mejoradas por la tecnología de Wakanda"
  },
  { 
      nombre: "Doctor Strange",
      id: 8,
      poder: "Maestría en artes místicas y manipulación de la realidad"
  },
  { 
      nombre: "Captain Marvel",
      id: 9,
      poder: "Vuelo, fuerza sobrehumana y energía cósmica"
  },
  { 
      nombre: "Scarlet Witch",
      id: 10,
      poder: "Manipulación de la realidad y habilidades telequinéticas"
  }
];

const buscarHeroeId=(id)=>heroesMarvel.find(heroe=>heroe.id==id);
// console.log(buscarHeroeId(100));

const buscarHeroe=(id)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      const heroe = buscarHeroeId(id);
      if (heroe) {
        resolve(heroe)
      }else{
        reject("No se encontro el heroe con ese id")
      }
    },2000)

  })
}
buscarHeroe(100)
.then((response)=>console.log(response))
.catch(error=>console.error(error));

let url ="https://backend-clase.onrender.com/api/products";
let principal = document.querySelector("#principal");
fetch(url)
.then(response=>response.json())
.then(data=>{
//capturamos el elemento del dom

data.productos.forEach((producto)=>{
  principal.innerHTML+=`
  <li> <img src="${producto.src}">${producto.name}</li>`;
})
})
.catch(error=>console.error(error))

fetch("https://pokeapi.co/api/v2/pokemon/")
.then(response=>response.json())
.then(data=>{
  data.results.forEach(((p,i)=>{
    principal.innerHTML+=`
    <div class="pokemon" id="${i+1}">
    <h2>${p.name} </h2>
      <button onclick="mostrar(${i+1})">${i+1}</button>
    </div>
    
    `
  }))
  console.log(data.results)})
.catch(error=>console.log(error))
 function mostrar(id) {
    let url ="https://pokeapi.co/api/v2/pokemon/"+id;
    fetch(url)
    .then(respuesta=>respuesta.json())
    .then(data=>{
      data.abilities.forEach((a,index)=>{
        console.log(a.ability.name);
       
      })
      console.log(data.abilities)
    })
    .catch(error=>console.log(error))
 }





