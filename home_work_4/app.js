// 1st task
function getRatingStar (number) {
    if (number >= 1 && number <= 5) {
        return "★".repeat(number);
    } else {
        return "";
    }
}

console.log ("getRatingStars(2) → '" + '"' + getRatingStar(2) + '"');
console.log ("getRatingStars(10) → '" + '"' + getRatingStar(10) + '"');
console.log ("getRatingStars(-5) → '" + '"' + getRatingStar(-5) + '"');




// 2nd task
function getPrice (price, percent){
    return (price - percent/ 100 * price);
}
const price = Number(prompt("Введите стоимость покупки:"));
const percent = Number(prompt("Введите процент скидки:"));
console.log ("Покупка на " + price + "сом с " + percent + "% скидкой будет стоить " + getPrice(price, percent) + "сом.");




// 3rd task
function depersonalize(name) {
    return name[0] + "_".repeat(name.length - 2) + name.at(-1);
}

let name = prompt("Please enter a word:");

console.log("depersonalize(\"" + name + "\") -> \"" + depersonalize(name) + "\"");




// 4th task
function evenOddSum(numbers) {
    let evenSum = 0;
    let oddSum = 0;

    for (let number of numbers) {
        if (number % 2 === 0) {
            evenSum += number;
        } else {
            oddSum += number;
        }
    }

    return [evenSum, oddSum];
}

console.log(evenOddSum([50, 60, 60, 45, 71]));
