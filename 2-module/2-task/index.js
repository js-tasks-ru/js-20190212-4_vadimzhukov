/**
 * Клонируем объект
 * @param {Object} obj - объект в котором ищем
 * @param {*} value - значение, которе ищем
 * @returns {Object}
 */
function find (obj, value) {
    let result = [];
    result = findInObject(obj, value, '');
    debugger;
    if (result.length == 1) {
        return result[0];
    }
    if (result.length > 1) {
        return result;
    }
    if (result.length == 0) {
        return null;
    }
};

function findInObject(obj, value, path) {
    let result = [];

    for (let k in obj) {
        path = '';
        if (obj[k] === value) {
            result.push(k);
        }
        if (typeof(obj[k]) === 'object') {
            path = (!path) ? k : (path + '.' + k);
            result = result.concat(findInObject(obj[k], value, path).map( item => path + '.' + item));

        }
    }

    return result;
}

// let obj = {
//     options: {
//         color: 'red',
//         backgroundColor: 'red',
//         borderColor: 'green'
//     },
//     style: {
//         border: {
//             color: 'red'
//         }
//     }
// };
// console.log(find(obj, 'red')); //Тест1. Должно быть три значение, а вернуло только 2
// console.log(find(obj, 'red2')); // по условию задачи "Если ничего не найденно, то функция должна вернуть null", а вернулся пустой массив
// console.log(find(obj, 'green')); // Тест 3. Должен был вернуть options.green, а вернул пустой массив