/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
    let result='';
    for (let i in data) {
        if (data[i].age <= age) {
            if (!result) {
                debugger;
                result = `${data[i].name}, ${data[i].balance}`;
            } else {
                result += `\n${data[i].name}, ${data[i].balance}`;
            }
        }

    }
    return result;
}


