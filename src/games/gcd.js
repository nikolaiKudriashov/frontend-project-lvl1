import { cons } from '@hexlet/pairs';
import gameEngine from '../index.js';
import randomInt from '../utils.js';

const gcd = (num1, num2) => (num2 === 0 ? num1 : gcd(num2, num1 % num2));

const message = 'Find the greatest common divisor of given numbers.';

const getGame = () => {
  const num1 = randomInt(1, 100);
  const num2 = randomInt(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(gcd(num1, num2));

  return cons(question, correctAnswer);
};

export default () => gameEngine(message, getGame);