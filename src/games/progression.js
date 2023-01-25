import { cons } from '@hexlet/pairs';
import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';

const generateRound = () => {
  const progressionLength = getRandomNumber(5, 10);
  const startNum = getRandomNumber(1, 20);
  const progressionDiff = getRandomNumber(1, 10);
  const hiddenElementIndex = getRandomNumber(0, progressionLength - 1);

  let question = '';
  const correctAnswer = String(startNum + progressionDiff * hiddenElementIndex);

  for (let i = 0; i < progressionLength; i += 1) {
    question += i === hiddenElementIndex ? '.. ' : `${startNum + i * progressionDiff} `;
  }

  return cons(question, correctAnswer);
};

export default () => playGame(description, generateRound);
