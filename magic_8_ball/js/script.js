function magic8ball() {
    askAQuestion();
    shake();
    getAFortune();
}

function askAQuestion() {
    // this does nothing
}
function shake() {}

function getAFortune() {
    var fortunes = ["yes", "no", "maybe"];
    var num = randomNumber(fortunes.length);
    displayFortune(fortunes[num]);
}

function displayFortune(fortune) {
    document.getElementById("fortune")
    .innerHTML = fortune
}

function randomNumber(n) {
    return Math.floor(Math.random() * n)
}