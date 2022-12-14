///Using a bunch of let to allow these variables to reassigned to access html elements

let scores = document.querySelector("#scores");
let timer = document.querySelector("#timer");
let container = document.querySelector("#container");
let title = document.querySelector("#title");
let content = document.querySelector("#content");
let start = document.querySelector("#start");
let answer = document.querySelector("#answer");

//Structuring questions
class Question {
    constructor(question, options, answer) {
        this.question = question;
        this.options = options;
        this.answer = answer;
    }
}

let questionList = [];

const options1 = ["1. boolean", "2. object", "3. number", "4. string"];
const question1 = new Question("What data types can local storage accept?", options1, "4. string");
questionList.push(question1);

const options2 = ["1. string", "2. number", "3. boolean", "4. all of the above"];
const question2 = new Question("What data types can a function return?", options2, "4. all of the above");
questionList.push(question2);

const options3 = ["1. body", "2. canvas", "3. concept", "4. aside"];
const question3 = new Question("What prameters can be passed into the query selector function?", options3, "2. css selectors");
questionList.push(question3);

const options4 = ["1. body", "2. canvas", "3. concept", "4. aside"];
const question4 = new Question("Which of the following is not an HTML tag?", options4, "3. concept");
questionList.push(question4);

const option5 = ["1. add()", "2. push()", "3. concat()", "4. non of the above"];
const question5 = new Question("Which of the following functions can add an element to the end of an array? ", options5, "2. push()");
questionList.push(question5);

const options6 = ["1. quotes", "2. curly braces", "3. parenthesis", "4. square braces"];
const question6 = new Question("What syntax wraps aroun strings?", options6, "1. quotes");
questionList.push(question6);

//function for question loops
let optionList = [];
let currentQues = 0;
let score = 0;
let timeLeft = 61;
let isQuizOngoing = false;
let leaderboard = [];
let initials = "";
let isClearingAnswer = false;
let clearingAnswerCode = 0;
let isCorrect = false;

function init() {
    start.addEventListener("click", questionLoop);
    scores.addEventListener("click", showScores);
}

//Creates option buttons 
function questionLoop () {
    runTimer();
    isQuizOngoing = true;
    start.setAttribute("style", "display: none");
    content.setAttribute("style", "display: none");
    let numOfOptions = questionList[0].options.length;
    for(let i = 0; i < numOfOptions; i++) {
        let option = document.createElement("button");
        container.appendChild(option);
        option.setAttribute("id", 'button${i + 1}');
    }
    nextQuestion();
}

//Counts down the timer and ends the quiz if/when the timer hits zero
function runTimer () {
    let clock = setInterval(function() {
        timeLeft--;
        timer.textContent = 'Time: ${timeLeft} seconds';
        if(timeLeft === 0) {
            clearInterval(clock);
            if(title.textContent !== "All Done.") {
                endOfQuiz();
            }
        }
    }, 1000)
}

//Check if you are on the last question
//Goes to the next question or ends the quiz 
function nextQuestion(event) {
    writeAnswer(event);
    if(currentQues < questionList.length) {
        changeQuestion();
    } else {
        endOfQuiz();
    }
}

