function checkNum() {
    let numInput = Number(document.getElementById("numInput").value);
let message = document.getElementById("message");
let secretNum = 7;
if (numInput === secretNum) {
    message.innerHTML = "Bingo! Correct Answer🎉❤"
} else {
    message.innerHTML = "Wrong answer❌"
}
}