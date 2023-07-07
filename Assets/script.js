// declare timer variable, locally stored leaderboard array, and quiz questions array
const timerElement = document.getElementById("timer");
const leaderboard = [];
const quizQuestions = [
{
  question: "question 1",
  options: ["Right","Wrong","Wrong","Wrong"],
  answer: 0,
},
{
  question: "question 2",
  options: ["Wrong","Right","Wrong","Wrong"],
  answer: 1,
},
{
  question: "question 3",
  options: ["Wrong","Wrong","Wrong","Right"],
  answer: 3,
},
{
  question: "question 4",
  options: ["Wrong","Wrong","Right","Wrong"],
  answer: 2,
},
];

// get our variables that will change every quiz
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 60;
let timerInterval;
var endTime;

// get our elements on the page to reference later
const startElement = document.getElementById("start-button");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitElement = document.getElementById("submit-button");
const textboxElement = document.getElementById("initials");

// add click event listeners to the start button and submit button to call functions that will be the entirety of the quiz
startElement.addEventListener("click", startButtonClicked);
submitElement.addEventListener("click", saveScore);

// display none a bunch of stuff to make it look better and flow more
submitElement.style.display = "none";
textboxElement.style.display = "none";
optionsElement.style.display = "none";
timerElement.style.display = "none";

// when the start button is clicked, call the setquestion function while making the questions, timer, and question name elements appear.
function startButtonClicked() {
  setQuestion();
  startElement.style.display = "none";
  optionsElement.style.display = "block";
  timerElement.style.display = "block";
  timerInterval = setInterval(updateTimer, 1175);
};

// every 1.175 seconds this function runs, checks to see if the time is below 0 to end the quiz, subtracts time from the timer, and makes the timer element
function updateTimer() {
  if(timeLeft <= 0) {
    endQuiz();
    return;
  };

  timeLeft--;
  timerElement.textContent = timeLeft;
};

// sets a variable object equal to the current question you are on, starting on 0, sets the question name holder to the question name,
// clears the list so it wont overpopulate.
function setQuestion() {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  optionsElement.innerHTML = "";

// sets a for loop to create a list element in the unordered list for every question answer, and makes an event listener for every li
// to call the checkanswer function with the index as the variable
  for (let i = 0; i < currentQuestion.options.length; i++) {
    const choice = document.createElement("li");
    choice.textContent = currentQuestion.options[i];
    choice.addEventListener("click", () => {
      checkAnswer(i);
    });
    optionsElement.appendChild(choice);
  };
};

// uses the current question index variable to check if what you clicked on was the right answer or not, and if there is time left
function checkAnswer(answerIndex) {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  if (timeLeft <= 0){
    endQuiz();
  };

  if (answerIndex === currentQuestion.answer) {
    score++;
  } else {
    timeLeft -= 10;
  };

  currentQuestionIndex++;

// if you have run out of questions to display, end the quiz
  if (currentQuestionIndex < quizQuestions.length) {
    setQuestion();
  } else {
    endQuiz();
  };
};

// saves the timeleft to display your score, time when u ended, and asks you to put your initials into the box that just appeared
function endQuiz() {
  endTime = timeLeft;
  timerElement.style.display = "none";
  optionsElement.style.display = "none";
  textboxElement.style.display = "block";
  submitElement.style.display = "block";
  questionElement.textContent = "Your score is " + score + " out of 4, with " + endTime + " seconds left. Enter your initials and click submit to save your score!";
};

// when the save button is clicked it will grab what you put for initials and put your intitials, score, and endtime in a final object for your entry on the leaderboard
function saveScore() {
  var initials = textboxElement.value;
  leaderboard.push({
    user: initials,
    score: score,
    timeLeft: endTime
  });
  // sets the object leaderboard in localstorage to save even when the page reloads and makes a window alert to show you your leaderboard entry
  localStorage.setItem("leaderBoard", JSON.stringify(leaderboard));
  console.log(leaderboard);
  location.reload();
  window.alert(JSON.stringify(leaderboard));
};