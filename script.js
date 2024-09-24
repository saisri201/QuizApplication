// Sample quiz data categorized by topics


const quizData = {
    "JAVA Test": [
        {
            question: "1. Which of the following is a valid Long Literal?",
            options: ["a. ABH8097", "b. L990023", "c. 904423", "d. 0xnf029L"],
            answer: "d. 0xnf029L"
        },
        {
            question: "2. What does the expression float a=35/0 return?",
            options: ["a. 0", "b. Not a Number", "c. Infinity", "d. Runtime exception"],
            answer: "c. Infinity"
        },
        {
            question: "3. Which package contains the Random class?",
            options: ["a. java.util package", "b. java.lang package", "c. java.awt package", "d. java.io package"],
            answer: "a. java.util package"
        },
        {
            question: "4. An interface with no fields or methods is known as a ______.",
            options: ["a. Runnable Interface", "b. Marker Interface", "c. Abstract Interface", "d. CharSequence Interface"],
            answer: "b. Marker Interface"
        },
        {
            question: "5. Which option is false about the final keyword?",
            options: ["a. A final method cannot be overridden in its subclasses.", "b. A final class cannot be extended.", "c. A final class cannot extend other classes.", "d. A final method can be inherited."],
            answer: "c. A final class cannot extend other classes."
        }
    ],
    "PYTHON Test": [
        {
            question: "1. Who developed Python Programming Language?",
            options: ["a. Wick van Rossum", "b. Rasmus Lerdorf", "c. Guido van Rossum", "d. Niene Stom"],
            answer: "c. Guido van Rossum"
        },
        {
            question: "2. Which type of Programming does Python support?",
            options: ["a. Object-oriented programming", "b. Structured programming", "c. Functional programming", "d. All of the mentioned"],
            answer: "d. All of the mentioned"
        },
        {
            question: "3. Is Python case sensitive when dealing with identifiers?",
            options: ["a. No", "b. Yes", "c. Machine Dependent", "d. None of the mentioned"],
            answer: "b. Yes"
        },
        {
            question: "4. Which of the following is the correct extension of the Python file?",
            options: ["a. .python", "b. .pl", "c. .py", "d. .p"],
            answer: "c. .py"
        },
        {
            question: "5. Is Python code compiled or interpreted?",
            options: ["a. Python code is both compiled and interpreted", "b. Python code is neither compiled nor interpreted", "c. Python code is only compiled", "d. Python code is only interpreted"],
            answer: "a. Python code is both compiled and interpreted"
        }
    ]
};

let selectedTopic = null;
let currentQuestionIndex = 0;
let score = 0;

function loadTopics() {
    const topicsDiv = document.getElementById('topics');
    topicsDiv.innerHTML = `
        <h2>Select a Topic:</h2>
        ${Object.keys(quizData).map(topic => `
            <button class="topic-button">${topic}</button>
        `).join('')}
    `;
    document.querySelectorAll('.topic-button').forEach(button => {
        button.addEventListener('click', () => {
            selectedTopic = button.textContent;
            resetQuiz();
        });
    });
}

function loadQuestion() {
    if (!selectedTopic) {
        document.getElementById('feedback').textContent = 'Please select a topic first.';
        return;
    }
    
    

    const questions = quizData[selectedTopic];
    if (currentQuestionIndex >= questions.length) {
        document.getElementById('quiz').innerHTML = '';
        document.getElementById('feedback').textContent = `Quiz finished! Your score is ${score}/${questions.length}.`;
        document.getElementById('next-button').style.display = 'none';
        document.getElementById('restart-button').style.display = 'block';
        return;
    }

    const questionData = questions[currentQuestionIndex];
    const quizDiv = document.getElementById('quiz');
    quizDiv.innerHTML = `
        <p>${questionData.question}</p>
        ${questionData.options.map((option, index) => `
            <input type="radio" name="option" value="${option}" id="option${index}">
            <label for="option${index}">${option}</label><br>
        `).join('')}
    `;

    document.getElementById('next-button').style.display = 'block';
    document.getElementById('restart-button').style.display = 'none';
}

document.getElementById('next-button').addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        const answer = selectedOption.value.trim();
        const questions = quizData[selectedTopic];
        const questionData = questions[currentQuestionIndex];

        if (answer === questionData.answer) {
            document.getElementById('feedback').textContent = 'Correct!';
            score++;
        } else {
            document.getElementById('feedback').textContent = 'Incorrect. The correct answer is ' + questionData.answer + '.';
        }

        currentQuestionIndex++;
        loadQuestion();

        document.getElementById('score').textContent = `Score: ${score}`;
    } else {
        document.getElementById('feedback').textContent = 'Please select an answer.';
    }
});

document.getElementById('restart-button').addEventListener('click', () => {
    resetQuiz();
});

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('feedback').textContent = '';
    document.getElementById('score').textContent = '';
    loadQuestion();
}

loadTopics();
