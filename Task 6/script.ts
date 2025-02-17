/* ------------------------------ TASK 6 ---------------------------------------------------------------
Sukurkite klasę "Potion", kuri sukuria objektus su 2 savybėm ir 1 metodu:

Savybės:
  color(masyvas tryjų spalvų 0-255), volume
Metodas: 
  mix(potion) - Pateikiamas kitas eliksyras ir jiedu sumaišomi į vieną naują eliksyrą, kuris yra grąžinamas kaip naujas Klasės objektas.

Pvz.: 
  felix_felicis     =  Potion([255, 255, 255],  7)
  polyjuice         =  Potion([ 51, 102,  51], 12)
  new_potion        =  felix_felicis.mix(polyjuice)

  new_potion.color  =  [127, 159, 127]
  new_potion.volume =  19
------------------------------------------------------------------------------------------------------ */
class Potion {
  color: [number, number, number];
  volume: number;

  constructor(color: [number, number, number], volume: number) {
    this.color = color;
    this.volume = volume;
  }

  mix(potion: Potion): Potion {
    const newVolume = this.volume + potion.volume;
    const newColor: [number, number, number] = this.color.map((color, index) => {
      return Math.round((color * this.volume + potion.color[index] * potion.volume) / newVolume);
    }).slice(0, 3) as [number, number, number];

    return new Potion(newColor, newVolume);
  }
}

const colorPalette = new Potion([100, 100, 100], 5);
const volumeStrength = new Potion([200, 0, 0], 3);
const mixed = colorPalette.mix(volumeStrength);

console.log(mixed.color); 
console.log(mixed.volume);