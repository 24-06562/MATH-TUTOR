function selectTopic(topic) {
    const content = document.getElementById('content');

    if(topic === 'basic') {
        content.innerHTML = `
            <h2>Basic Math Topics</h2>
            <ul>
                <li onclick="showTutorial('addition')">Addition & Subtraction</li>
                <li onclick="showTutorial('multiplication')">Multiplication & Division</li>
                <li onclick="showTutorial('integers')">Integers</li>
            </ul>
        `;
    } else if(topic === 'advanced') {
        content.innerHTML = `
            <h2>Advanced Math Topics</h2>
            <ul>
                <li onclick="showTutorial('indices')">Law of Indices</li>
            </ul>
        `;
    }
}

function showTutorial(topicKey) {
    const content = document.getElementById('content');
    let title = '';
    let tutorialContent = '';

    switch (topicKey) {
        case 'addition':
            title = 'Addition & Subtraction Tutorial';
            tutorialContent = `
                <p><strong>Addition:</strong> Combining two or more numbers to find their total (the sum). Example: 5 + 3 = 8.</p>
                <p><strong>Subtraction:</strong> Taking one number away from another to find the difference. Example: 8 - 3 = 5.</p>
                
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
                <p><strong>Multiplication:</strong> Repeated addition. Example: 4 x 3 is the same as 4 + 4 + 4 = 12.</p>
                <p><strong>Division:</strong> Splitting a number into equal parts. Example: 12 / 3 = 4 (12 split into 3 groups of 4).</p>
                
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
        <p>Integers are all <strong>whole numbers</strong> (no decimals), including:</p>
        <p>• <strong>Positive numbers</strong> (1, 2, 3, ...)</p>
        <p>• <strong>Negative numbers</strong> (-1, -2, -3, ...)</p>
        <p>• <strong>Zero</strong> (0)</p>
        
        <h3>Try it Yourself! (Integer Arithmetic)</h3>
        <p>Explore addition, subtraction, multiplication, and division with integers.</p>

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

        <h3>1. Product of Powers: <span style="color:red;">a<sup>m</sup> × a<sup>n</sup> = a<sup>m+n</sup></span></h3>
        <div class="demonstration-area">
            <input type="number" id="pBase" placeholder="Base a" class="math-input small-input">
            <input type="number" id="pM" placeholder="m" class="math-input small-input">
            <input type="number" id="pN" placeholder="n" class="math-input small-input">
            <button onclick="demoProduct()">Calculate</button>
            <p id="productResult" class="result">Result: ?</p>
        </div>

        <h3>2. Quotient of Powers: <span style="color:red;">a<sup>m</sup> ÷ a<sup>n</sup> = a<sup>m−n</sup></span></h3>
        <div class="demonstration-area">
            <input type="number" id="qBase" placeholder="Base a" class="math-input small-input">
            <input type="number" id="qM" placeholder="m" class="math-input small-input">
            <input type="number" id="qN" placeholder="n" class="math-input small-input">
            <button onclick="demoQuotient()">Calculate</button>
            <p id="quotientResult" class="result">Result: ?</p>
        </div>

        <h3>3. Product of Different Bases: <span style="color:red;">a<sup>m</sup> × b<sup>m</sup> = (ab)<sup>m</sup></span></h3>
        <div class="demonstration-area">
            <input type="number" id="dbA" placeholder="a" class="math-input small-input">
            <input type="number" id="dbB" placeholder="b" class="math-input small-input">
            <input type="number" id="dbM" placeholder="m" class="math-input small-input">
            <button onclick="demoDiffBase()">Calculate</button>
            <p id="diffBaseResult" class="result">Result: ?</p>
        </div>

        <h3>4. Power of a Power: <span style="color:red;">(a<sup>m</sup>)<sup>n</sup> = a<sup>m×n</sup></span></h3>
        <div class="demonstration-area">
            <input type="number" id="ppBase" placeholder="a" class="math-input small-input">
            <input type="number" id="ppM" placeholder="m" class="math-input small-input">
            <input type="number" id="ppN" placeholder="n" class="math-input small-input">
            <button onclick="demoPowerPower()">Calculate</button>
            <p id="powerPowerResult" class="result">Result: ?</p>
        </div>

        <h3>5. Fractional Indices: <span style="color:red;">a<sup>1/n</sup> = ⁿ√a</span></h3>
        <div class="demonstration-area">
            <input type="number" id="fracA" placeholder="a" class="math-input small-input">
            <input type="number" id="fracN" placeholder="n" class="math-input small-input">
            <button onclick="demoFraction()">Calculate</button>
            <p id="fractionResult" class="result">Result: ?</p>
        </div>

        <h3>6. Power of a Quotient: <span style="color:red;">(a/b)<sup>n</sup> = a<sup>n</sup> / b<sup>n</sup></span></h3>
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

function demonstrateAddition() {
    // Note: IDs changed to num1Add and num2Add to prevent conflict with subtraction.
    const num1 = parseFloat(document.getElementById('num1Add').value);
    const num2 = parseFloat(document.getElementById('num2Add').value);
    const resultElement = document.getElementById('additionResult');

    if (isNaN(num1) || isNaN(num2)) {
        resultElement.innerHTML = 'Result: Please enter valid numbers.';
        return;
    }

    const sum = num1 + num2;
    resultElement.innerHTML = `Result: ${sum}</strong>`;
}

function demonstrateSubtraction() {
    const num1 = parseFloat(document.getElementById('num1Sub').value);
    const num2 = parseFloat(document.getElementById('num2Sub').value);
    const resultElement = document.getElementById('subtractionResult');

    if (isNaN(num1) || isNaN(num2)) {
        resultElement.innerHTML = 'Result: Please enter valid numbers.';
        return;
    }

    const difference = num1 - num2;
    resultElement.innerHTML = `Result: ${difference}</strong>`;
}

function demonstrateMultiplication() {
    // Existing function logic
    const num1 = parseFloat(document.getElementById('mulNum1').value);
    const num2 = parseFloat(document.getElementById('mulNum2').value);
    const resultElement = document.getElementById('multiplicationResult');

    if (isNaN(num1) || isNaN(num2)) {
        resultElement.innerHTML = 'Result: Please enter valid numbers.';
        return;
    }

    const product = num1 * num2;
    resultElement.innerHTML = `Result: ${product}</strong>`;
}

function demonstrateDivision() {
    const num1 = parseFloat(document.getElementById('divNum1').value);
    const num2 = parseFloat(document.getElementById('divNum2').value);
    const resultElement = document.getElementById('divisionResult');

    if (isNaN(num1) || isNaN(num2)) {
        resultElement.innerHTML = 'Result: Please enter valid numbers.';
        return;
    }
    
    if (num2 === 0) {
        // Handle division by zero
        resultElement.innerHTML = 'Result: Cannot divide by zero.';
        return;
    }

    const quotient = num1 / num2;
    // Limit to 4 decimal places for clean display
    resultElement.innerHTML = `Result: ${quotient.toFixed(4)}</strong>`;
}

function demonstrateIntegers() {
    const num1 = parseInt(document.getElementById('intNum1').value);
    const operator = document.getElementById('intOperator').value;
    const num2 = parseInt(document.getElementById('intNum2').value);
    const resultElement = document.getElementById('integerResult');

    if (isNaN(num1) || isNaN(num2)) {
        resultElement.innerHTML = 'Result: Please enter valid integers.';
        return;
    }

    let result;

    if (operator === '+') {
        result = num1 + num2;
    } 
    else if (operator === '-') {
        result = num1 - num2;
    }
    else if (operator === '*') {
        result = num1 * num2;
    }
    else if (operator === '/') {
        if (num2 === 0) {
            resultElement.innerHTML = 'Result: Cannot divide by zero.';
            return;
        }
        // integer division but still shows decimal if needed
        result = num1 / num2;
    }

    // Proper parentheses for negative numbers
    const num2Display = num2 < 0 ? `(${num2})` : num2;

    resultElement.innerHTML = `Result: ${result}</strong>`;
}

function demonstrateIndices() {
    const baseA = parseFloat(document.getElementById('baseA').value);
    const exponentM = parseInt(document.getElementById('exponentM').value);
    const exponentN = parseInt(document.getElementById('exponentN').value);
    const resultElement = document.getElementById('indicesResult');

    if (isNaN(baseA) || isNaN(exponentM) || isNaN(exponentN)) {
        resultElement.innerHTML = 'Result: Please enter valid numbers for the base and exponents.';
        return;
    }

    // Calculate the sum of exponents (m + n)
    const sumOfExponents = exponentM + exponentN;

    // Calculate the final result using Math.pow(base, exponent)
    const finalResult = Math.pow(baseA, sumOfExponents);

    resultElement.innerHTML = `
        Applying $a^m \\times a^n = a^{m+n}$:<br>
        $${baseA}^{${exponentM}} \\times ${baseA}^{${exponentN}} = ${baseA}^{${exponentM} + ${exponentN}} = ${baseA}^{${sumOfExponents}}$<br>
        The final value is: <strong>${finalResult}</strong>
    `;
}

function demoProduct() {
    const a = parseFloat(document.getElementById('pBase').value);
    const m = parseInt(document.getElementById('pM').value);
    const n = parseInt(document.getElementById('pN').value);
    const result = document.getElementById('productResult');

    if (isNaN(a) || isNaN(m) || isNaN(n)) {
        result.innerHTML = "Enter valid numbers.";
        return;
    }

    result.innerHTML = `
        <span>a<sup>${m}</sup> × a<sup>${n}</sup> = a<sup>${m+n}</sup> = 
        <strong>${a}<sup>${m+n}</sup> = ${Math.pow(a, m+n)}</strong></span>
    `;
}

function demoQuotient() {
    const a = parseFloat(document.getElementById('qBase').value);
    const m = parseInt(document.getElementById('qM').value);
    const n = parseInt(document.getElementById('qN').value);
    const result = document.getElementById('quotientResult');

    if (isNaN(a) || isNaN(m) || isNaN(n)) {
        result.innerHTML = "Enter valid numbers.";
        return;
    }

    result.innerHTML = `
        <span>a<sup>${m}</sup> ÷ a<sup>${n}</sup> = a<sup>${m-n}</sup> =
        <strong>${a}<sup>${m-n}</sup> = ${Math.pow(a, m-n)}</strong></span>
    `;
}

function demoDiffBase() {
    const a = parseFloat(document.getElementById('dbA').value);
    const b = parseFloat(document.getElementById('dbB').value);
    const m = parseInt(document.getElementById('dbM').value);
    const result = document.getElementById('diffBaseResult');

    if (isNaN(a) || isNaN(b) || isNaN(m)) {
        result.innerHTML = "Enter valid numbers.";
        return;
    }

    const ab = a * b;

    result.innerHTML = `
        <span>a<sup>${m}</sup> × b<sup>${m}</sup> = (a × b)<sup>${m}</sup> =
        (${a} × ${b})<sup>${m}</sup> =
        <strong>(${ab})<sup>${m}</sup> = ${Math.pow(ab, m)}</strong></span>
    `;
}

function demoPowerPower() {
    const a = parseFloat(document.getElementById('ppBase').value);
    const m = parseInt(document.getElementById('ppM').value);
    const n = parseInt(document.getElementById('ppN').value);
    const result = document.getElementById('powerPowerResult');

    if (isNaN(a) || isNaN(m) || isNaN(n)) {
        result.innerHTML = "Enter valid numbers.";
        return;
    }

    result.innerHTML = `
        <span>(a<sup>${m}</sup>)<sup>${n}</sup> = a<sup>${m*n}</sup> =
        <strong>${a}<sup>${m*n}</sup> = ${Math.pow(a, m*n)}</strong></span>
    `;
}

function demoFraction() {
    const a = parseFloat(document.getElementById('fracA').value);
    const n = parseInt(document.getElementById('fracN').value);
    const result = document.getElementById('fractionResult');

    if (isNaN(a) || isNaN(n)) {
        result.innerHTML = "Enter valid numbers.";
        return;
    }

    const finalValue = Math.pow(a, 1/n).toFixed(6);

    result.innerHTML = `
        a<sup>1/${n}</sup> = <sup><strong>${n}</sup>√(${a}) = 
        ${finalValue}</strong>
    `;
}


function demoQuotientPower() {
    const a = parseFloat(document.getElementById('pqA').value);
    const b = parseFloat(document.getElementById('pqB').value);
    const n = parseInt(document.getElementById('pqN').value);
    const result = document.getElementById('quotientPowerResult');

    if (isNaN(a) || isNaN(b) || isNaN(n)) {
        result.innerHTML = "Enter valid numbers.";
        return;
    }
    if (b === 0) {
        result.innerHTML = "Cannot divide by zero.";
        return;
    }

    result.innerHTML = `
        <span>(a/b)<sup>${n}</sup> = a<sup>${n}</sup> / b<sup>${n}</sup> =
        <strong>${a}<sup>${n}</sup> / ${b}<sup>${n}</sup> =
        <strong>${Math.pow(a,n)} / ${Math.pow(b,n)}</strong></span>
    `;
}
