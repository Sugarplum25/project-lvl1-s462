import playGame from '..';
import generateNumber from '../utilis';

const gameDescription = 'What number is missing in the progression?';

const length = 10;

const buildGameQuestion = (firstNumber, step, hiddenElementIndex) => {
  let progression = '';
  for (let i = 0; i < length; i += 1) {
    if (i === hiddenElementIndex) {
      progression = `${progression} ..`;
    } else {
      const elementToHide = firstNumber + step * i;
      progression = `${progression} ${elementToHide}`;
    }
  }
  return progression;
};

const generateGameData = () => {
  const firstNumber = generateNumber(1, 100);
  const step = generateNumber(1, length);
  const hiddenElementIndex = generateNumber(0, length - 1);
  const rightAnswear = String(firstNumber + step * hiddenElementIndex);
  const question = buildGameQuestion(firstNumber, step, hiddenElementIndex);
  return { rightAnswear, question };
};
export default () => playGame(generateGameData, gameDescription);
