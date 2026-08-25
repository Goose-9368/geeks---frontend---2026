// PART 1

const gmailInput = document.querySelector("#gmail_input");
const gmailButton = document.querySelector("#gmail_button");
const gmailResult = document.querySelector("#gmail_result");

const gmailRegExp = /^(?=[^@]{3,}@gmail\.com$)[a-z0-9]+(?:[._%+-][a-z0-9]+)*@gmail\.com$/i;

const checkGmail = () => {
    const gmail = gmailInput.value.trim();
    const isValid = gmailRegExp.test(gmail);

    gmailResult.textContent = isValid ? "OK" : "ERROR";
    gmailResult.style.color = isValid ? "green" : "red";
};

gmailButton.addEventListener("click", checkGmail);

gmailInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkGmail();
    }
});



// PART 2

const parentBlock = document.querySelector(".parent_block");
const childBlock = document.querySelector(".child_block");

let position = 0;

const moveRedSquare = () => {
    const maxPosition = parentBlock.clientWidth - childBlock.offsetWidth;

    if (position < maxPosition) {
        position += 1;
        childBlock.style.left = `${position}px`;

        setTimeout(moveRedSquare, 10);
    }
};

moveRedSquare();