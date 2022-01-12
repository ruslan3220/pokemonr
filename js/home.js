// POKEMONS
let elList = document.querySelector(".pokemons__list");
let elItem = document.querySelector(".pokemons__item");
for (let pokemon of pokemons) {
  // CREATE
  let pokemonItem = document.createElement("li");
  let pokemonCard = document.createElement("div");
  let pokemonCardBody = document.createElement("div");
  let pokemonCardHead = document.createElement("div");
  let pokemonCardTitle = document.createElement("h4");
  let pokemonCardText = document.createElement("p");
  let pokemonCardFooter = document.createElement("div");
  let pokemonCardMassa = document.createElement("h4");
  let pokemonCardAge = document.createElement("h4");

  // SET ATTRIBUTE
  pokemonItem.setAttribute("class", "pokemons__item m-3");
  pokemonCard.setAttribute("class", "card");
  pokemonCard.setAttribute("width", "18rem");
  pokemonCardBody.setAttribute("class", "card-body");
  pokemonCardHead.setAttribute("class", "card-head");
  pokemonCardTitle.setAttribute("class", "card-title");
  pokemonCardText.setAttribute("class", "card-text");
  pokemonCardFooter.setAttribute("class", "card-footer");
  pokemonCardMassa.setAttribute("class", "card-title");
  pokemonCardAge.setAttribute("class", "card-title");

  // TEXT CONTENT
  pokemonCardTitle.textContent = pokemon.name;
  pokemonCardText.textContent = pokemon.type;
  pokemonCardMassa.textContent = pokemon.weight;
  pokemonCardAge.textContent = pokemon.avg_spawns;
  // APPEND
  elList.appendChild(pokemonItem);
  pokemonItem.appendChild(pokemonCard);
  pokemonCard.appendChild(pokemonCardBody);
  pokemonCardBody.appendChild(pokemonCardHead);
  pokemonCardHead.appendChild(pokemonCardTitle);
  pokemonCardBody.appendChild(pokemonCardText);
  pokemonCardBody.appendChild(pokemonCardFooter);
  pokemonCardFooter.appendChild(pokemonCardMassa);
  pokemonCardFooter.appendChild(pokemonCardAge);
}
