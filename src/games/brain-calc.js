// Помоги, пожалуйста, разобраться с кодом. 
// Не получается на последующей итерации вернуть новое выражение, все время возвращается одно и то же.
// Я совсем запуталась....


import readlineSync from 'readline-sync';

const numberGenerator = () => Math.floor(Math.random() * 10);
const numberOne = numberGenerator();
const numberTwo = numberGenerator();
const listOfOperators = ['+', '-', '*'];
const findRandomOperator = Math.floor(Math.random() * listOfOperators.length);
const randomOperator = listOfOperators[findRandomOperator];
const generateQuestion = (`${numberOne} ${randomOperator} ${numberTwo}`);

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

const calcGame = () => {
  const gameRound = 3;
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');

  const iterRound = (round) => {
    console.log(`Question: ${generateQuestion}`);

    const trueAnswear = String(pickExpression(randomOperator));

    console.log(typeof trueAnswear);

    if (round === 0) {
      return console.log(`Congratulations, ${userName}!`);
    }

    const userResponce = (readlineSync.question('Your answer: '));

    console.log(typeof userResponce);

    console.log(`Correct answer was ${trueAnswear}`);

    if (userResponce === trueAnswear) {
      console.log('Correct!');
      return iterRound(round - 1);
    }
    return console.log(`${userResponce} is wrong answer ;(. Correct answer was ${trueAnswear}. Let's try again, ${userName}`);
  };

  return iterRound(gameRound);
};
export default calcGame;
