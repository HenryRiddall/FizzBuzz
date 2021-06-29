const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question("How many numbers do you want? ", (nums: number) => {
    nums++
    for (let i = 1; i < nums; i++) {
        let words: string[] = [];
        if (i % 11 == 0){
            if (i % 13 == 0) {
                words.push("Fezz")
            }
            words.push("Bong")
        }
        else {
            let printNum: boolean = true;
            if (i % 3 == 0) {
                words.push("Fizz")
                printNum = false
            }
            if (i % 13 == 0) {
                words.push("Fezz")
                printNum = false
            }
            if (i % 5 == 0) {
                words.push("Buzz")
                printNum = false
            }
            if (i % 7 == 0) {
                words.push("Bang")
                printNum = false
            }
            if (printNum) {
                words.push(i.toString())
            }
        }
        if (i % 17 == 0){
            words.reverse()
        }
        words.forEach(function (word){
            process.stdout.write(word)
        });
        process.stdout.write("\n")
    }
    return
});