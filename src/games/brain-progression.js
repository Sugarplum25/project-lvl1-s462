import playGame from '..';

import generateNumbers from '../utilis';

const gameName = 'What number is missing in the progression?';

const progressionLength = 10;

const buildProgression = () => {
  const firstNumber = generateNumbers(0, 10);
  const step = generateNumbers(1, 10);
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstNumber + step * i);
  }
  return progression;
};

const getQuestion = () => {
  const progression = buildProgression();
  const hiddenElement = generateNumbers(0, 10);
  const rightAnswear = String(progression[hiddenElement]);
  progression[hiddenElement] = '..';
  const question = progression.join(' ');
  return { question, rightAnswear };
};

export default () => playGame(getQuestion, gameName);
