import gamePlay from '..';

import generateNumber from '../utilis';

const gcd = (num1, num2) => {
  if (!num2) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};
const gameName = 'Find the greatest common divisor of given numbers';

const gameQuestion = () => {
  const numberOne = generateNumber(1, 100);
  const numberTwo = generateNumber(1, 100);
  const askQuestion = `${numberOne} and ${numberTwo}`;
  const rightAnswear = String(gcd(numberOne, numberTwo));
  return {
    askQuestion,
    rightAnswear,
  };
};

export default () => gamePlay(gameQuestion, gameName);
