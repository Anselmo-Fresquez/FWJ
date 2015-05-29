Greetings();

function MyFirstProgram() { 
  alert("Greetings.");
  document.write("Benedict Cumberbatch.");
  alert("We will fight in the shade.");
}

function Arg(message) {
  alert(message);
}

function Parrot() {
  Arg(prompt("Say what?").toUpperCase() + "!!!");
}

function Greetings(){
  var greeting = "Hello, " + prompt("What is your name?") + ".";
  greeting += " It's so very nice to have a guest.";
  greeting += " It's been so long since we've had guests, here.";
  document.write(greeting);
}