import { cons } from '@hexlet/pairs';
import gameEngine from '../index.js';
import randomInt from '../utils.js';

const message = 'What is the result of the expression?';

const getGame = () => {
  const a = randomInt(1, 100);
  const b = randomInt(1, 100);
  const operator = randomInt(1, 3);

  let question;
  let correctAnswer;

  switch (operator) {
    case 1:
      question = `${a} + ${b}`;
      correctAnswer = String(a + b);
      break;
    case 2:
      question = `${a} - ${b}`;
      correctAnswer = String(a - b);
      break;
    case 3:
      question = `${a} * ${b}`;
      correctAnswer = String(a * b);
      break;
    default:
      break;
  }

  return cons(question, correctAnswer);
};

export default () => gameEngine(message, getGame);
