var commands = document.getElementById("commands");
var commandline = document.getElementById("commandline");
var temp_btn = document.getElementById("temp_btn");

temp_btn.addEventListener("click", function(){
    var newCommand = document.createElement("li");
    newCommand.innerHTML = commandline.value;
    commands.appendChild(newCommand);
    commandline.value = "";
});