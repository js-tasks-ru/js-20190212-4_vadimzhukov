/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone (obj) {
    let cloneObj = {};
    for (let key in obj) {
        cloneObj[key] = obj[key];
    }
    return cloneObj;
}

let obj = { test: 1 };

alert(clone(obj) !== obj); // это разные объекты
alert(clone(obj).test === obj.test); // но содежат одни и те же поля