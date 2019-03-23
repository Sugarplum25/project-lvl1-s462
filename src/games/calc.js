import playGame from '..';

import generateNumber from '../utilis';

const gameDescription = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const getResultOfExpression = (num1, num2, sigh) => {
  switch (sigh) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
      return num1 * num2;
  }
};

const generateGameData = () => {
  const numberOne = generateNumber(1, 10);
  const numberTwo = generateNumber(1, 10);
  const operator = operators[generateNumber(0, operators.length - 1)];
  const question = (`${numberOne} ${operator} ${numberTwo}`);
  const rightAnswear = String(getResultOfExpression(numberOne, numberTwo, operator));
  return { question, rightAnswear };
};

export default () => playGame(generateGameData, gameDescription);
