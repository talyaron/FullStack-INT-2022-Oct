var startBtn = document.querySelector("#startBtn");
var questionsContainer = document.querySelector("#questionContainer");
var questionElement = document.querySelector("#question");
var answerButtonsElements = document.querySelectorAll("#answerButtons");
var endGameAlert = document.querySelector("#endGameAlert");
var quizContainer = document.querySelector(".container");
var endGameMessage = document.querySelector("#endGameMessage");
var finalScore = document.querySelector("#finalScore");
var correctAnswers = 0;
var shuffleQuestions, currentQuestionIndex;
var questions = [
    {
        question: "What team has the most UCL titles ?",
        answers: [
            { text: "Real Madrid", correct: true },
            { text: "Manchester United", correct: false },
            { text: "Milan", correct: false },
            { text: "Barcelona", correct: false }
        ]
    },
    {
        question: "Who won the Ballon D'or in 2017 ?",
        answers: [
            { text: "Luka Modric", correct: false },
            { text: "Lionel Messi", correct: false },
            { text: "Karim Benzema", correct: false },
            { text: "Cristiano Ronaldo", correct: true }
        ]
    },
    {
        question: "What transfer was the most expensive ?",
        answers: [
            { text: "Neymar Jr to PSG", correct: true },
            { text: "Kylian Mbappe to PSG", correct: false },
            { text: "Joao Felix to Atletico Madrid", correct: false },
            { text: "Cristiano Ronaldo to Real Madrid", correct: false }
        ]
    },
    {
        question: "What team has the biggest fan base in the world ?",
        answers: [
            { text: "Real Madrid", correct: false },
            { text: "Manchester United", correct: true },
            { text: "Liverpool", correct: false },
            { text: "Barcelona", correct: false }
        ]
    },
    {
        question: "Who has the most Ballon D'or ?",
        answers: [
            { text: "Zinedine Zidane", correct: false },
            { text: "Cristiano Ronaldo", correct: false },
            { text: "Lionel Messi", correct: true },
            { text: "Kaka", correct: false }
        ]
    },
    {
        question: "Who won the Ballon D'or in 2020 ?",
        answers: [
            { text: "Robert Lewandowski", correct: false },
            { text: "Cristiano Ronaldo", correct: false },
            { text: "Lionel Messi", correct: false },
            { text: "Never awarded due to Covid19", correct: true }
        ]
    },
    {
        question: "Which club has never won the UCL ?",
        answers: [
            { text: "Ajax", correct: false },
            { text: "Inter-milano", correct: false },
            { text: "Porto", correct: false },
            { text: "PSG", correct: true }
        ]
    },
    {
        question: "What country has the most World Cup titles ?",
        answers: [
            { text: "Brazil", correct: true },
            { text: "Spain", correct: false },
            { text: "Italy", correct: false },
            { text: "Germany", correct: false }
        ]
    },
    {
        question: "What is the biggest fan capacity stadium in the world ?",
        answers: [
            { text: "Santiago Bernabau (Real Madrid)", correct: false },
            { text: "Manchester United (Old Traford)", correct: false },
            { text: "Camp Nou (Barcelona)", correct: true },
            { text: "Signal Idunna Park (Dortmund)", correct: false }
        ]
    },
    {
        question: "Who is the highest scorer on one single UCL season ?",
        answers: [
            { text: "Cristiano Ronaldo", correct: true },
            { text: "Robert Lewandowski", correct: false },
            { text: "Lionel Messi", correct: false },
            { text: "Neymar Jr", correct: false }
        ]
    }
];
startBtn.addEventListener("click", startGame);
function startGame() {
    startBtn.classList.add("hide");
    shuffleQuestions = questions.sort(function () { return Math.random() - .5; });
    currentQuestionIndex = 0;
    questionsContainer.classList.remove("hide");
    setNextQuestion();
}
function setNextQuestion() {
    resetState();
    showQandA(shuffleQuestions[currentQuestionIndex]);
}
function showQandA(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(function (answer) {
        var optionButton = document.createElement("button");
        optionButton.innerText = answer.text;
        optionButton.classList.add("btn");
        if (answer.correct) {
            optionButton.dataset.correct = answer.correct;
        }
        optionButton.addEventListener("click", selectAnswer);
        answerButtonsElements[0].appendChild(optionButton);
    });
}
;
function resetState() {
    while (answerButtonsElements[0].firstChild) {
        answerButtonsElements[0].removeChild(answerButtonsElements[0].firstChild);
    }
}
function selectAnswer(event) {
    if (event.target.dataset.correct) {
        event.target.classList.add("btn--correct");
        correctAnswers++;
    }
    else {
        event.target.classList.add("btn--wrong");
    }
    if (shuffleQuestions.length > currentQuestionIndex + 1) {
        currentQuestionIndex++;
        setTimeout(setNextQuestion, 600);
    }
    else {
        setTimeout(function () {
            quizContainer.classList.add("hide");
            endGameAlert.classList.remove("hide");
            if (correctAnswers <= 2) {
                finalScore.innerText = correctAnswers + " / " + shuffleQuestions.length;
                endGameMessage.innerText = "Your football knowledge is nothing to be proud of...";
            }
            else if (correctAnswers >= 3 && correctAnswers <= 6) {
                finalScore.innerText = correctAnswers + " / " + shuffleQuestions.length;
                endGameMessage.innerText = "Not bad";
            }
            else if (correctAnswers >= 7 && correctAnswers <= 9) {
                finalScore.innerText = correctAnswers + " / " + shuffleQuestions.length;
                endGameMessage.innerText = "You know your football !";
            }
            else if (correctAnswers == 10) {
                finalScore.innerText = correctAnswers + " / " + shuffleQuestions.length;
                endGameMessage.innerText = "You are a true FOOTOPER !!!";
            }
        }, 1000);
    }
}
