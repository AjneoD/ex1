const fs = require('fs')
const concat = require('./app/concate')
const sum = require('./app/sum')

const details = JSON.parse(fs.readFileSync('array.json', 'utf8')).array;
const con = concat.arraystogether(details);
const sumTotale = sum.sum(con);

function resolveAfter2Seconds() {

    return new Promise(arraystogether => {

        setTimeout(() => {

            arraystogether(con);

        }, 2000);

    });

}

async function asyncCall() {

    console.log(details);

    const result = await resolveAfter2Seconds();

    console.log(result);

}

asyncCall();
  

console.log(details);
console.log(con);
console.log("Total sum is:" + sumTotale);