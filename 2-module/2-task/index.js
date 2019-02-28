/**
 * Клонируем объект
 * @param {Object} obj - объект в котором ищем
 * @param {*} value - значение, которе ищем
 * @returns {Object}
 */
function find (obj, value) {
    const paths = [];
    for (let key in obj) {
        if (obj[key] === value) {
            paths.push(key);
        }
        if (typeof(obj[key]) === 'object') {
            if (findInObject(obj[key], value, key) !== null ) {
                paths.push(findInObject(obj[key], value, key));
            }
        }

    }
    return (paths.length == 1) ? paths[0] : paths;
}

function findInObject(obj, value, path) {
    for (let k in obj) {
        if (obj[k] === value) {
            return path + '.' + k;
        }
        if (typeof(obj[k]) === 'object') {
            path = path + '.' + k;
            return findInObject(obj[k], value, path);
        } else {
            return null;
        }
    }
}

let obj = {
    options: {
        color: 'red'
    },
    style: {
            border: {
                color: 'red'
            },
            border2: {
                color: 'red'
        }
    }
};
// console.log(find(obj, 'red'));
//
// console.log(JSON.stringify(find(obj, 'red')));// !== JSON.stringify(['options.color', 'style.border.color']));