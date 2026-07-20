// DRY - Don't Repeat Yourself

// [] - array
// {} - object
// () - function

// function declaration
function printSplitter(type, symbol = "-") {
  if (type === "short") {
    // console.log(symbol?.repeat(10) ?? "symbol is misisng");
    console.log(symbol.repeat(10));
  }

  if (type === "long") {
    console.log(symbol?.repeat(30));
  }
}

printSplitter("short", "*");
const splitterResult = printSplitter("long", "-");

console.log("Splitter result:", splitterResult);

let balance = null;
// if(balance === null) balance = 0;

console.log("У меня в кошельке: " + (balance ?? 0) + " сом");

// ECMAScript 5 - ES5
// ES6+

// +996 500 252525
// +996 500 252***
// function expression
const hidePhone = function (phone) {
  // const visible = phone.slice(0, -3);
  const visible = phone.substring(0, phone.length - 3);

  return visible + "*".repeat(3);
};

const funcResult = hidePhone("+996 500 252525");
console.log("Func result:", funcResult);

// hoisting - поднятие, всплытие

// arrow function
const maskBankCard = (bankCard) => {

  let maskedBankCard = "";
  for (let i = 0; i < bankCard.length; i++) {
    if (i >= 4 && i <= 12) {
      maskedBankCard += "*";
    } else {
      maskedBankCard += bankCard[i];
    }
  }
  return maskedBankCard;
};

const hiddenCard = maskBankCard("4512451245124512");
console.log("Mask result => ", hiddenCard);

function detectGender(text){

    if(text.endsWith("ич")) return "муж.";

    if(text.endsWith("вна")) return "жен.";

    return "???";
}

const detectGender2 = (text) => {

    if(text.includes("кызы")) return "жен.";

    if(text.includes("уулу")) return "муж.";

    return "???"
}


const megaDetect = (text) => {

    if(text.endsWith("ич") || text.includes("уулу")) return "муж.";

    if(text.endsWith("вна") || text.includes("кызы")) return "жен.";

    return "???"
}