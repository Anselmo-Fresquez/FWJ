jQuery(document).ready(Main);

/////////////

function Main() {
  
}

function MyFirstProgram() { 
  alert("Greetings.");
  alert("Benedict Cumberbatch.");
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
  alert(greeting);
}

function TellMeAStory() {
  var adjective;
  var noun; 
  var verb;
  
  adjective = prompt("Please enter an adjective:");
  noun = prompt("Please enter a noun:");
  verb = prompt("Please enter a verb (present tense):");
  
  alert("Once upon a time, there was a puppy who was very " + adjective + ". " +
                 "He used to spend all day searching for his long lost " + noun + ". " +
                 "Then one day, he decided to " + verb + " and was never heard from again. The end!");
    
}

function secondsPerDay() {
  var secondsPerMinute = 60;
  var minutesPerHour = 60;
  var hoursPerDay = 24;
  
  var secondsPerDay = secondsPerMinute * minutesPerHour * hoursPerDay;
  
  alert("There are exactly " + secondsPerDay + " seconds per day.");
}

function AddTwoNumbers() {
  var firstNumber;
  var secondNumber;
  firstNumber = parseInt(prompt("Enter first number:"));
  secondNumber = parseInt(prompt("Enter second number:"));
  alert(firstNumber + " + " + secondNumber + " = " + (firstNumber + secondNumber));
}

function CountDown()
{
  var fromNumber = parseInt(prompt("Countdown from what number? (1-100)"));
  if (fromNumber > 0 && fromNumber < 100) {
    for (var i = fromNumber ; i >= 0 ; i--) {
      if (i > 0) { 
        alert(i); 
      }
      else {
        alert ("Happy New Year!!!");
      }
    }
  } else {
    alert(fromNumber + " isn't a valid number between 1 and 100!");
  }
}