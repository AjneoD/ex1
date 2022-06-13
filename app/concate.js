const lodash = require('lodash')
const arr1 = [6, 7, 8, 9, 10]
const arraystogether = (arr) => {
    return lodash.concat(arr, arr1);
}
module.exports.arraystogether = arraystogether;