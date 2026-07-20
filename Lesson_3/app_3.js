// array - массив

const grades = [10, 10, 10, 8, 9, 7, 5, 2];
// indexes       0   1   2  3  4  5  6  7

// const grades = [10, 7];

console.log(typeof grades);

// grades.push(10);
// grades[3] = 9;

// delete grades[0];

const lessonNo = 1;

const lessonGrade = grades[lessonNo - 1];

if (lessonGrade) {
  console.log("За " + lessonNo + " урок студент получил:", lessonGrade);
} else {
  console.warn("Домашнее задание за " + lessonNo + " урок не выполнено");
}

let totalGrade = 0;

// loop - цикл

// for..of
for (const grade of grades) {
  totalGrade += grade;
}

console.log("Студент выполнил:", grades.length);
console.log("Оценки:", grades);
console.log("Итоги месяца (баллы):", totalGrade);

const lessons = [1, 1, 1, "online", "online", 0, 0, 0];

let totalLessons = 0;

for (const lesson of lessons) {
  if (lesson === 1 || lesson === "online") {
    // totalLessons += 1
    totalLessons++;
  }
}

console.log(
  "Итоги месяца (посещения): " + totalLessons + " из " + lessons.length,
);

// falsy: false, undefined, null, 0, NaN, "", document.all

const bankCard = "4512412578968458";

// 4512*********458

let maskedBankCard = "";

// for
for (let i = 0; i < bankCard.length; i++) {
  if (i >= 4 && i <= 12) {
    maskedBankCard += "*";
  } else {
    maskedBankCard += bankCard[i];
  }
}

console.log("Original:", bankCard);
console.log("Mask:", maskedBankCard);

// for(;;)

for (let i = 0; i < lessons.length; i++) {
  let message = "";

  if (lessons[i] === 1) {
    message = "был в офисе";
  }

  if (lessons[i] === "online") {
    message = "был онлайн";
  }

  if (lessons[i] === 0) {
    message = "отсутствовал";
  }

  console.log("На " + (i + 1) + " уроке студент " + message);
}

const months = [
    [10, 9, 7, 10, 5, 8, 7, 8], 
    [10, 10, 5, 7, 8],
    [4, 5],
    [4],
    [0,0,0,0,0,0,0,0,0,0]
];
