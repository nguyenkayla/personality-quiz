// store the morning score
var morningScore = 0;
// store the night score
var nightScore = 0;

// store the number of answers clicked on
var questionCount = 0;

var button = document.getElementById("restart");

// store the HTML elements using the DOM
var result = document.getElementById("result");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");

// listen for the click on answer buttons and call function if clicked
q1a1.addEventListener("click", morning);
q1a2.addEventListener("click", night);

q2a1.addEventListener("click", morning);
q2a2.addEventListener("click", night);

q3a1.addEventListener("click", morning);
q3a2.addEventListener("click", night);

q4a1.addEventListener("click", morning);
q4a2.addEventListener("click", night);

q5a1.addEventListener("click", morning);
q5a2.addEventListener("click", night);

button.addEventListener("click", restart);

// track morningScore and nightScore and check if quiz is complete
function morning() {
  morningScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " morningScore = " + morningScore);

  if (questionCount == 5) {
    console.log("The quiz is done!")
      updateResult();
  }

}

function night() {
  nightScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " nightScore = " + nightScore);

    if (questionCount == 5) {
    console.log("The quiz is done!")
      updateResult();
}
  }

// update quiz result
function updateResult() {
  if (morningScore >= 3) {
  result.innerHTML = "☼ You are an early bird! You enjoy quiet mornings and sunrises. ☼";
  console.log("Early bird");
} else if (nightScore >= 3) {
  result.innerHTML = "☾ You are a night owl! You enjoy staying up late and looking at the stars. ☽";
  console.log("Night owl")
}
}

function restart() {
  questionCount = 0;
  morningScore = 0;
  nightScore = 0;
  result.innerHTML = "Your result is...";
}
