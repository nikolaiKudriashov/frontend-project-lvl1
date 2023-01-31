import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';

const generateQuestion = (start, step, length, hiddenNumberIndex) => {
  let result = '';
  for (let i = 0; i < length; i += 1) {
    result += i === hiddenNumberIndex ? '.. ' : `${start + i * step} `;
  }
  return result;
};

const generateRound = () => {
  const length = getRandomNumber(5, 10);
  const start = getRandomNumber(1, 20);
  const step = getRandomNumber(1, 10);
  const hiddenNumberIndex = getRandomNumber(0, length - 1);

  const correctAnswer = String(start + step * hiddenNumberIndex);
  const question = generateQuestion(start, step, length, hiddenNumberIndex );

  return [question, correctAnswer];
};

export default () => playGame(description, generateRound);
