import { cons } from 'hexlet-pairs';

import gamePlay from '..';

import generateNumber from '../utilis';

const listOfOperators = ['+', '-', '*'];
const indexOfOperators = Math.floor(Math.random() * listOfOperators.length);

const gameName = 'What is the result of the expression?';

const gameQuestion = () => {
  const numberOne = generateNumber(1, 10);
  const numberTwo = generateNumber(1, 10);
  const randomOperator = listOfOperators[indexOfOperators];
  const pickExpression = (char) => {
    let resultOfExpression;
    switch (char) {
      case '+':
        resultOfExpression = numberOne + numberTwo;
        break;
      case '-':
        resultOfExpression = numberOne - numberTwo;
        break;
      case '*':
        resultOfExpression = numberOne * numberTwo;
        break;
      default:
        break;
    }
    return resultOfExpression;
  };

  const askQuestion = (`${numberOne} ${randomOperator} ${numberTwo}`);
  const rightAnswear = String(pickExpression(randomOperator));

  return cons(askQuestion, rightAnswear);
};

export default () => gamePlay(gameQuestion, gameName);
