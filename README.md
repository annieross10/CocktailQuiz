# Whisky Quiz!
Welcome to the Scottish Whisky Quiz! Get ready to put your knowledge to the test with 8 exciting multiple-choice questions. With its responsive design, the quiz is accessible on various devices. After completion, you'll receive instant feedback on your performance, helping you identify areas for improvement and enhancing your whisky knowledge.

This interactive quiz is designed to be fun but also challenge your understanding of Scottish whisky. Are you a whisky connoisseur or just starting your whisky journey? Find out where you stand!

![whisky quiz mockup](/assets/images/screenshots/whiskyquiz-mockup.png)

## Features
### Exisiting Features
#### Start Page
- The start page provides an overview of the quiz, introducing the topic of Scottish Whisky. It features an engaging image and eye-catching colors to capture the user's attention.
- Clear and easy-to-follow instructions are provided, and clicking the start button at the bottom of the page initiates the quiz immediately.

![whisky quiz start page](/assets/images/screenshots/startpage-screenshot.png)

#### Question Page
- Once the start button is clicked, the quiz presents the first round of questions.
- The questions are displayed within a question container, ensuring a clear and concise design. Each question offers 4 multiple-choice options, with a total of 8 questions.
- Hovering over the answers triggers a color change, enhancing the interactive experience.
- The "Next" button remains disabled until the user selects an answer.

![whisky quiz question page](/assets/images/screenshots/questionpage-screenshot.png)

#### Incorrect Answer
- If the user selects an incorrect answer, the button turns red, indicating the wrong choice.
- The "Next" button is then enabled, allowing the user to proceed to the next question.
- This interactive design element adds engagement to the quiz.

![whisky quiz incorrect answer](/assets/images/screenshots/wronganswer-screenshot.png)

#### Correct Answer
- When the user selects a correct answer, the button turns green, indicating the correct choice.
- The "Next" button is then enabled, allowing the user to proceed to the next question.
- This interactive design element adds engagement to the quiz.

![whisky quiz correct answer](/assets/images/screenshots/correctanswer-screenshot.png)

#### Results Page
- At the end of the quiz, a results page is displayed. It shows the total score from all the questions, along with a message that changes based on the user's result.
- A friendly image of a whisky glass accompanies the results, maintaining the fun nature of the quiz.

![whisky quiz correct answer](/assets/images/screenshots/resultspage-screenshot.png)

## Testing

### Bugs
#### Solved Bugs
- While writing the JavaScript code, an issue was encountered where the end results were coming out wrong. 
    - For example, if the user clicked answer 1 for question 2, the user would receive one point (even though this was incorrect) as answer 1 was correct for question 1.
    - The issue was identified as the event listeners not being removed for each question.
    - To solve this issue, a named event listener function, answerButtonClickHandler, was added and assigned as the event listener for each answer button. 
    - This function removes the previous event listener using removeEventListener before performing the necessary actions and checking the answer.
    -  The following code was used to fix the bug:

    ![js screenshot 1](/assets/images/screenshots/javascriptcode1.png)
    ![js screenshot 2](/assets/images/screenshots/javascriptcode2.png)

- A start button was added at the beginning of the quiz, as it was not originally implemented in the code.
    - The necessary HTML and CSS code were added, but both the start page and the quiz container were displayed at the same time.
    - This was resolved by adding <b>\ #quiz-container { display: none; }</b>, which initially hides the quiz container.
    - The following JavaScript code was used to ensure the quiz container appears once the start button is clicked:
    
    ![js screenshot 3](/assets/images/screenshots/javascriptcode3.png)

### Validator Testing

#### HTML
- No Errors were found when passing through the official [W3C validator](https://validator.w3.org/#validate_by_input)
#### CSS
- No Errors were found when passing though the official [W3C validator](https://jigsaw.w3.org/css-validator/)
#### JavaScript
- No errors were found when passing through the official [Jshint validator](https://jshint.com/)
 - The following metrics were returned:
 - There are 7 functions in this file.
 - Function with the largest signature take 2 arguments, while the median is 0.
 - Largest function has 10 statements in it, while the median is 5.
 - The most complex function has a cyclomatic complexity value of 3 while the median is 2.
#### Accessibility 
 - I confirmed that the colours and fonts chosen are easy to read and accessible by running them through Lighthouse in Devtools.

 ![lighthouse in devtools](/assets/images/screenshots/lighthouse-screenshot.png)
 
### Unfixed Bugs
No unfixed bugs

## Deployment
After preparing the site for deployment, the next step was to host it on GitHub pages. I followed these steps to deploy:

- Go to the Settings tab of the Github Repository.
- Under the code and automation section, I navigate to the Pages section.
- In Github Pages, I select the main branch to deploy the page.
- After selecting the main branch, the page will refresh and display a link to confirm the successful deployment.

The live link can be found here - https://annieross10.github.io/whiskyquiz/

## Credits
### Content
- The font for the website was taken from [Google Fonts](https://fonts.google.com/)
- The instructions and influence to create an aesthetic looking quiz (including the incorrect and correct colour idea) and also advice on the javascript functions for a fully working quiz taken from [This Youtube Tutorial](https://www.youtube.com/watch?v=PBcqGxrr9g8&t=1155s)
- Steps taken to create the JavaScript functions of the quiz influenced by [This website tutorial](https://simplestepscode.com/javascript-quiz-tutorial/)

### Media
The images whiskyimage and whiskyimagetwo are taken from [freepik](https://www.freepik.com/)

