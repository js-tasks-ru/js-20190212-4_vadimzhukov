"use strict";
/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */

// let numberToPower = 1;
// let power = 1;
// do {
//     numberToPower = +prompt("Введите положительное число - основание для возведения в степень", 1);
//
// } while (isNaN(numberToPower));
//
// do {
//     power = +prompt("Введите положительное число - степень ", 1);
//
// } while (isNaN(power));

// alert(pow(numberToPower, power));

function pow (m, n) {
    let result=1;
    for (let i = 0; i < n; i++) {
        result *= m;
    }

    return result;
}

