function getRandom() {
    var num = Math.round(Math.random() * 5); //generate number between 0 and 65
    return num;
}

var messages = ["Most likely", "Yes", "No", "Very doubtful", "Ask again later", "Better not tell you now"];

function getMessage() {
    document.getElementById("message").innerHTML = messages[getRandom()];
}