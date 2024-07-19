/* ------------------------------ TASK 8 ----------------------------
Parašykite TS kodą, kuris leis vartotojui įvesti ilgį metrais ir pamatyti jo pateikto ilgio konvertavimą į:
1. Centimetrus (cm) | Formulė: cm = m * 100
2. Colius (in) | Formulė: in = m * 39.37
3. Pėdas (ft) | Formulė: ft = m * 3.281
4. Mylias (mi) | Formulė: mi = m / 1609
5. Jardus (yd) | Formulė: yd = m * 1.094

Pastaba: Atvaizdavimas turi būti matomas su kiekviena įvestimi ir pateikiamas <div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const meter = document.getElementById('meter') as HTMLInputElement;
const outputDiv = document.getElementById('output') as HTMLDivElement;

meter.addEventListener('input', () => {
  const meters: number = parseFloat(meter.value);
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
  } else {
    outputDiv.innerHTML = '';
  }
});