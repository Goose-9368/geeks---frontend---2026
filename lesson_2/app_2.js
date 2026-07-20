console.log("lesson 2");

// Data types:
// 1. number + - * / % **
// 2. string +
// 3. undefined
// 4. boolean ! === == !== != > < >= <= && ||
// 5. null
// 6. object

const myBankCard = {
  cardNo: "4152 4515 7895 1235",
  cvcCode: "343",
  holderName: "EVGENIY KISELEV",
  expiryDate: "07/29",
  balance: 1_500_000,
  isBlocked: false,
  blockReason: null,
  branch: {
    id: 14589,
    address: "Bishkek, Manasa 40",
  },
};

/*
console.log("card:", typeof myBankCard);
console.log("card CVC:", typeof myBankCard.cvcCode);
console.log("card balance:", typeof myBankCard.balance);
console.log("card blocking:", typeof myBankCard.isBlocked);
console.log("card block reason:", typeof myBankCard.blockReason);
console.log("card manager:", typeof myBankCard.manager);
*/

// let amount = prompt("Укажите сумму:");
// amount = Number(amount);

// myBankCard.balance = myBankCard.balance + amount;

// conditions - условия

/*
if (myBankCard.isBlocked) {
  console.error("CARD BLOCKED!!!");
  console.warn("Block reason:", myBankCard.blockReason);
} else {

  if (amount > 50_000) {
    console.error("MAX LIMIT!");
  } else {
    myBankCard.balance += amount;
  }
  
}
*/

console.log("My balance:", myBankCard["balance"]);

const bl = myBankCard.balance;

if (bl < 1_000_000) {
  console.log("SILVER");
} else if (bl >= 1_000_000 && bl < 5_000_000) {
  console.log("GOLD");
} else if (bl >= 5_000_000 && bl < 10_000_000) {
  console.log("PLATINUM");
} else if (bl >= 10_000_000) {
  console.log("BRILLIANT");
}

const litrCount = prompt("Enter litres:");

const fuelType = prompt("Enter fuel type (92, 95, GAS, DT)");

let litrPrice;

if (fuelType === "92") {
  litrPrice = 79;
} else if (fuelType === "95") {
  litrPrice = 87;
} else if (fuelType === "GAS" || fuelType === "gas" || fuelType === "Gas") {
  litrPrice = 45;
} else if (fuelType === "DT" || fuelType === "dt" || fuelType === "Dt") {
  litrPrice = 82;
}

const total = litrPrice * litrCount;

console.log("Litr price:", litrPrice);

if (isNaN(total)) {
  console.error("Invalid fuel type");
} else {
  console.log("Total:", total);
}
