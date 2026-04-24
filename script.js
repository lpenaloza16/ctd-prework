// console.log('Hello from script.js');

const container = document.getElementById('data-container');



async function callApp() {

let res = await fetch('https://jsonplaceholder.typicode.com/users') 
let data = await res.json()

let pokeRes = await fetch('https://pokeapi.co/api/v2/pokemon/poliwag');
let pokeData = await pokeRes.json();
     
container.innerHTML = `
        User: ${data[0].name} <br> 
  Pokemon:
  ${pokeData.name}
  <br> 
  <img src="${pokeData.sprites.back_default}">
        
    `;
  // console.log(data[0].name);
  // console.log(pokeData.sprites.back_default);
  return data
}
  callApp()


//need two apis

// https://pokeapi.co/