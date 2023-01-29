import { cons } from '@hexlet/pairs';
import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What is the result of the expression?';

const getOperator = () => {
  const operators = ['+', '-', '*'];
  const operatorNumber = getRandomNumber(0, 2);
  return operators[operatorNumber];
}

const generateRound = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);

  let question;
  let correctAnswer;

  switch (getOperator()) {
    case '+':
      question = `${number1} + ${number2}`;
      correctAnswer = String(number1 + number2);
      break;
    case '-':
      question = `${number1} - ${number2}`;
      correctAnswer = String(number1 - number2);
      break;
    case '*':
      question = `${number1} * ${number2}`;
      correctAnswer = String(number1 * number2);
      break;
    default:
      break;
  }

  return cons(question, correctAnswer);
};

export default () => playGame(description, generateRound);
