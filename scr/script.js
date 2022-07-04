var commands = document.getElementById("commands");
var user_input = document.getElementById("user_input");
var terminal_outputs = document.getElementById("terminal_outputs");
var terminal_content = document.getElementById("terminal_content");

function execute(input){
    let output;
    input = input.toLowerCase();

    output = `<div>➜ ${input}</div>`;
    if(!COMMANDS.hasOwnProperty(input)){
        output += `<div class="output"> No such command: ${input} </div>`;
    }
    else{
        output += `<div class="output"> ${COMMANDS[input]} </div>`;
    }

    terminal_outputs.innerHTML = `${terminal_outputs.innerHTML+output}`;
    user_input.value = "";
    terminal_content.scrollTop = terminal_content.scrollHeight;
}

const key = function keyEvent(e) {
    user_input = document.getElementById("user_input");
    const input = window.user_input.value;

    if (e.key === "Enter") {
        execute(input);
        user_input.innerHTML = "";
        return;
    }

    user_input.innerHTML = input + e.key;
};

const COMMANDS = {
    help:
      'Supported commands: ["about", "experience", "education", "skills", "contact"]',
    about:
      "Hello 👋, I'm Brian, not brain. I like chocolate and don't like carrots.",
    skills:
      'I can hold three eggs in my mouth at the same time. Can you?',
    education:
      "I learned to eat by myself at the age at 3. Impressive, isn't it?",
    experience:
      "I wrote \'hello world\' in python, and I felt I have the power in my hand!",
    contact:
      'You can never find me haha'
  };


document.addEventListener("keypress", key);