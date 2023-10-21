// quiz questions and answers
const questions = [
  {
    question: "What method is used to make a Scotch Mist?",
    answers: [
      { text: "Build", correctAnswer: false },
      { text: "Shake and Charge", correctAnswer: false },
      { text: "Shake and Fine strain", correctAnswer: true },
      { text: "Roll and Stretch", correctAnswer: false },
    ],
  },
  {
    question: "What flavour of jam is in an Elderflower and Berry Spritz?",
    answers: [
      { text: "Strawberry", correctAnswer: false },
      { text: "Raspberry", correctAnswer: true },
      { text: "Blackberry", correctAnswer: false },
      { text: "Marmalade", correctAnswer: false },
    ],
  },
  {
    question: "What type of glass is a Clover Club served in?",
    answers: [
      { text: "Highball", correctAnswer: false },
      { text: "Coupe", correctAnswer: true },
      { text: "Old Fashioned", correctAnswer: false },
      { text: "Wine Glass", correctAnswer: false },
    ],
  },
  {
    question: "What type of vodka do we use in a Napolean Complex? ",
    answers: [
      { text: "42 Below", correctAnswer: false },
      { text: "Smirnoff", correctAnswer: false },
      { text: "Finlandia", correctAnswer: false },
      { text: "Belvedere", correctAnswer: true },
    ],
  },
  {
    question: "What type of bitters do we use in a perfect 10? ",
    answers: [
      { text: "Angostura", correctAnswer: false },
      { text: "Orange", correctAnswer: false },
      { text: "Cherry", correctAnswer: true },
      { text: "Grapefruit", correctAnswer: false },
    ],
  },
  {
    question: "What are the 3 ingredients in a Negroni? ",
    answers: [
      { text: "Campari, Dry Vermouth, Vodka", correctAnswer: false },
      { text: "Campari, Sweet Vermouth, Cointreau", correctAnswer: false },
      { text: "Campari, Sweet Vermouth, Gin", correctAnswer: true },
      { text: "Aperol, Dry Vermouth, Gin", correctAnswer: false },
    ],
  },
  {
    question: "After building a Glasgow mule, what do we top it up with?",
    answers: [
      { text: "Ginger Beer", correctAnswer: true },
      { text: "Soda Water", correctAnswer: false },
      { text: "Ginger Ale", correctAnswer: false },
      { text: "Elderflower Tonic", correctAnswer: false },
    ],
  },
  {
    question: "Bombay Saphire Gin, Soda Water and Sugar make up a Tom Collins. What is the missing ingredient?  ",
    answers: [
      { text: "Grenedine", correctAnswer: false },
      { text: "Cointreau", correctAnswer: false },
      { text: "Lemon", correctAnswer: true },
      { text: "Lime", correctAnswer: false },
    ],
  },
  {
    question: "What is the fruit juice found in Tartan Summer?",
    answers: [
      { text: "Pineapple Juice", correctAnswer: false },
      { text: "Orange Juice", correctAnswer: true },
      { text: "Cranberry Juice", correctAnswer: false },
      { text: "Apple Juice", correctAnswer: false },
    ],
  },
  {
    question: "Tequila and Lime are ingredients in a Margarita. What is the missing alcoholic ingredient?",
    answers: [
      { text: "Bombay Saphire Gin", correctAnswer: false },
      { text: "Sloe Gin", correctAnswer: false },
      { text: "Cointreau", correctAnswer: true },
      { text: "Mezcal", correctAnswer: false },
    ],
  },
  {
    question: "What method is used to make a Bloody Mary?",
    answers: [
      { text: "Shake and Fine Strain", correctAnswer: false },
      { text: "Roll and Stretch", correctAnswer: true },
      { text: "Build", correctAnswer: false },
      { text: "Shake and Charge", correctAnswer: false },
    ],
  },
  {
    question: "What garnish do we use for a Gardener's choice?",
    answers: [
      { text: "Lemon", correctAnswer: false },
      { text: "Lime", correctAnswer: false },
      { text: "Mint Sprigg", correctAnswer: false },
      { text: "Cucumber", correctAnswer: true },
    ],
  },
  {
    question: "What are the two whiskeys we use in our Perfect 10 mix?",
    answers: [
      { text: "Glenfiddich and Ardbeg", correctAnswer: false },
      { text: "Laphroig and Glenfiddich", correctAnswer: false },
      { text: "Laphroig and Ardbeg", correctAnswer: false },
      { text: "Glenmorangie and Ardbeg", correctAnswer: true },
    ],
  },
  {
    question: "Which cocktail do we use brown sugar in?",
    answers: [
      { text: "Scotch Mist", correctAnswer: true },
      { text: "Glasgow Mule", correctAnswer: false },
      { text: "Citizen Sprtiz", correctAnswer: false },
      { text: "Perfect 10", correctAnswer: false },
    ],
  },
  {
    question: "What volume of Hennessy do we put in a Hennessy Highball?",
    answers: [
      { text: "15ml", correctAnswer: false },
      { text: "25ml", correctAnswer: false },
      { text: "35ml", correctAnswer: false },
      { text: "50ml", correctAnswer: true },
    ],
  },
  {
    question: "How many mls of tomato juice goes into a bloody mary?",
    answers: [
      { text: "50ml", correctAnswer: false },
      { text: "75ml", correctAnswer: false },
      { text: "100ml", correctAnswer: true },
      { text: "150ml", correctAnswer: false },
    ],
  },
  {
    question: "What ingredients are in a Citizen Spritz?",
    answers: [
      { text: "Lime, Honey, Sloe Gin, Campari, Prosecco", correctAnswer: false },
      { text: "Lemon, Honey, Sloe Gin, Aperol, Prosecco", correctAnswer: true },
      { text: "Lime, Brown Sugar, Sloe Gin, Aperol, Prosecco", correctAnswer: false },
      { text: "Lemon, Sugar, Bombay Saphire, Aperol, Proescco", correctAnswer: false },
    ],
  },
  {
    question: "What ingredient is used to top up a mircale worker?",
    answers: [
      { text: "Ginger Beer", correctAnswer: false },
      { text: "Soda Water", correctAnswer: false },
      { text: "Elderflower Tonic", correctAnswer: false},
      { text: "Mediterranean Tonic", correctAnswer: true },
    ],
  },
  {
    question: "Which of these 2 ingredients are found in a Cosmopolitan?",
    answers: [
      { text: "Gin, Sweet Vermouth", correctAnswer: false },
      { text: "Vodka, Cointreau", correctAnswer: true },
      { text: "Gin, Cointreau", correctAnswer: false },
      { text: "Vodka, Creme De Mure", correctAnswer: false },
    ],
  },
  {
    question: "How many mls of soda water do we use in an Aperol Sprtiz?",
    answers: [
      { text: "25ml", correctAnswer: true },
      { text: "50ml", correctAnswer: false },
      { text: "100ml", correctAnswer: false },
      { text: "Top it up", correctAnswer: false },
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
const images = {
  highScoreImage: 'assets/images/high_score_image.jpg',
  averageScoreImage: 'assets/images/averagescore_image.jpg',
  lowScoreImage: 'assets/images/low_score_image.jpg',
};


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
  if (score === 20) {
    message = `<strong style="font-weight: bold;">You have scored <span style="color: pink;">20</span> out of 20!</strong><br><br> 
    Bravo, Mixologist Extraordinaire!<br><br> 
    You've earned the prestigious title of 'Cocktail Connoisseur'! Your knowledge of mixology is so impressive that even the Martini shivers in its glass with envy. Cheers to your cocktail wisdom, and may your future endeavors be shaken, stirred, and always delightful!`;
    imageSource = images.highScoreImage;
  } else if (score >= 10) {
    message = `<strong style="font-weight: bold;">You scored <span style="color: pink;">${score}</span> out of 20.</strong><br><br>
    Great job, Cocktail Apprentice!<br><br>
    You're making waves and mixing things up quite nicely. With a bit more practice, you'll soon be crafting cocktails like a pro! Keep the spirits high and your shaker busier than a bee in a flower garden. Your cocktail mastery is just a few sips away!`;
    imageSource = images.averageScoreImage;
  } else {
    message = `<strong style="font-weight: bold;">You scored <span style="color: pink;">${score}</span> out of 20.</strong><br><br>
    Oops! Looks like you've got some cocktail homework to do.<br><br> 
    Well, it seems like your cocktail journey is just beginning! Don't worry, even the best bartenders started with a few spills and mix-ups. Keep those spirits high and your curiosity stirred. More cocktail adventures await, so keep sipping, learning, and soon you'll be raising your glass to success!`;
    imageSource = images.lowScoreImage;
  }
  quizContainer.innerHTML = `
  <div class="quiz-results">
    <h1>Your Results are here!</h1>
    <p>${message}</p>
    <img src="${imageSource}" alt="Result Image" id="result-image">
  </div>`;
}

// Event listener for the "Next" button
nextButton.addEventListener("click", nextQuestion);


// Initialize the quiz
initializeQuiz();
