import { cons } from '@hexlet/pairs';
import gameEngine from '../index.js';
import randomInt from '../utils.js';

const message = 'What number is missing in the progression?';

const getGame = () => {
  const progressionLength = randomInt(5, 10);
  const startNum = randomInt(1, 20);
  const progressionDiff = randomInt(1, 10);
  const hiddenElementIndex = randomInt(0, progressionLength - 1);

  let question = '';
  const correctAnswer = String(startNum + progressionDiff * hiddenElementIndex);

  for (let i = 0; i < progressionLength; i += 1) {
    question += i === hiddenElementIndex ? '.. ' : `${startNum + i * progressionDiff} `;
  }

  return cons(question, correctAnswer);
};

export default () => gameEngine(message, getGame);
