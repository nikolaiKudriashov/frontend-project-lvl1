import { cons } from '@hexlet/pairs';
import gameEngine from '../index.js';
import randomInt from '../utils.js';

const message = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getGame = () => {
  const question = randomInt(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return cons(question, correctAnswer);
};

export default () => gameEngine(message, getGame);
