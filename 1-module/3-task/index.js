'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
    let arrayToSearch = [] = +str.split(/,| /);
    let min = 0;
    let max = 0;
    for (let i = 0; i < arrayToSearch.length; i++) {
        if (!isNaN(arrayToSearch[i])) {
            min = (arrayToSearch[i] < min) ? arrayToSearch[i] : min;
            max = (arrayToSearch[i] > max) ? arrayToSearch[i] : max;
        }
    }
    return {min, max};
}
