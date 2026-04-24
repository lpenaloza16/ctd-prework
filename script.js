console.log('Hello from script.js');


async function callApp() {

let res = await fetch('https://jsonplaceholder.typicode.com/posts') 
let data =res.json()
     
  
  return data
}
console.log(callApp())


//need two apis

https://pokeapi.co/