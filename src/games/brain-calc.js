import playGame from '..';

import generateNumber from '../utilis';

const gameName = 'What is the result of the expression?';

const listOfOperators = ['+', '-', '*'];

const getResultOfExpression = (num1, num2, sigh) => {
  let result;
  switch (sigh) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      break;
  }
  return result;
};

const getQuestion = () => {
  const numberOne = generateNumber(1, 10);
  const numberTwo = generateNumber(1, 10);
  const index = listOfOperators[generateNumber(0, listOfOperators.length)];
  const question = (`${numberOne} ${index} ${numberTwo}`);
  const rightAnswear = String(getResultOfExpression(numberOne, numberTwo, index));
  return { question, rightAnswear };
};

export default () => playGame(getQuestion, gameName);
