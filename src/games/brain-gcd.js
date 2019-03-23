import playGame from '..';

import generateNumber from '../utilis';

const getGcd = (num1, num2) => {
  if (!num2) {
    return num1;
  }
  return getGcd(num2, num1 % num2);
};

const gameName = 'Find the greatest common divisor of given numbers';

const getQuestion = () => {
  const numberOne = generateNumber(1, 100);
  const numberTwo = generateNumber(1, 100);
  const question = `${numberOne} and ${numberTwo}`;
  const rightAnswear = String(getGcd(numberOne, numberTwo));
  return { question, rightAnswear };
};

export default () => playGame(getQuestion, gameName);
