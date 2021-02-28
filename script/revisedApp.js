

// left to do:

// Create a namespace for the app and adjust the code 
// Display pokemon one at a time on either the like or dislike button 
// Try and store the liked Pokemon inside an array that is displayed in the second carousel with next and previous  
// Name the project in whatever naming convention is used for the project.I.e all kabob case or camel etc...
// delete all pseudo code and uneeded console.logs
// make responsive with media queries
// use wrappers on css
// Possibly use a movie api to create Cage finder below.
// Make the project live on github, netlify or personal url
// 

const pokeInterface = document.getElementById("pokeInterface");

const colors = {
	fire: '#FDDFDF',
	grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
};

const mainTypes = Object.keys(colors);

const tinderApp = () => {

    const promises = [];
    for (let i = 1; i <= 20; i++){
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url)
        .then((res) => res.json()));
    }
    Promise.all(promises).then(results => {
        const pokemon = results.map(data => ({
            name: data.name.toUpperCase(),
            id: data.id,
            height: data.height,
            image: data.sprites['front_default'],
            pokeType: data.types.map((type) => type.type.name).join(" and "),
            // type = mainTypes.find(type => pokeType.indexOf(type) > -1),
            // color = colors[type]
        }));
        console.log(pokemon);
        displayPokemon(pokemon)
    });
};
// const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

const displayPokemon = (pokemon) => {
    const pokemoninnerHTML = pokemon.map ( pokeOne => `
    <li class="card">
        <img class="card-image" src="https://pokeres.bastionbot.org/images/pokemon/${pokeOne.id}.png"/>
        <h2 class="card-title">${pokeOne.id}. ${pokeOne.name}</h2>
        <p class="card-subtitle"> Hey! I am a ${pokeOne.pokeType} type Pokemon and my height is ${pokeOne.height} inches tall!</p>
    </li>
    `)
    .join('');
    pokeInterface.innerHTML = pokemoninnerHTML;
}
// const displayPokemon = (pokemon) => {
//     const pokemonEl = document.createElement('div');
//     pokemonEl.classList.add('pokemon');

//     const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

//     const pokeInnerHTML = `
//     ${name}
//     `;

//     pokemonEl.innerHTML = pokeInnerHTML;

//     pokeInterface.appendChild(pokemonEl);
// }


tinderApp();