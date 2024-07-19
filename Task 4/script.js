"use strict";
function binary(text) {
    let result = '1';
    for (let i = 1; i < text.length; i++) {
        result += i % 2 === 0 ? '1' : '0';
    }
    return result;
}
console.log(binary("oras"));
console.log(binary("besikiskiakopusteliaudamas"));
console.log(binary("323254"));
