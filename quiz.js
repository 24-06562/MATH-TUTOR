// --- TOPIC SELECTION ---
function selectTopic(topic) {
    const content = document.getElementById('content');

    if(topic === 'basic') {
        content.innerHTML = `
            <h2>Basic Math Topics</h2>
            <ul>
                <li onclick="showTutorial('addition')">Addition & Subtraction</li>
                <li onclick="showTutorial('multiplication')">Multiplication & Division</li>
                <li onclick="showTutorial('integers')">Integers</li>
                <li onclick="showQuiz('basic')">✨ Basic Math Quiz</li>
            </ul>
        `;
    } else if(topic === 'advanced') {
        content.innerHTML = `
            <h2>Advanced Math Topics</h2>
            <ul>
                <li onclick="showTutorial('indices')">Law of Indices</li>
                <li onclick="showQuiz('advanced')">✨ Indices Quiz</li>
            </ul>
        `;
    }
}

// --- QUIZ DATA ---
const quizzes = {
    basic: {
        title: "Basic Arithmetic Quiz",
        topicKey: 'basic',
        questions: [
            { question: "What is 15 + 7?", answer: 22 },
            { question: "What is 20 - 8?", answer: 12 },
            { question: "What is 6 × 4?", answer: 24 },
            { question: "What is 30 ÷ 5?", answer: 6 },
            { question: "What is 9 + 13?", answer: 22 },
            { question: "What is 50 - 17?", answer: 33 },
            { question: "What is 7 × 8?", answer: 56 },
            { question: "What is 64 ÷ 8?", answer: 8 }
        ]
    },
    advanced: {
        title: "Laws of Indices Quiz",
        topicKey: 'indices',
        questions: [
            { question: "Simplify 2³ × 2²", answer: 32 },
            { question: "Simplify 3⁶ ÷ 3²", answer: 81 },
            { question: "Simplify (4²)³", answer: 4096 },
            { question: "What is 9⁰?", answer: 1 },
            { question: "Simplify 5² × 5³", answer: 625 },
            { question: "Simplify 7⁵ ÷ 7²", answer: 343 },
            { question: "Simplify (2³)⁴", answer: 4096 },
            { question: "Simplify (3/2)²", answer: 2.25 }
        ]
    }
};
// --- END QUIZ DATA ---

// --- SHOW QUIZ ---
function showQuiz(quizKey) {
    const content = document.getElementById('content');
    const quiz = quizzes[quizKey];
    
    let questionsHTML = '';
    quiz.questions.forEach((q, index) => {
        questionsHTML += `
            <div class="quiz-question">
                <label for="q${index}">${index + 1}. ${q.question}</label>
                <input type="number" step="any" id="q${index}" class="math-input small-input" placeholder="Answer">
            </div>
        `;
    });

    content.innerHTML = `
        <p class="back-button" onclick="selectTopic('${quiz.topicKey}')">
            &larr; Back to Topics
        </p>
        <h2>${quiz.title}</h2>
        <div class="tutorial-text">
            <p>Test your knowledge! Enter your answers below.</p>
            <div class="quiz-area">
                ${questionsHTML}
            </div>
            <button onclick="submitQuiz('${quizKey}')" style="margin-top: 20px;">Submit Answers</button>
            <div id="quizResultArea" class="quiz-result-area"></div>
        </div>
    `;
}

