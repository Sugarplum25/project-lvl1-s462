// Перечитала все обсуждения, нашла ссылку, где вы алгоритм даете,
// для поиска элемента прогрессии. Я, кажется, поняла разницу между
// индексом и самим элементом)

// Не знаю, успею ли в эту проверку...

import playGame from '..';

import generateNumber from '../utilis';

const gameDescription = 'What number is missing in the progression?';

const choseElement = (firstNumber, step, progressionLength) => {
  if (progressionLength > 1) {
    return firstNumber + (step * (progressionLength - 1));
  }
  return firstNumber;
};

const buildProgression = (firstNumber, step, hiddenElement, progressionLength) => {
  let progression = '';
  for (let i = 1; i <= progressionLength; i += 1) {
    if (i === hiddenElement) {
      progression += '.. ';
    } else {
      progression += `${choseElement(firstNumber, step, i)} `;
    }
  }

  return progression;
};

const generateGameData = () => {
  const firstNumber = generateNumber(1, 100);
  const step = generateNumber(1, 20);
  const progressionLength = 10;
  const hiddenElement = generateNumber(1, progressionLength);
  const rightAnswear = String(choseElement(firstNumber, step, hiddenElement));
  const question = buildProgression(firstNumber, step, hiddenElement, progressionLength);
  return { rightAnswear, question };
};
export default () => playGame(generateGameData, gameDescription);
