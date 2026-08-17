"use strict";


const onlyDigitsRegExp = /^\d+$/;

const containsOnlyDigits = (str) => {
    return onlyDigitsRegExp.test(str);
};

console.log("Задание №1:");
console.log(containsOnlyDigits("12345"));
console.log(containsOnlyDigits("12a45"));
console.log(containsOnlyDigits(""));     



const showSecondMessage = () => {
    setInterval(() => {
        console.log("Прошла секунда");
    }, 1000);
};

showSecondMessage();



const count = () => {
    let i = 1;

    const interval = setInterval(() => {
        console.log(i);

        if (i === 10) {
            clearInterval(interval);
        }

        i++;
    }, 1000);
};

count();



const colorBlock = document.getElementById("colorBlock");

const toggleBlockColor = () => {
    colorBlock.classList.toggle("color-block--active");
};

colorBlock.addEventListener("click", toggleBlockColor);


colorBlock.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleBlockColor();
    }
});



const getJsonData = () => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "data.json", true);

    xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            const data = JSON.parse(xhr.responseText);

            console.log("Задание №5:");
            console.log(data);
        } else {
            console.error(`Ошибка запроса. Статус: ${xhr.status}`);
        }
    };

    xhr.onerror = () => {
        console.error("Не удалось выполнить GET-запрос");
    };

    xhr.send();
};

getJsonData();