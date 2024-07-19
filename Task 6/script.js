"use strict";
class Potion {
    constructor(color, volume) {
        this.color = color;
        this.volume = volume;
    }
    mix(otherPotion) {
        const newVolume = this.volume + otherPotion.volume;
        const newColor = this.color.map((color, index) => {
            return Math.round((color * this.volume + otherPotion.color[index] * otherPotion.volume) / newVolume);
        });
        return new Potion(newColor, newVolume);
    }
}
const invisibility = new Potion([100, 100, 100], 5);
const strength = new Potion([200, 0, 0], 3);
const mixed = invisibility.mix(strength);
console.log(mixed.color);
console.log(mixed.volume);
