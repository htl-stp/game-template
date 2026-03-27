import games from "../public/assets/games.json"

const main = document.querySelector('main');

if (!main) throw new Error("No main element!");

games.forEach(game => {
    const div = document.createElement('div');
    div.className = 'game';

    div.innerHTML = `
    <a href="./src/games/${game.internal}">
        <img src="./games/${game.internal}/thumbnail.png" alt="Game Image">
    </a>

    <h1>
      <a href="./src/games/${game.internal}">
        ${game.name}
      </a>
    </h1>

    <p>${game.description}</p>
    <p class="author">by ${game.author}</p>
  `;

    main.appendChild(div);
});