// --- SUBMIT QUIZ ---
function submitQuiz(quizKey) {
    const quiz = quizzes[quizKey];
    let score = 0;
    const totalQuestions = quiz.questions.length;
    const resultArea = document.getElementById('quizResultArea');
    let feedbackHTML = '<h3>Your Results:</h3>';
    
    quiz.questions.forEach((q, index) => {
        const inputElement = document.getElementById(`q${index}`);
        const userAnswer = parseFloat(inputElement.value);
        const correctAnswer = parseFloat(q.answer);
        const isCorrect = Math.abs(userAnswer - correctAnswer) < 0.0001; // handles decimals

        const icon = isCorrect ? '✅' : '❌';
        const feedbackClass = isCorrect ? 'correct' : 'incorrect';
        
        if (isCorrect) score++;

        feedbackHTML += `
            <p class="feedback-item ${feedbackClass}">
                ${icon} Q${index + 1}: ${q.question} <br>
                Your Answer: ${inputElement.value || '[No Answer]'} <br>
                ${isCorrect ? '' : `Correct Answer: <strong>${q.answer}</strong>`}
            </p>
        `;
    });

    const percentage = ((score / totalQuestions) * 100).toFixed(0);
    const scoreText = `You scored <strong>${score} out of ${totalQuestions}</strong> (${percentage}%).`;
    const finalMessage = percentage == 100 ? 
        '<p class="final-message perfect">Perfect score! You\'re a math wiz! 🥳</p>' : 
        (percentage >= 75 ? '<p class="final-message great">Great job! Keep practicing! 👍</p>' : '<p class="final-message needs-work">Review the topics and try again! 🤔</p>');

    resultArea.innerHTML = `
        <div class="score-summary">
            ${scoreText}
            ${finalMessage}
        </div>
        ${feedbackHTML}
    `;
}

// --- SHOW TUTORIAL ---
function showTutorial(topicKey) {
    const content = document.getElementById('content');
    let title = '';
    let tutorialContent = '';

    switch (topicKey) {
        case 'addition':
            title = 'Addition & Subtraction Tutorial';
            tutorialContent = `
                <p><strong>Addition:</strong> Combining two or more numbers. Example: 5 + 3 = 8.</p>
                <p><strong>Subtraction:</strong> Taking one number away from another. Example: 8 - 3 = 5.</p>
                <h3>Try it Yourself!</h3>
                <h4>Addition</h4>
                <div class="demonstration-area">
                    <input type="number" id="num1Add" placeholder="Enter first number" class="math-input">
                    <span class="operator-plus">+</span>
                    <input type="number" id="num2Add" placeholder="Enter second number" class="math-input">
                    <button onclick="demonstrateAddition()">Calculate</button>
                    <p class="result" id="additionResult">Result: ?</p>
                </div>
                
                <h4>Subtraction</h4>
                <div class="demonstration-area">
                    <input type="number" id="num1Sub" placeholder="Enter minuend" class="math-input">
                    <span class="operator-plus">-</span>
                    <input type="number" id="num2Sub" placeholder="Enter subtrahend" class="math-input">
                    <button onclick="demonstrateSubtraction()">Calculate</button>
                    <p class="result" id="subtractionResult">Result: ?</p>
                </div>
            `;
            break;

        case 'multiplication':
            title = 'Multiplication & Division Tutorial';
            tutorialContent = `
                <p><strong>Multiplication:</strong> Repeated addition. Example: 4 × 3 = 12.</p>
                <p><strong>Division:</strong> Splitting a number into equal parts. Example: 12 ÷ 3 = 4.</p>
                
                <h3>Try it Yourself!</h3>
                <h4>Multiplication</h4>
                <div class="demonstration-area">
                    <input type="number" id="mulNum1" placeholder="Enter multiplier" class="math-input">
                    <span class="operator-plus">x</span>
                    <input type="number" id="mulNum2" placeholder="Enter multiplicand" class="math-input">
                    <button onclick="demonstrateMultiplication()">Calculate</button>
                    <p class="result" id="multiplicationResult">Result: ?</p>
                </div>

                <h4>Division</h4>
                <div class="demonstration-area">
                    <input type="number" id="divNum1" placeholder="Enter dividend" class="math-input">
                    <span class="operator-plus">/</span>
                    <input type="number" id="divNum2" placeholder="Enter divisor" class="math-input">
                    <button onclick="demonstrateDivision()">Calculate</button>
                    <p class="result" id="divisionResult">Result: ?</p>
                </div>
            `;
            break;

        case 'integers':
            title = 'Integers Tutorial';
            tutorialContent = `
                <p>Integers are all whole numbers (positive, negative, or zero).</p>
                
                <h3>Try it Yourself!</h3>
                <div class="demonstration-area">
                    <input type="number" id="intNum1" placeholder="Enter first integer" class="math-input">
                    <select id="intOperator" class="math-input small-input">
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="*">×</option>
                        <option value="/">÷</option>
                    </select>
                    <input type="number" id="intNum2" placeholder="Enter second integer" class="math-input">
                    <button onclick="demonstrateIntegers()">Calculate</button>
                    <p class="result" id="integerResult">Result: ?</p>
                </div>
            `;
            break;

        case 'indices':
            title = 'Laws of Indices Tutorial';
            tutorialContent = `
                <p>Indices (or exponents) show repeated multiplication.</p>
                
                <h3>1. Product of Powers: a^m × a^n = a^(m+n)</h3>
                <div class="demonstration-area">
                    <input type="number" id="pBase" placeholder="Base a" class="math-input small-input">
                    <input type="number" id="pM" placeholder="m" class="math-input small-input">
                    <input type="number" id="pN" placeholder="n" class="math-input small-input">
                    <button onclick="demoProduct()">Calculate</button>
                    <p id="productResult" class="result">Result: ?</p>
                </div>

                <h3>2. Quotient of Powers: a^m ÷ a^n = a^(m−n)</h3>
                <div class="demonstration-area">
                    <input type="number" id="qBase" placeholder="Base a" class="math-input small-input">
                    <input type="number" id="qM" placeholder="m" class="math-input small-input">
                    <input type="number" id="qN" placeholder="n" class="math-input small-input">
                    <button onclick="demoQuotient()">Calculate</button>
                    <p id="quotientResult" class="result">Result: ?</p>
                </div>

                <h3>3. Power of a Power: (a^m)^n = a^(m×n)</h3>
                <div class="demonstration-area">
                    <input type="number" id="ppBase" placeholder="a" class="math-input small-input">
                    <input type="number" id="ppM" placeholder="m" class="math-input small-input">
                    <input type="number" id="ppN" placeholder="n" class="math-input small-input">
                    <button onclick="demoPowerPower()">Calculate</button>
                    <p id="powerPowerResult" class="result">Result: ?</p>
                </div>

                <h3>4. Fractional Indices: a^(1/n) = nth root of a</h3>
                <div class="demonstration-area">
                    <input type="number" id="fracA" placeholder="a" class="math-input small-input">
                    <input type="number" id="fracN" placeholder="n" class="math-input small-input">
                    <button onclick="demoFraction()">Calculate</button>
                    <p id="fractionResult" class="result">Result: ?</p>
                </div>

                <h3>5. Power of a Quotient: (a/b)^n = a^n / b^n</h3>
                <div class="demonstration-area">
                    <input type="number" id="pqA" placeholder="a" class="math-input small-input">
                    <input type="number" id="pqB" placeholder="b" class="math-input small-input">
                    <input type="number" id="pqN" placeholder="n" class="math-input small-input">
                    <button onclick="demoQuotientPower()">Calculate</button>
                    <p id="quotientPowerResult" class="result">Result: ?</p>
                </div>
            `;
            break;

        default:
            title = 'Topic Not Found';
            tutorialContent = '<p>The tutorial for this topic is not yet available.</p>';
    }

    content.innerHTML = `
        <p class="back-button" onclick="selectTopic('${topicKey === 'indices' ? 'advanced' : 'basic'}')">
            &larr; Back to Topics
        </p>
        <h2>${title}</h2>
        <div class="tutorial-text">
            ${tutorialContent}
        </div>
    `;
}

