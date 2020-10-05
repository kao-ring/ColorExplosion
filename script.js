//starting data
var poem =
  "Some say the world will end in fire, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.Some say the world will end in fire, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.Some say the world will end in fire, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.Some say the world will end in fire, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";
var wordsArray = poem.split(" ");

//DOM elements
var timeEl = document.querySelector("h1");
var mainEl = document.querySelector("main");

//Set a button
// var body = document.body;
// var btn = createElement("button");
// btn.textContent = "Hit to Explode!";
// body.appendChild(btn);

//starting index iterating through the words array
var secondsLeft = 4;

function prepareRead() {
  // Create the countdown timer.
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      speedRead();
    }
  }, 1000);
}

function speedRead() {
  // Print words to the screen one at a time.
  mainEl.style.display = "inline";
  var i = 0;
  var printWords = setInterval(function () {
    var p = document.createElement("p");
    p.style.display = "inline";
    p.style.fontSize = "30px";
    p.textContent = wordsArray[i] + " ";
    p.style.color = `hsl(${0 + i * 10}, 60%, 70%)`;
    p.style.backgroundColor = "black";
    mainEl.appendChild(p);
    i++;
    if (!wordsArray[i]) {
      clearInterval(printWords);
    }
  }, 100);
}

prepareRead();
