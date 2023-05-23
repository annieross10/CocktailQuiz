// quiz questions and answers
const questions = [
  {
    question: "What is the main ingredient used in the production of Scottish Whisky?",
    answers: [
      { text: "Barley", correctAnswer: true },
      { text: "Rye", correctAnswer: false },
      { text: "Corn", correctAnswer: false },
      { text: "Wheat", correctAnswer: false },
    ],
  },
  {
    question: "Which region of Scotland is known for producing whisky with a distinctive smoky flavour?",
    answers: [
      { text: "Speyside", correctAnswer: false },
      { text: "Highlands", correctAnswer: false },
      { text: "Islay", correctAnswer: true },
      { text: "Lowlands", correctAnswer: false },
    ],
  },
  {
    question: "Which well-known Scottish Whisky brand uses a stag's head as its logo?",
    answers: [
      { text: "Talisker", correctAnswer: false },
      { text: "Dalmore", correctAnswer: true },
      { text: "Bowmore", correctAnswer: false },
      { text: "Aberfeldy", correctAnswer: false },
    ],
  },
  {
    question: "Which Scottish whisky is often called the The King of Malts and is known for its smooth, honeyed character? ",
    answers: [
      { text: "Talisker", correctAnswer: false },
      { text: "Balvenie", correctAnswer: false },
      { text: "Macallan", correctAnswer: false },
      { text: "Glenlivet", correctAnswer: true },
    ],
  },
  {
    question: "Which Scottish whisky is made exclusively from malted barley and produced in a single distillery? ",
    answers: [
      { text: "Glenmorangie", correctAnswer: true },
      { text: "Johnnie Walker", correctAnswer: false },
      { text: "Laphroig", correctAnswer: false },
      { text: "Glenfiddoch", correctAnswer: false },
    ],
  },
  {
    question: "Which Scottish whisky is known for its peaty and smoky flavor, often described as medicinal? ",
    answers: [
      { text: "Dalwhinnie", correctAnswer: false },
      { text: "Glenlivet", correctAnswer: false },
      { text: "Laphroaig", correctAnswer: true },
      { text: "Glenfiddich", correctAnswer: false },
    ],
  },
  {
    question: "What is the traditional ingredient used in the production of Talisker whisky that gives it a unique maritime character?  ",
    answers: [
      { text: "Brine", correctAnswer: true },
      { text: "Seaweed", correctAnswer: false },
      { text: "Peat", correctAnswer: false },
      { text: "Heather", correctAnswer: false },
    ],
  },
  {
    question: "What is the minimum aging requirement for Scotch whisky?  ",
    answers: [
      { text: "2 years", correctAnswer: false },
      { text: "5 years", correctAnswer: false },
      { text: "10 years", correctAnswer: true },
      { text: "15 years", correctAnswer: false },
    ],
  },
];

// variables
let currentQuestionIndex = 0;
let score = 0;

// DOM elements
const startPage = document.getElementById("start-page");
const startButton = document.getElementById("start-button");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementsByClassName("answers");
const nextButton = document.getElementById("next-button");
const scoreElement = document.getElementById("score");
const quizContainer = document.getElementById("quiz-container");

// Function to start the quiz
function startQuiz() {
  startPage.style.display = "none";
  quizContainer.classList.add("show");
  initializeQuiz();
}

// Event listener for the "Start" button
startButton.addEventListener("click", startQuiz);

// Function to initialize the quiz
function initializeQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  scoreElement.textContent = `Score: ${score}`;
  nextButton.disabled = true;
  displayQuestion();
}

// Function to display a question
function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  for (let i = 0; i < answerButtons.length; i++) {
    const answerButton = answerButtons[i];
    const answer = currentQuestion.answers[i];
    answerButton.textContent = answer.text;
    answerButton.disabled = false;
    answerButton.classList.remove("correct", "incorrect");

    // Remove any existing click event listeners and add a new one
    answerButton.removeEventListener("click", answerButtonClickHandler);
    answerButton.addEventListener("click", answerButtonClickHandler);
  }
}

// Click event handler for answer buttons
function answerButtonClickHandler() {
  const answerButton = this;
  answerButton.disabled = true;
  const answer = questions[currentQuestionIndex].answers[Array.from(answerButtons).indexOf(answerButton)];
  checkAnswer(answer.correctAnswer, answerButton);
  nextButton.disabled = false;
}

// Function to check the answer
function checkAnswer(correct, answerButton) {
  if (correct) {
    answerButton.classList.add("correct");
    score++;
  } else {
    answerButton.classList.add("incorrect");
  }
  for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].disabled = true;
  }
  scoreElement.textContent = `Score: ${score}`;
}

// Function to move to the next question
function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
    nextButton.disabled = true;
  } else {
    showResults();
  }
}

// Function to display the quiz results
function showResults() {
  const quizContainer = document.getElementById("quiz-container");
  let message;
  if (score === 8) {
    message = "Congratulations! You scored a perfect 8 out of 8!";
  } else if (score >= 5) {
    message = `Good job! You scored ${score} out of 8.`;
  } else {
    message = `You scored ${score} out of 8. Keep practicing!`;
  }
  quizContainer.innerHTML = `
  <div class="quiz-results">
    <h1>Quiz Results</h1>
    <p>${message}</p>
  </div>
`
}

// Event listener for the "Next" button
nextButton.addEventListener("click", nextQuestion);


// Initialize the quiz
initializeQuiz();
