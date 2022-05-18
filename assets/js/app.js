const questions = [
    {
        question:"Which JavaScript method is used to write HTML output?",
        ans1: "console.log()",
        ans2: "document.output()",
        ans3: "document.write()",
        ans4: "document.writeHTML()",
        correct: "ans3",
    },
    {
        question: "Which JavaScript method is used to access an HTML element?",
        ans1: "getElementById(id)",
        ans2:  "getElement(id)",
        ans3: "elementById(id)",
        ans4: "getElementById()",
        correct: "ans1",            
    },
    {
        question: "The 'function' and 'var' are known as?",
        ans1: "Keywords",
        ans2: "Data Types",
        ans3: "Prototypes",
        ans4: "Declaration statements",
        correct: "ans4",
    },
    {
        question: "Which type of language is JavaScript?",
        ans1: "High-level",
        ans2: "Object-Based",
        ans3: "Object-Oriented",
        ans4: "Assembly-language",
        correct: "ans2"
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".anwer");
const questionEl = document.getElementById("question");
const ans01 = document.getElementById("ans01");
const ans02 = document.getElementById("ans02");
const ans03 = document.getElementById("ans03");
const ans04 = document.getElementById("ans04");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswer();

    const currentQuestions = questions[currentQuiz];

    questionEl.innerText = currentQuestions.question;
    ans01.innerText = currentQuestions.ans1;
    ans02.innerText = currentQuestions.ans2;
    ans03.innerText = currentQuestions.ans3;
    ans04.innerText = currentQuestions.ans4;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl) =>{
            answerEl.checked = false;
        }
    );
}

submitBtn.addEventListener("click", ()  => {
    const answer = getSelected();

    if (answer) {
        if (answer === questions[currentQuiz].correct){
            score++;
        }

        currentQuiz++;
        if (currentQuiz < questions.length){
            loadQuiz();
        }else{
            quiz.innerHTML = <h3>You correctly scored ${score}/{questions.length} questions.</h3>
            <button onclick="location.reload()">Re-take Test</button>
            ;
        }
    }
});