// --- DEMONSTRATION FUNCTIONS ---
function demonstrateAddition() {
    const num1 = parseFloat(document.getElementById('num1Add').value);
    const num2 = parseFloat(document.getElementById('num2Add').value);
    const resultElement = document.getElementById('additionResult');
    if (isNaN(num1) || isNaN(num2)) return resultElement.innerHTML = 'Result: Please enter valid numbers.';
    resultElement.innerHTML = `Result: <strong>${num1 + num2}</strong>`;
}

function demonstrateSubtraction() {
    const num1 = parseFloat(document.getElementById('num1Sub').value);
    const num2 = parseFloat(document.getElementById('num2Sub').value);
    const resultElement = document.getElementById('subtractionResult');
    if (isNaN(num1) || isNaN(num2)) return resultElement.innerHTML = 'Result: Please enter valid numbers.';
    resultElement.innerHTML = `Result: <strong>${num1 - num2}</strong>`;
}

function demonstrateMultiplication() {
    const num1 = parseFloat(document.getElementById('mulNum1').value);
    const num2 = parseFloat(document.getElementById('mulNum2').value);
    const resultElement = document.getElementById('multiplicationResult');
    if (isNaN(num1) || isNaN(num2)) return resultElement.innerHTML = 'Result: Please enter valid numbers.';
    resultElement.innerHTML = `Result: <strong>${num1 * num2}</strong>`;
}

