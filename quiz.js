//document.querySelector("#quizButton").addEventListener("click", function() {
//   console.log("asdfd");
//document.querySelector("#quiz").style.display = "block";
//});
const start = document.getElementById('start');
const quiz = document.getElementById('quiz');
const question = document.getElementById('question');
const choiceA = document.getElementById('choiceA');
const choiceB = document.getElementById('choiceB');
const choiceC = document.getElementById('choiceC');
const progress = document.getElementById('progress');
const scoreDiv = document.getElementById('scoreContainer');
let questions = [
    {
        question: "Which is the best description of a variable?",
        choiceA: "Identifies a portion of a string.",
        choiceB: "A method to join strings.",
        choiceC: "Allows you to store information so it can be reused throughout the program",
        correct: "C"
    },
    {
        question: "Which is the best description of the substring method?",
        choiceA: "Identifies a portion of a string.",
        choiceB: "A method to join strings.",
        choiceC: "Allows you to store information so it can be reused throughout the program",
        correct: "A"
    },
    {
        question: "Which is the best description of concatenation?",
        choiceA: "Identifies a portion of a string.",
        choiceB: "A method to join strings.",
        choiceC: "Allows you to store information so it can be reused throughout the program",
        choiceD: "Allows you to make a decision based on a condition.",
        correct: "B"
    },
    {
        question: "Which is the best description of an if statement?",
        choiceA: "Identifies a portion of a string.",
        choiceB: "A method to join strings.",
        choiceC: "Allows you to store information so it can be reused throughout the program",
        correct: "A"
    },
];

const lastQuestion= questions.length -1;
let runningQuestion = 0;

function renderQuestion() {
    let q = questions[runningQuestion];
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA
    choiceB.innerHTML = q.choiceB
    choiceC.innerHTML = q.choiceC
}

start.addEventListener('click', startQuiz);

function startQuiz() {
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    console.log('should display quiz');
}

function renderProgress() {
    for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

function checkAnswer(answer) {
    if (questions[runningQuestion].correct == answer) {
        score++;
    }
    
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    } else {
        scoreRender();
    }
}

function scoreRender() {
    scoreDiv.style.display = 'block';
    const scorePercent = Math.round(100 * score/questions.length);
    let img = (scorePerCent >= 80) ? "assests/5.png" :
              (scorePerCent >= 60) ? "assets/4.png" :
              (scorePerCent >= 40) ? "assets/3.png" :
              (scorePerCent >= 20) ? "assets/2.png" :
              "assests/1.png";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}
//function answerIsCorrect() {
//    
//}