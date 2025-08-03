//Requête à l'API PokeAPI avec le nom du pokemon :
//https://pokeapi.co/api/v2/pokemon/jigglypuff(name of pokemon)
//Accéder à son nom, son poid et l’url de son image dans la réponse JSON

//fetch API
async function getPokemonInfo() {
    //get a pokemon name from user n transform to lowercase n no espace
    let name = document.getElementById('pokemonName').value.trim().toLowerCase(); 
    try{
        //fetch() call API to get pokemon's info
        let answer = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)

        //if the name is wrong reply...
        if(!answer.ok)
            throw new Error("Pokemon not found");

        //if ok, transform json to js.data
        let data = await answer.json();

        //print info in console!
        console.log(data);

        //show infos on html
        document.getElementById('pokemonInfo').innerHTML = `
            <h3>${data.name.toUpperCase()}</h3>
            <p>Weight: ${data.weight}</p>
            <img src="${data.sprites.front_default}" alt="${data.name}">
        `;
    //how to deal with "wrong"
    }catch(error){
        console.error('error');
        document.getElementById('pokemonInfo').innerHTML = `<p style="color:red;">Pokemon not found!</p>`;
    }
}