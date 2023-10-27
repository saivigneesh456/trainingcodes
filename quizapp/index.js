const questions = [
    {
        question : 'what is the full of html?',
        answers: ['hyper tecxt', 'hyper text markup language','textup','markup'],
        correctAnswer: 'hyper text markup language'
    },
    {
        question : 'full of js?',
        answers: ['java script', 'jsssss','java','.js'],
        correctAnswer: 'java script'
    },
    {
        question : 'what is the extenstion to save a html file?',
        answers: ['html', '.html','.htm','htmlscs'],
        correctAnswer: '.html'
    },
    {
        question : 'what is extenstion to save a js files?',
        answers: ['jas', 'js','.js','.java'],
        correctAnswer: '.js'
    }
];


let currentQuestionIndex = 0;
let score = 0;

const startContainer = document.getElementById('start-container');
const retakeContainer = document.getElementById('retake-container');
const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const resultElement = document.getElementById('result');

document.getElementById('start-quiz').addEventListener('click', startQuiz);
document.getElementById('retake-quiz').addEventListener('click', retakeQuiz);

function startQuiz(){
    startContainer.style.display = 'none';
    retakeContainer.style.display ='none';
    quizContainer.style.display ='block';
    loadQuestion();
}

function retakeQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    resultElement.textContent ='';
    startQuiz();
}

function loadQuestion(){
        if(currentQuestionIndex < questions.length){
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = `Question ${currentQuestionIndex + 1}: ${currentQuestion.question}`;

        answersElement.innerHTML= '';

        currentQuestion.answers.forEach((answer, index) => {
            const answerButton = document.createElement('button');
            answerButton.textContent = answer;
            answerButton.addEventListener('click', () => checkAnswer(answer, currentQuestion.correctAnswer));
            answersElement.appendChild(answerButton);
        });
     } else{
                showResults();
        }
    }

function checkAnswer(selectedAnswer, correctAnswer){
    if(selectedAnswer === correctAnswer){
        score++;
        resultElement.textContent  = 'Correct!';
    }
    else{
        resultElement.textContent = 'Incorrect.';
    }

    currentQuestionIndex++;
    loadQuestion();
}

function showResults(){
    questionElement.textContent = 'Quiz Completed';
    answersElement.innerHTML = '';
    resultElement.textContent= `you Scored ${score} out of ${questions.length} questions.`;
    retakeContainer.style.display = 'block';
}


startContainer.style.display = 'block';
quizContainer.style.display ='none';
retakeContainer.style.display ='none';
