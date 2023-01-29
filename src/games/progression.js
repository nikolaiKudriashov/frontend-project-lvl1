import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';

const generateQuestion = (start, step, length, hidden) => {
  let result = '';
  for (let i = 0; i < length; i += 1) {
    result += i === hidden ? '.. ' : `${start + i * step} `;
  }
  return result;
};

const generateRound = () => {
  const progLength = getRandomNumber(5, 10);
  const startNum = getRandomNumber(1, 20);
  const progDiff = getRandomNumber(1, 10);
  const hiddenElementIndex = getRandomNumber(0, progLength - 1);

  const correctAnswer = String(startNum + progDiff * hiddenElementIndex);
  const question = generateQuestion(startNum, progDiff, progLength, hiddenElementIndex);

  return [question, correctAnswer];
};

export default () => playGame(description, generateRound);