function demonstrateDivision() {
    const num1 = parseFloat(document.getElementById('divNum1').value);
    const num2 = parseFloat(document.getElementById('divNum2').value);
    const resultElement = document.getElementById('divisionResult');
    if (isNaN(num1) || isNaN(num2)) return resultElement.innerHTML = 'Result: Please enter valid numbers.';
    if (num2 === 0) return resultElement.innerHTML = 'Result: Cannot divide by zero.';
    resultElement.innerHTML = `Result: <strong>${(num1/num2).toFixed(4)}</strong>`;
}

function demonstrateIntegers() {
    const num1 = parseInt(document.getElementById('intNum1').value);
    const operator = document.getElementById('intOperator').value;
    const num2 = parseInt(document.getElementById('intNum2').value);
    const resultElement = document.getElementById('integerResult');
    if (isNaN(num1) || isNaN(num2)) return resultElement.innerHTML = 'Result: Please enter valid integers.';
    let result;
    if (operator === '+') result = num1 + num2;
    else if (operator === '-') result = num1 - num2;
    else if (operator === '*') result = num1 * num2;
    else if (operator === '/') {
        if (num2 === 0) return resultElement.innerHTML = 'Result: Cannot divide by zero.';
        result = num1 / num2;
    }
    resultElement.innerHTML = `Result: <strong>${result}</strong>`;
}

// --- INDICES DEMOS ---
function demoProduct() {
    const a = parseFloat(document.getElementById('pBase').value);
    const m = parseInt(document.getElementById('pM').value);
    const n = parseInt(document.getElementById('pN').value);
    const result = document.getElementById('productResult');
    if (isNaN(a) || isNaN(m) || isNaN(n)) return result.innerHTML = "Enter valid numbers.";
    result.innerHTML = `<span>a^${m} × a^${n} = a^${m+n} = <strong>${Math.pow(a,m+n)}</strong></span>`;
}

function demoQuotient() {
    const a = parseFloat(document.getElementById('qBase').value);
    const m = parseInt(document.getElementById('qM').value);
    const n = parseInt(document.getElementById('qN').value);
    const result = document.getElementById('quotientResult');
    if (isNaN(a) || isNaN(m) || isNaN(n)) return result.innerHTML = "Enter valid numbers.";
    result.innerHTML = `<span>a^${m} ÷ a^${n} = a^${m-n} = <strong>${Math.pow(a,m-n)}</strong></span>`;
}

function demoPowerPower() {
    const a = parseFloat(document.getElementById('ppBase').value);
    const m = parseInt(document.getElementById('ppM').value);
    const n = parseInt(document.getElementById('ppN').value);
    const result = document.getElementById('powerPowerResult');
    if (isNaN(a) || isNaN(m) || isNaN(n)) return result.innerHTML = "Enter valid numbers.";
    result.innerHTML = `<span>(a^${m})^${n} = a^${m*n} = <strong>${Math.pow(a,m*n)}</strong></span>`;
}

function demoFraction() {
    const a = parseFloat(document.getElementById('fracA').value);
    const n = parseInt(document.getElementById('fracN').value);
    const result = document.getElementById('fractionResult');
    if (isNaN(a) || isNaN(n)) return result.innerHTML = "Enter valid numbers.";
    result.innerHTML = `<span>a^(1/${n}) = <strong>${Math.pow(a,1/n)}</strong></span>`;
}

function demoQuotientPower() {
    const a = parseFloat(document.getElementById('pqA').value);
    const b = parseFloat(document.getElementById('pqB').value);
    const n = parseInt(document.getElementById('pqN').value);
    const result = document.getElementById('quotientPowerResult');
    if (isNaN(a) || isNaN(b) || isNaN(n)) return result.innerHTML = "Enter valid numbers.";
    if (b === 0) return result.innerHTML = "Cannot divide by zero.";
    result.innerHTML = `<span>(a/b)^${n} = a^${n}/b^${n} = <strong>${Math.pow(a,n)/Math.pow(b,n)}</strong></span>`;
}