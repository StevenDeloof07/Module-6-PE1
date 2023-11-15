import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

function get_name(array, name) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == name) {
            return i;
        }
    }
    return -1;
}
const names = new Array("Marc", "Ilse", "Livia", "Steven");
console.log(get_name(names, "Steven"))
process.exit();