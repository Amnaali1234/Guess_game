function checkNum() {
    let numInput = Number(document.getElementById("numInput").value);
let message = document.getElementById("message");
let secretNum = 7;
if (numInput < 1 || numInput > 10) {
     message.innerHTML = "⚠ Please enter a number between 1 to 10";
}
else if (numInput === secretNum) {
    message.innerHTML = "Bingo! Correct Answer✅🎉💗"
 } else if (numInput < secretNum) {

        message.innerHTML = "❌ Wrong Answer <br> 📉 Too Low!";

    } else {

        message.innerHTML = "❌ Wrong Answer <br> 📈 Too High!";

   
}

}