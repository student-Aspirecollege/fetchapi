let questionEl = document.querySelector('.para');
let inputEl = document.querySelector('.answer');
let score = 0;
let btn = document.querySelector('.button');
let scoreEl = document.querySelector('.score-headding');
let currentAnswer; // For storing the correct answer

const generateNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const newNum = () => {
    let randomNum1 = generateNum(1, 10);
    let randomNum2 = generateNum(1, 10);
    let questionType = generateNum(1, 4);
    let question;

    let firstNum = randomNum1;
    let secondNum = randomNum2;

    if (randomNum1 < randomNum2 && questionType > 2) {
        [firstNum, secondNum] = [randomNum2, randomNum1]; // Swap values if needed
    }

    switch (questionType) {
        case 1:
            question = `${firstNum} multiplied by ${secondNum}`;
            currentAnswer = firstNum * secondNum;
            break;
        case 2:
            question = `${firstNum} added to ${secondNum}`;
            currentAnswer = firstNum + secondNum;
            break;
        case 3:
            question = `${firstNum} subtracted by ${secondNum}`;
            currentAnswer = firstNum - secondNum;
            break;
        case 4:
            question = `${firstNum} divided by ${secondNum}`;
            currentAnswer = (firstNum / secondNum).toFixed(2); // Format the result
            break;
        default:
            question = `${firstNum} multiplied by ${secondNum}`;
            currentAnswer = firstNum * secondNum;
            break;
    }

    questionEl.textContent = `Q: ${question}?`;
}

const compareVal = () => {
    const userAnswer = parseFloat(inputEl.value.trim());
    if (isNaN(userAnswer)) {
        alert('Please enter a valid number');
        return;
    }

    if (Math.abs(currentAnswer - userAnswer) < 0.01) { // Allow for floating-point precision issues
        score += 1;
    } else {
        score -= 1;
    }

    scoreEl.textContent = `Score: ${score}`;
    newNum();
}

btn.addEventListener('click', compareVal);
newNum(); // Initialize the first question
