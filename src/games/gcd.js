import { cons } from '@hexlet/pairs';
import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const gcd = (num1, num2) => (num2 === 0 ? num1 : gcd(num2, num1 % num2));

const description = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(gcd(num1, num2));

  return cons(question, correctAnswer);
};

export default () => playGame(description, generateRound);
