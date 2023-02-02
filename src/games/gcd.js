import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const getGcd = (number1, number2) => (number2 === 0 ? number1 : getGcd(number2, number1 % number2));

const description = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const question = `${number1} ${number2}`;
  const correctAnswer = String(getGcd(number1, number2));

  return [question, correctAnswer];
};

export default () => playGame(description, generateRound);
