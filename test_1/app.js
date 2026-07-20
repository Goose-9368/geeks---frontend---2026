//task 1

function checkLuckyTicket (number) {

    if (number.length === 6 ) {

        if (Number (number[0]) + Number (number[1]) + Number (number[2])
            === Number (number[3]) + Number (number[4]) + Number (number[5]))

        {   return ("checkLuckyTicket(" + number + ") -> true"); }

    } else {

        return ("checkLuckyTicket(" + number + ") -> false");
    }
}

let number = String(prompt("Enter 6 digit number: "));

console.log(checkLuckyTicket(number));


//task 2
// rock < paper
// paper < sscisir
// scisor < rock

function getWinner(first, second) {
    if (first === "📄" && second === "🪨") {
        return `getWinner("${first}", "${second}") -> 1 (победил первый игрок)`;
    } else if (first === "✂️" && second === "📄") {
        return `getWinner("${first}", "${second}") -> 1 (победил первый игрок)`;
    } else if (first === "🪨" && second === "✂️") {
        return `getWinner("${first}", "${second}") -> 1 (победил первый игрок)`;
    } else if (first === "🪨" && second === "📄") {
        return `getWinner("${first}", "${second}") -> 2 (победил второй игрок)`;
    } else if (first === "📄" && second === "✂️") {
        return `getWinner("${first}", "${second}") -> 2 (победил второй игрок)`;
    } else if (first === "✂️" && second === "🪨") {
        return `getWinner("${first}", "${second}") -> 2 (победил второй игрок)`;
    } else if (first === second && first !== undefined) {
        return "Ничья!";
    } else {
        return "Неправильные данные";
    }
}

console.log(getWinner("🪨", "📄"));
console.log(getWinner("✂️", "📄"));
console.log(getWinner("🪨", "✂️"));
console.log(getWinner("📄", "📄"));

