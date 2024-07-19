"use strict";
const ENDPOINT = 'NBA.json';
async function fetchNBAData() {
    const response = await fetch(ENDPOINT);
    const data = await response.json();
    if (!data.teams || !Array.isArray(data.teams)) {
        throw new Error('Invalid data format: expected an object with a "teams" array');
    }
    return data.teams;
}
function createTeamCard(team) {
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
function createPlayerCard(player) {
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
async function renderNBAData() {
    const outputDiv = document.getElementById('output');
    if (!outputDiv)
        return;
    try {
        const teams = await fetchNBAData();
        teams.forEach(team => {
            const teamCard = createTeamCard(team);
            outputDiv.appendChild(teamCard);
        });
    }
    catch (error) {
        console.error('Error rendering NBA data:', error);
    }
}
renderNBAData();
