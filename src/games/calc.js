import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What is the result of the expression?';

const calculate = (operator, number1, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      break;
  }
};


const generateRound = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);

  const operators = ['+', '-', '*'];
  const lastIndex = operators.length - 1;
  const operatorIndex = getRandomNumber(0, lastIndex);
  const operator = operators[operatorIndex];

  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = String(calculate(operator, number1, number2));

  return [question, correctAnswer];
};

export default () => playGame(description, generateRound);
