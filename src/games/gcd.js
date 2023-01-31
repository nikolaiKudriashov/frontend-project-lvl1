import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const getGcd = (num1, num2) => (num2 === 0 ? num1 : getGcd(num2, num1 % num2));

const description = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(getGcd(num1, num2));

  return [question, correctAnswer];
};

export default () => playGame(description, generateRound);
