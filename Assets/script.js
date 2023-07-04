const timerElement = document.getElementById("timer");
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

const startElement = document.getElementById("start-button");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitElement = document.getElementById("submit-button");
const textboxElement = document.getElementById("Initials");

var currentQuestion = 0;

// console.log(quizQuestions[1].options)
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
startElement.addEventListener("click", startButtonClicked);
// currentQuestion.options[currentAnswer].addEventListener("click", startButtonClicked);


function startButtonClicked(){
  questionElement.append(quizQuestions[0].question)
  optionsElement.append(quizQuestions[0].options)
};

// WHEN I answer a question
// THEN I am presented with another question

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

// WHEN the game is over
// THEN I can save my initials and my score
