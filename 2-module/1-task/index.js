'use strict';
/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone (obj) {
    let cloneObj = {};
    for (let key in obj) {
        cloneObj[key] = (typeof(obj[key]) === "object" && obj[key] !== null) ? clone(obj[key]) : obj[key];
    }
    return cloneObj;
}

let obj = {test: { test2: { test3: {test4 : '1'} } }};

// alert(clone(obj) !== obj); // это разные объекты
// alert(clone(obj).test.test2 !== obj.test.test2); // но содежат одни и те же поля
// alert(clone(obj).test.test2.test3 !== obj.test.test2.test3);
// alert(clone(obj).test.test2.test3 === obj.test.test2.test3);