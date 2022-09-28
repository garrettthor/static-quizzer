function buildQuiz(){
    // variable to store the HMTL output
    const output = [];

    // for each question
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {

            // variable to store the list ofc possible answers
            const answers = [];

            // and for each available answer
            for(letter in currentQuestion.answers){

                // add an HTML radio button
                answers.push(
                    `<label>
                        <input type="radio" name="questions${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );

    // finally combine out output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
};

function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
            // add to number of correct answers
            numCorrect++;

            // color the answer green
            answerContainers[questionNumber].style.color = 'lightgreen';
        };
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
};

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const myQuestions = [
    {
        question: '(Heirloom tomato salad) A variety of heirloom tomatoes are served with thinly sliced _______',
        answers: {
            a: 'cucumbers',
            b: 'zuchini',
            c: 'ramps',
            d: 'summer melon'
        },
        correctAnswer: 'd'
    },

    {
        question: '(Heirloom tomato salad) The dressing is made with tomato _____, vinegar, garlic, ____ chilies, _____ fish sauce, and sugar',
        answers: {
            a: 'water, Thai, vegan',
            b: 'puree, Serano, house',
            c: 'juice, Fresno, local',
            d: 'chunks, Jalapeno, Vietnamese'
        },
        correctAnswer: 'a'
    },

    {
        question: '(Heirloom tomato salad) A dollop of whipped _____________ is in the center of the plate',
        answers: {
            a: 'creme fraiche',
            b: 'ricotta cheese',
            c: 'laughing cow cheese',
            d: 'sour cream'
        },
        correctAnswer: 'c'
    },

    {
        question: '(Heirloom tomato salad) Garnish: Toasted _______, lemon ________, and ______________.',
        answers: {
            a: 'rice powder, verbana, anise hyssop',
            b: 'garlic, rind, star anise',
            c: 'quinoa powder, oil, clove',
            d: 'bonito flake, essence, fennel'
        },
        correctAnswer: 'a'
    },

    {
        question: '(Heirloom tomato salad) select correct answer',
        answers: {
            a: 'Gluten Free',
            b: 'Gluten Free with mod'
        },
        correctAnswer: 'a'      
    },

    {
        question: '(Heirloom tomato salad) select correct answer',
        answers: {
            a: 'Nut Free',
            b: 'Nut Free with mod'
        },
        correctAnswer: 'a'      
    },

    {
        question: '(Heirloom tomato salad) select correct answer',
        answers: {
            a: 'Diary Free',
            b: 'Dairy Free with mod - no laughing cow cheese'
        },
        correctAnswer: 'b'      
    },

    {
        question: '(Heirloom tomato salad) select correct answer',
        answers: {
            a: 'Vegetarian',
            b: 'Vegetarian with mod'
        },
        correctAnswer: 'a'      
    },

    {
        question: '(Heirloom tomato salad) select correct answer',
        answers: {
            a: 'Vegan',
            b: 'Vegan with mod - no laughing cow cheese'
        },
        correctAnswer: 'b'      
    },

    {
        question: '(Heirloom tomato salad) select correct answer',
        answers: {
            a: 'Gluten cross contamination possible',
            b: 'No gluten cross Contamination'
        },
        correctAnswer: 'b'      
    },
]

buildQuiz();

submitButton.addEventListener('click', showResults);