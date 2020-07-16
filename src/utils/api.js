/**
 * To get a list of 150 pokemons
 */
// export function fetchPokemons() {
//   return fetch("https://pokeapi.co/api/v2/pokemon?limit=150").then(res =>
//     res.json()
//   );
//   //.then(({ pokemons }) => {console.log('pokemon api', pokemon)});
// }

/**
 * To get an specific pokemon
 * @param {'string'} pokemon
 */
// export function fetchPokemon(pokemon = "") {
//   //console.log("name", `https://pokeapi.co/api/v2/pokemon/${pokemon}`);
//   return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(res => {
//     return res.json();
//     //console.log("res", res.json());
//     // return {
//     //   name: res.name,
//     //   id: res.id,
//     //   height: res.height,
//     //   width: res.width
//     // };
//   });
// }

/**
 * To get all pokemons with their respective data;
 */
// export async function fetchFilteredPokemons() {
//   let pokemonsApiData = {};
//   fetchPokemons().then(data => {
//     pokemonsApiData = data.results;
//     return pokemonsApiData.map(async pokemon => {
//       fetchPokemon(pokemon.name).then(pokemonData => {
//         console.log("pokemonData", pokemonData);
//         return pokemonData;
//       });
//       //return "hola";
//     });
//   });

//console.log("pokemondata", pokemonData);
// const pokemonsApiData = await fetchPokemons();
// let pokemonData = [];

// pokemonData = pokemonsApiData.results.map(pokemon => {
//   return fetchPokemon(pokemon.name);
// });

// fetchPokemons().then(data => {
//   console.log('data', data);
// })

//console.log("pokemonData", pokemonData);

//return pokemonData;
//}
