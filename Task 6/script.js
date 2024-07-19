"use strict";
class Potion {
    constructor(color, volume) {
        this.color = color;
        this.volume = volume;
    }
    mix(potion) {
        const newVolume = this.volume + potion.volume;
        const newColor = this.color.map((color, index) => {
            return Math.round((color * this.volume + potion.color[index] * potion.volume) / newVolume);
        }).slice(0, 3);
        return new Potion(newColor, newVolume);
    }
}
const colorPalette = new Potion([100, 100, 100], 5);
const volumeStrength = new Potion([200, 0, 0], 3);
const mixed = colorPalette.mix(volumeStrength);
console.log(mixed.color);
console.log(mixed.volume);
