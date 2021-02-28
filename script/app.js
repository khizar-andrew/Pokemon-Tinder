// POKEMON TINDER CAROUSEL PSEUDCODE
// POKEMON TINDER CAROUSEL PSEUDCODE
//Absolute bottom goals: Post 20 pokemon as posters to the page.
// Normal goals
// step 1
// Create a app object 
// Step 2
// Link API with key to a fetch request and store data in a variable
// Step 3
// In html create slide skeleton with divs and img tags
// Step 4
// Style title and buttons through css
// Step 5 
// Create a for each loop that appends each pokemon in the data variable onto a div slide 
// Step 6 
// Create event listeners on buttons that represent like or dislike. You will always see a  new pokemon but not see who you liked or disliked again in the main carousel.
// Step 7
// Display pokemkon stats below each card as it is displayed
// Stretch goals
// You can like or dislike a card and it either removes the card from the deck or places the like card in a new deck displayed below in another carousel.
// At the bottom there is a gallery of disliked cards.
// Add the pokemon bio as if it's a dating bio.
// const tinderApp = {};
// tinderApp.baseUrl = 'https://pokeapi.co/api/v2/';
// tinderApp.data = () => {
//     const url = new URL(`${tinderApp.baseUrl}/pokemon/lugia`);
//         // 2.2 Adding URL Params
//         url.search = new URLSearchParams({
//             // q: query
//         })
//         // 2.3 Fetch API
//         fetch(url)
//         .then((res) => {
//             return res.json();
//         })
//         // .then((data) => {
//             //     // 2.4 Calling displayArt() function, passing in the art data as argument
//             //     artApp.displayArt(data.artObjects);
//             // })
//         }    
//         console.log(tinderApp.data());

const pokedex = document.getElementById("pokedex");
console.log(pokedex);

const tinderApp = (displayPokemon) => {
    for (let i = 1; i <= 50; i++){
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            // console.log(data);
            const array = []
            const pokemon = {
                image: data.sprites['front_default'],
                name: data.name,
                id: data.id,
                height: data.height,
                type: data.types.map((type) => type.type.name).join(", ")
            };
            array.push(pokemon)
            // console.log(array.length);
            console.log(pokemon);
            tinderApp.displayPokemon(array)
        });
    }
};
// tinderApp.getUserInput = () => {
//     const likeButton = document.getElementsByClassName('.carousel__button--next');
//     likeButton.addEventListener('click', (event) => {
//         displayPokemon(array);
//     }) 
// }
tinderApp.displayPokemon = (pokemon) => {
    const ul = document.querySelector('ul')
    pokemon.forEach((profile) => {
        const h2 = document.createElement('h2');
        const li = document.createElement('li');
        const image = document.createElement('img');
        const p = document.createElement('p');
        h2.innerText = profile.name;
        image.src = profile.image;
        image.alt = profile.type;
        p.innerText = profile.height;
        li.appendChild(h2);
        li.appendChild(image);
        li.appendChild(p);
        ul.appendChild(li);
    });
}

tinderApp();
// const tinderApp = () => {
//     const promises = [];
//     for (let i = 1; i <= 150; i++){
//         const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
//         promises.push(fetch(url)
//         .then((res) => res.json()));
//     }
//     Promise.all(promises).then(results => {
//         const pokemon = results.map(data => ({
//             name: data.name,
//             id: data.id,
//             image: data.sprites['front_default'],
//             type: data.types.map((type) => type.type.name).join(", ")
//         }));
//         displayPokemon(pokemon)
//     });
// };
// const displayPokemon = (pokemon) => {
//     console.log(pokemon);
// }