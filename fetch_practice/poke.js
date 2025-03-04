// const url = 'https://pokeapi.co/api/v2/pokemon/ditto/';
// let results = null;
// async function getPokemon(url) {
//     const results = await fetch(url);
//     if (results.ok) {
//         const data = await results.json();
//         doStuff(data);
//     }
// }

// function doStuff(data) {
//     results = data;
//     console.log("first: ",results);
// }

// getPokemon(url);

// console.log("second: ",results);

const parkInfo = async url =>{
    const response = await fetch(url);
    if(response.ok){
        const data = await response.json();
        console.log(data);
        return data;
    }
}

const url = 'https://developer.nps.gov/api/v1/parks?stateCode=VA&';

parkInfo(url);