// Я немного зависла с замечаниями по прогрессии.
// Не совсем поняла, почему не подходит индекс элемента?
// В задании написано: заменив любое из чисел двумя точками (с)....
// PS остальные замечания отработала.

import playGame from '..';

import generateNumber from '../utilis';

const gameDescription = 'What number is missing in the progression?';

const progressionLength = 10;

const buildProgression = () => {
  const firstNumber = generateNumber(0, progressionLength);
  const step = generateNumber(1, progressionLength);
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstNumber + step * i);
  }
  return progression;
};

const generateGameData = () => {
  const progression = buildProgression();
  const hiddenElement = generateNumber(0, progressionLength);
  const rightAnswear = String(progression[hiddenElement]);
  progression[hiddenElement] = '..';
  const question = progression.join(' ');
  return { question, rightAnswear };
};

export default () => playGame(generateGameData, gameDescription);
