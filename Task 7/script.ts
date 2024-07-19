/* ------------------------------ TASK 7 -----------------------------------
Parašykite TS kodą, vartotojui atėjus į tinklapį kreipsis į NBA.json failą ir iš jo atvaizduos visas NBA komandas ir jų žaidėjus. 
Kiekviena komanda turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas komandos pavadinimas ir papildomose "mini kortelėse" išvardinti žaidėjai su vardais, pavardėmis ir nuoroda į daugiau informacijos apie juos.

Pastaba: Informacija apie komandas bei žaidėjus turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */
// script.ts
interface Team {
  id: number;
  name: string;
  players: Player[];
}

interface Player {
  firstName: string;
  lastName: string;
  googleSearch: string;
}

const ENDPOINT = 'NBA.json';

async function fetchNBAData(): Promise<Team[]> {
  const response = await fetch(ENDPOINT);
  const data = await response.json();

  if (!data.teams || !Array.isArray(data.teams)) {
    throw new Error('Invalid data format: expected an object with a "teams" array');
  }

  return data.teams;
}

function createTeamCard(team: Team): HTMLElement {
  const teamCard = document.createElement('div');
  teamCard.classList.add('team-card');

  const teamName = document.createElement('h2');
  teamName.textContent = team.name;

  const playersContainer = document.createElement('div');
  playersContainer.classList.add('players-container');

  team.players.forEach(player => {
    const playerCard = createPlayerCard(player);
    playersContainer.appendChild(playerCard);
  });

  teamCard.appendChild(teamName);
  teamCard.appendChild(playersContainer);

  return teamCard;
}

function createPlayerCard(player: Player): HTMLElement {
  const playerCard = document.createElement('div');
  playerCard.classList.add('player-card');

  const playerName = document.createElement('h3');
  playerName.textContent = `${player.firstName} ${player.lastName}`;

  const playerInfoLink = document.createElement('a');
  playerInfoLink.href = player.googleSearch;
  playerInfoLink.textContent = 'More Info';

  playerCard.appendChild(playerName);
  playerCard.appendChild(playerInfoLink);

  return playerCard;
}

async function renderNBAData(): Promise<void> {
  const outputDiv = document.getElementById('output');
  if (!outputDiv) return;

  try {
    const teams = await fetchNBAData();
    teams.forEach(team => {
      const teamCard = createTeamCard(team);
      outputDiv.appendChild(teamCard);
    });
  } catch (error) {
    console.error('Error rendering NBA data:', error);
  }
}

renderNBAData();