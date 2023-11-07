import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

function give_discount(price) {
    return price * 0.85;
}

let prices = new Array(13, 12, 24, 80, 90, 55, 76, 54);
for (let i = 0; i < prices.length; i++) {
    prices[i] = give_discount(prices[i]);
    console.log(prices[i]);
}
process.exit();