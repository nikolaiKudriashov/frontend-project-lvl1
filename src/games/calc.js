import { cons } from '@hexlet/pairs';
import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What is the result of the expression?';

const generateRound = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const operator = getRandomNumber(1, 3);

  let question;
  let correctAnswer;

  switch (operator) {
    case 1:
      question = `${number1} + ${number2}`;
      correctAnswer = String(number1 + number2);
      break;
    case 2:
      question = `${number1} - ${number2}`;
      correctAnswer = String(number1 - number2);
      break;
    case 3:
      question = `${number1} * ${number2}`;
      correctAnswer = String(number1 * number2);
      break;
    default:
      break;
  }

  return cons(question, correctAnswer);
};

export default () => playGame(description, generateRound);
