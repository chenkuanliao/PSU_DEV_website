var commands = document.getElementById("commands");
var user_input = document.getElementById("user_input");

function execute(){
    var newCommand = document.createElement("li");
    newCommand.innerHTML = user_input.value;
    commands.appendChild(newCommand);
    user_input.value = "";
}

const key = function keyEvent(e) {
    user_input = document.getElementById("user_input");
    const input = window.user_input.innerHTML;

    if (e.key === "Enter") {
        execute(input);
        user_input.innerHTML = "";
        return;
    }

    user_input.innerHTML = input + e.key;
    };







document.addEventListener("keypress", key);