"use strict";
const TEAMS_ENDPOINT = 'teams.json';
const PLAYERS_ENDPOINT = 'players.json';
async function fetchNBAData(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Error fetching data from ${url}`);
    }
    return response.json();
}
function createTeamCard(team) {
    const teamCard = document.createElement('div');
    teamCard.classList.add('team-card');
    const teamName = document.createElement('h2');
    teamName.textContent = team.teamName;
    const teamSimpleName = document.createElement('p');
    teamSimpleName.textContent = `Simple Name: ${team.simpleName}`;
    const teamTricode = document.createElement('p');
    teamTricode.textContent = `Tricode: ${team.abbreviation}`;
    const teamLocation = document.createElement('p');
    teamLocation.textContent = `Location: ${team.location}`;
    const playersButton = document.createElement('button');
    playersButton.textContent = 'Players';
    playersButton.onclick = () => showPlayersModal(team.id);
    teamCard.appendChild(teamName);
    teamCard.appendChild(teamSimpleName);
    teamCard.appendChild(teamTricode);
    teamCard.appendChild(teamLocation);
    teamCard.appendChild(playersButton);
    return teamCard;
}
async function showPlayersModal(teamId) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    const closeButton = document.createElement('span');
    closeButton.classList.add('close');
    closeButton.innerHTML = '&times;';
    closeButton.onclick = () => {
        modal.style.display = 'none';
        document.body.removeChild(modal);
    };
    modalContent.appendChild(closeButton);
    try {
        const playersData = await fetchNBAData(PLAYERS_ENDPOINT);
        const teamPlayers = playersData.players.filter((player) => player.teamId === teamId);
        if (teamPlayers.length > 0) {
            teamPlayers.forEach((player) => {
                const playerElement = document.createElement('p');
                playerElement.textContent = `${player.firstName} ${player.lastName}`;
                modalContent.appendChild(playerElement);
            });
        }
        else {
            const noPlayers = document.createElement('p');
            noPlayers.textContent = 'No players found for this team.';
            modalContent.appendChild(noPlayers);
        }
    }
    catch (error) {
        console.error('Error fetching players data:', error);
    }
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    modal.style.display = 'block';
}
async function renderNBAData() {
    const outputDiv = document.getElementById('output');
    if (!outputDiv)
        return;
    try {
        const teamsData = await fetchNBAData(TEAMS_ENDPOINT);
        teamsData.teams.forEach((team) => {
            const teamCard = createTeamCard(team);
            outputDiv.appendChild(teamCard);
        });
    }
    catch (error) {
        console.error('Error rendering NBA data:', error);
    }
}
renderNBAData();
