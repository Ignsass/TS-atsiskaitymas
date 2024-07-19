"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const ENDPOINT = 'NBA.json';
function fetchNBAData() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(ENDPOINT);
        const data = yield response.json();
        if (!data.teams || !Array.isArray(data.teams)) {
            throw new Error('Invalid data format: expected an object with a "teams" array');
        }
        return data.teams;
    });
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
function renderNBAData() {
    return __awaiter(this, void 0, void 0, function* () {
        const outputDiv = document.getElementById('output');
        if (!outputDiv)
            return;
        try {
            const teams = yield fetchNBAData();
            teams.forEach(team => {
                const teamCard = createTeamCard(team);
                outputDiv.appendChild(teamCard);
            });
        }
        catch (error) {
            console.error('Error rendering NBA data:', error);
        }
    });
}
renderNBAData();
