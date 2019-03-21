// Я переписала игры, вместо рекурсии решила использовать обычный цикл.
// Мне кажется стало как минимум читабельнее,
// не такая простыня как была раньше.
// Как на ваш взгляд, так лучше?
// Теперь у меня вырисовывается картина общего движка, я еще пока не реализовала его,
// в процессе, так сказать.
// Но накидала общую структуру.

import readlineSync from 'readline-sync';

import {
  generateNumber,
} from '../utilis';

const listOfOperators = ['+', '-', '*'];
const findRandomOperator = Math.floor(Math.random() * listOfOperators.length);

const calcGame = () => {
  const gameRound = 3;
  console.log('Welcome to the Brain Games!');
  console.log();
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log();
  console.log('What is the result of the expression?');
  console.log();
  for (let i = 0; i < gameRound; i += 1) {
    const numberOne = generateNumber(1, 10);
    const numberTwo = generateNumber(1, 10);
    const randomOperator = listOfOperators[findRandomOperator];
    const generateQuestion = () => (`${numberOne} ${randomOperator} ${numberTwo}`);
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
    const gameQuestion = generateQuestion();
    console.log(`Question: ${gameQuestion}`);
    const rightAnswear = String(pickExpression(randomOperator));
    const userAnswear = (readlineSync.question('Your answer: '));
    console.log(`Correct answer was ${rightAnswear}`);
    if (userAnswear === rightAnswear) {
      console.log('Correct!');
      console.log();
    } else {
      console.log(`${userAnswear} is wrong answer ;(. Correct answer was ${rightAnswear}.`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default calcGame;
