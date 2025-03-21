const pokemonlist = document.getElementById("pokemon-list")
async function getpokemondata(pokemonid) {
    try {
        let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonid}`)
        let pokemon = await res.json()
        return pokemon
    } catch(error) {
        console.error(error.message)
        return null
    }
}
function displaypokemon(pokemon) {
    const pokemoncard = document.createElement("div")
    pokemoncard.classList.add("pokemon-card")//Se agregó una clase para agregar estilos en CSS.
    pokemoncard.innerHTML = `
    <img src = "${pokemon.sprites.front_default}">
    <h3>${pokemon.name}</h3>
    <p> ID: ${pokemon.id}</p>
    `
    pokemonlist.appendChild(pokemoncard)
}
async function loadpokedex() {
    for(let i=1; i<=100; i++) {
        let pokemon = await getpokemondata(i)
        displaypokemon(pokemon)
    }  
}
loadpokedex()