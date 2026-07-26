const characters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "~",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "+",
    "=",
    "{",
    "[",
    "}",
    "]",
    ",",
    "|",
    ":",
    ";",
    "<",
    ">",
    ".",
    "?",
    "/",
];
const noNumberAndSymbol = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];

const btnEl = document.getElementById("button-el");
const passwordOneEl = document.getElementById("password-number-one");
const passwordTwoEl = document.getElementById("password-number-two");

const slider = document.getElementById("meinSlider");
const anzeige = document.getElementById("sliderWert");

const checkboxEl = document.getElementById("myCheck");
const textEl = document.getElementById("text");

let passwordLength = 15;

btnEl.addEventListener("click", function () {
    if (checkboxEl.checked === true) {
        randPasswordNoNumberAndsymbol(passwordLength);
    } else if (checkboxEl.checked === false) {
        randPassword(passwordLength);
    }
});

slider.addEventListener("input", function () {
    anzeige.textContent = this.value;
    passwordLength = this.value;

    console.log(passwordLength);
});

function randPassword(passwordLength) {
    let psw1 = [];
    let psw2 = [];

    for (let i = 0; i < passwordLength; i++) {
        let ranNumber = Math.floor(Math.random() * characters.length);
        psw1 += characters[ranNumber];
    }

    for (let i = 0; i < passwordLength; i++) {
        let ranNumber = Math.floor(Math.random() * characters.length);
        psw2 += characters[ranNumber];
    }
    return (
        (passwordTwoEl.textContent = psw2),
        (passwordOneEl.textContent = psw1)
    );
}

function randPasswordNoNumberAndsymbol(passwordLength) {
    let psw1 = [];
    let psw2 = [];

    for (let i = 0; i < passwordLength; i++) {
        let ranNumber = Math.floor(Math.random() * noNumberAndSymbol.length);
        psw1 += noNumberAndSymbol[ranNumber];
    }

    for (let i = 0; i < passwordLength; i++) {
        let ranNumber = Math.floor(Math.random() * noNumberAndSymbol.length);
        psw2 += noNumberAndSymbol[ranNumber];
    }
    return (
        (passwordTwoEl.textContent = psw2),
        (passwordOneEl.textContent = psw1)
    );
}

passwordTwoEl.addEventListener("click", function () {
    const password2 = this.innerText;

    navigator.clipboard.writeText(password2);

    passwordTwoEl.textContent = "copied";
});

passwordOneEl.addEventListener("click", function () {
    const password1 = this.innerText;

    navigator.clipboard.writeText(password1);

    passwordOneEl.textContent = "copied";
});

checkboxEl.addEventListener("click", function () {
    if (checkboxEl.checked === true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
});
