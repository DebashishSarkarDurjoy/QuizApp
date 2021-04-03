const quizData = [
    {
        question: "At what temperature are Farenheit and Celsius equal to each other?",
        a: "40",
        b: "-40",
        c: "32",
        d: "-32",
        correct: "b",
    },
    {
        question: "Which planet has the most moons?",
        a: "Jupiter",
        b: "Saturn",
        c: "Uranus",
        d: "Neptune",
        correct: "a",
    },
    {
        question: "What is the lightest metal?",
        a: "Lithium",
        b: "Mercury",
        c: "Iron",
        d: "Gold",
        correct: "a",
    },
    {
        question: "Who discovered radio waves?",
        a: "Nicola Tesla",
        b: "Heinrich Hertz",
        c: "Issac Newton",
        d: "Michael Faraday",
        correct: "b",
    },
];

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const answerEls = document.querySelectorAll(".answer");

var currentQuestion = 0;
let score = 0;
loadQuiz();

function getSelected() {
    let answer = undefined;
    
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answer) => {
        answer.checked = false;
    })
}

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuestion];
    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
    
};

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuestion].correct) {
                score++;
            }
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuiz();    
        }
        else {
            quiz.innerHTML = `<h2>Yours score: ${score}/${quizData.length}</h2>
                              <button onclick="location.reload()">Reload</button>`;
        } 
    }
    // else {
    //     alert("Please select an answer!");
    // }
    
    
});