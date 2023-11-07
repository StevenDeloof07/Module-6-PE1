import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let names = new Array();
let new_name = await userInput.question("Give a name: ");

while (new_name != "S") {
    names.push(new_name);
    new_name = await userInput.question("Give a name: ");
}
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}