const url = "https://pokeapi.co/api/v2/pokemon/6";

const urlList = "https://pokeapi.co/api/v2/pokemon";

let results = null;
async function getPokemon(url, theThing) {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    theThing(data);
  }
}

function doStuff(data) {
    // console.log(data);
    const outputSection = document.createElement("section");
    outputSection.setAttribute("id", "output");
    outputSection.innerHTML = `
        <h2>${data.name.charAt(0).toUpperCase()+data.name.substring(1)}</h2>
        <img src="${data.sprites.front_default}" alt="${data.name}"/>
    `;
    document.body.appendChild(outputSection);
}

const doStuffList = (data) => {
    // console.log(data);
    const outputList = document.createElement('ul');
    outputList.setAttribute('id', 'outputList');
    const pokeList = sortPokemon(data.results);
    pokeList.forEach(pokemon=>{
        const listItem = document.createElement('li');
        listItem.innerHTML = pokemon.name.charAt(0).toUpperCase()+pokemon.name.substring(1);
        outputList.appendChild(listItem);
    });
    document.body.appendChild(outputList);
}

const sortPokemon = list => {
    list.sort((a,b)=>{
        if(a.name<b.name){
            return -1;
        } else if(a.name>b.name){
            return 1;
        } else {
            return 0;
        }
    });
    return list;
}

getPokemon(url, doStuff);
getPokemon(urlList, doStuffList);
console.log("second: ", results);