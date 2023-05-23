const questions = [
    {
      question: "What is the main ingredient used in the production of Scottish Whiskey?",
      answers: [
        { text: "Barley", correctAnswer: true },
        { text: "Rye", correctAnswer: false },
        { text: "Corn", correctAnswer: false },
        { text: "Wheat", correctAnswer: false },
      ],
    },
    {
      question: "Which region of Scotland is known for producing whiskey with a distinctive smoky flavour?",
      answers: [
        { text: "Speyside", correctAnswer: false },
        { text: "Highlands", correctAnswer: false },
        { text: "Islay", correctAnswer: true },
        { text: "Lowlands", correctAnswer: false },
      ],
    },
    {
      question: "Which well-known Scottish Whiskey brand uses a stag's head as its logo?",
      answers: [
        { text: "Talisker", correctAnswer: false },
        { text: "Dalmore", correctAnswer: true },
        { text: "Bowmore", correctAnswer: false },
        { text: "Aberfeldy", correctAnswer: false },
      ],
    },
    {
      question: "Which Scottish whiskey is often called the The King of Malts and is known for its smooth, honeyed character? ",
      answers: [
        { text: "Talisker", correctAnswer: false },
        { text: "Balvenie", correctAnswer: false },
        { text: "Macallan", correctAnswer: false },
        { text: "Glenlivet", correctAnswer: true },
      ],
    },
    {
      question: "Which Scottish whiskey is made exclusively from malted barley and produced in a single distillery? ",
      answers: [
        { text: "Glenmorangie", correctAnswer: true },
        { text: "Johnnie Walker", correctAnswer: false },
        { text: "Laphroig", correctAnswer: false },
        { text: "Glenfiddoch", correctAnswer: false },
      ],
    },
    {
        question: "Which Scottish whiskey is known for its peaty and smoky flavor, often described as medicinal? ",
        answers: [
          { text: "Dalwhinnie", correctAnswer: false },
          { text: "Glenlivet", correctAnswer: false },
          { text: "Laphroaig", correctAnswer: true },
          { text: "Glenfiddich", correctAnswer: false },
        ],
      },
      {
        question: "What is the traditional ingredient used in the production of Talisker whiskey that gives it a unique maritime character?  ",
        answers: [
          { text: "Brine", correctAnswer: true },
          { text: "Seaweed", correctAnswer: false },
          { text: "Peat", correctAnswer: false },
          { text: "Heather", correctAnswer: false },
        ],
      },
  ];

  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementsByClassName("answers");
  const nextButton = document.getElementById("next-button");
  const scoreElement = document.getElementById("score");
  
  function initializeQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.textContent = `Score: ${score}`;
    nextButton.disabled = true;
    displayQuestion();
  }
  
  function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
  
    for (let i = 0; i < answerButtons.length; i++) {
        const answerButton = answerButtons[i];
        const answer = currentQuestion.answers[i];
        answerButton.textContent = answer.text;
        answerButton.disabled = false;
        answerButton.classList.remove("correct", "incorrect");
    
        answerButton.addEventListener("click", () => {
          answerButton.disabled = true;
          checkAnswer(answer.correctAnswer, answerButton);
          nextButton.disabled = false;
        });
      }
  }
  
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
  
  
  function nextQuestion() 

  
  function showResults() 
  


  nextButton.addEventListener("click", nextQuestion);
  
  initializeQuiz();
