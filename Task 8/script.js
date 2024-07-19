"use strict";
const meter = document.getElementById('meter');
const outputDiv = document.getElementById('output');
meter.addEventListener('input', () => {
    const meters = parseFloat(meter.value);
    if (!isNaN(meters)) {
        const cm = meters * 100;
        const inches = meters * 39.37;
        const feet = meters * 3.281;
        const miles = meters / 1609;
        const yards = meters * 1.094;
        outputDiv.innerHTML = `
      <p>${meters} meters is:</p>
      <ul>
        <li>${cm.toFixed(2)} cm</li>
        <li>${inches.toFixed(2)} inches</li>
        <li>${feet.toFixed(2)} feet</li>
        <li>${miles.toFixed(6)} miles</li>
        <li>${yards.toFixed(2)} yards</li>
      </ul>
    `;
    }
    else {
        outputDiv.innerHTML = '';
    }
});
