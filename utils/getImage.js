const fs = require('fs')

/**
 * returns image link to person by givven id
 */
module.exports.getImageUtil =  (id) => {
    let rawdata = fs.readFileSync(`${__dirname}/../all.json`);
    let people = JSON.parse(rawdata);
    for (let index = 0; index < people.length; index++) {
        const element = people[index];
        if(element.id == id){
            return element.image
        }
    }

    
}