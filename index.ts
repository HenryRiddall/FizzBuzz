import * as readline1 from 'readline';

// enable and disable each rule 1 for enabled 0 for disabled default is enabled
// e.g. all disabled is 0 0 0 0 0
let args: string[] = process.argv.slice(2);

// names for each rule
const fizzFlag: boolean = args[0] != "0"
const bangFlag: boolean = args[1] != "0"
const bongFlag: boolean = args[2] != "0"
const fezzFlag: boolean = args[3] != "0"
const revFlag: boolean = args[4] != "0"


const readline = readline1.createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("How many numbers do you want? ", (maxValue) => {
    // parseInt(qq: string) -> number
    let nums: number = parseInt(maxValue)
    for (let i = 1; i <= nums; i++) {
        let words: string[] = [];
        if (i % 11 == 0 && bongFlag){
            if (i % 13 == 0 && fezzFlag) {
                words.push("Fezz")
            }
            words.push("Bong")
        }
        else {
            let printNum: boolean = true;
            // continue
            if (i % 3 == 0 && fizzFlag) {
                words.push("Fizz")
                printNum = false
            }
            if (i % 13 == 0 && fezzFlag) {
                words.push("Fezz")
                printNum = false
            }
            if (i % 5 == 0 && fizzFlag) {
                words.push("Buzz")
                printNum = false
            }
            if (i % 7 == 0 && bangFlag) {
                words.push("Bang")
                printNum = false
            }
            if (printNum) {
                words.push(i.toString())
            }
        }
        if (i % 17 == 0 && revFlag){
            words.reverse()
        }
        words.forEach(function (word){
            process.stdout.write(word)
        });
        process.stdout.write("\n")
    }
    readline.close()
});