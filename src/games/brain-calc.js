import readlineSync from 'readline-sync';

import { generateNumber } from '../support';

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

  const iterRound = (round) => {
    if (round === 0) {
      return console.log(`Congratulations, ${userName}!`);
    }
    const numberOne = generateNumber();
    const numberTwo = generateNumber();
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

    const trueAnswear = String(pickExpression(randomOperator));

    const userResponce = (readlineSync.question('Your answer: '));

    console.log(`Correct answer was ${trueAnswear}`);

    if (userResponce === trueAnswear) {
      console.log('Correct!');
      return iterRound(round - 1);
    }
    console.log(`${userResponce} is wrong answer ;(. Correct answer was ${trueAnswear}.`);
    console.log(`Let's try again, ${userName}`);
  };

  return iterRound(gameRound);
};
export default calcGame;
