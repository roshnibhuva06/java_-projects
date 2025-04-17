const question = [
    {
        question: "What is the largest lake in the world?",
        answers :[
            { text: "Caspian Sea", correct:false},
            { text: "Baikal", correct:true},
            { text: "Lake Superior", correct:false},
            { text: "Ontario", correct:false},
        ]
    },
    {
        question: "Which planet in the solar system is known as the “Red Planet”?",
        answers :[
            { text: "Venus", correct:false},
            { text: "Earth", correct:false},
            { text: "Mars", correct:true},
            { text: "Jupiter", correct:false},
        ]
    },
    {
        question: " Who wrote the novel “War and Peace”?",
        answers :[
            { text: "Anton Chekhov", correct:false},
            { text: "Fyodor Dostoevsky", correct:false},
            { text: "Leo Tolstoy", correct:true},
            { text: "Ivan Turgenev", correct:false},
        ]
    },
    {
        question: " What is the capital of Japan?",
        answers :[
            { text: "Beijing", correct:false},
            { text: "Tokyo", correct:true},
            { text: "Seoul", correct:false},
            { text: "Bangkok", correct:false},
        ]
    },
    {
        question: "Which river is the longest in the world?",
        answers :[
            { text: "Amazon", correct:false},
            { text: "Mississippi", correct:false},
            { text: "Nile", correct:true},
            { text: "Yangtze", correct:false},
        ]
    },
    {
        question: "What gas is used to extinguish fires?",
        answers :[
            { text: "Oxygen", correct:false},
            { text: "Nitrogen", correct:true},
            { text: "Carbon dioxide", correct:false},
            { text: "Hydrogen", correct:false},
        ]
    },
    {
        question: "What animal is the national symbol of Australia?",
        answers :[
            { text: "Kangaroo", correct:true},
            { text: "Koala", correct:false},
            { text: "Emu", correct:false},
            { text: "Crocodile", correct:false},
        ]
    },
    {
        question: "Which of the following planets is not a gas giant?",
        answers :[
            { text: "Mars", correct:true},
            { text: "Jupiter", correct:false},
            { text: "Saturn", correct:false},
            { text: "Uranus", correct:false},
        ]
    },
    {
        question: " What is the name of the process by which plants convert sunlight into energy?",
        answers :[
            { text: "Respiration", correct:false},
            { text: "Photosynthesis", correct:true},
            { text: "Oxidation", correct:false},
            { text: "Evolution", correct:false},
        ]
    },
    {
        question: "What chemical element is designated as “Hg”?",
        answers :[
            { text: "Silver", correct:false},
            { text: "Tin", correct:false},
            { text: "Copper", correct:false},
            { text: "Mercury", correct:true},
        ]
    }
];

const questionElement= document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextbtn= document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score=0;
    nextbtn.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = question [currentQuestionIndex];
    let questionNO = currentQuestionIndex +1;
    questionElement.innerHTML = questionNO + ". "+currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button =document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);

    });
}
function resetState(){
    nextbtn.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++; 
    }
    
    else
    {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;

    });
    nextbtn.style.display= "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `you score ${score} out of ${question.length}!`;
    nextbtn.innerHTML = "play Again";
    nextbtn.style.display ="block";
}
function handleNextButton()
{
    currentQuestionIndex++;
    if(currentQuestionIndex < question.length)
    {
        showQuestion();
    }
    else{
        showScore();
    }
}
nextbtn.addEventListener("click", ()=>{
    if(currentQuestionIndex < question.length){
        handleNextButton();
    }
    else
    {
        startQuiz();
    }
});


startQuiz();

