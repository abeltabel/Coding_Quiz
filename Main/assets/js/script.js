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

