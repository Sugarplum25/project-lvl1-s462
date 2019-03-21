import readlineSync from 'readline-sync';

import {
  generateNumber,
} from '../utilis';


const gcdGame = () => {
  const gameRound = 3;
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log('Find the greatest common divisor of given numbers');

  for (let i = 0; i < gameRound; i += 1) {
    const gcd = (num1, num2) => {
      if (!num2) {
        return num1;
      }
      return gcd(num2, num1 % num2);
    };
    const numberOne = generateNumber(1, 10);
    const numberTwo = generateNumber(1, 10);
    const gameQuestion = `${numberOne}, ${numberTwo}`;
    console.log(`Question: ${gameQuestion}`);
    const rightAnswear = gcd(numberOne, numberTwo);
    const userAnswear = Number(readlineSync.question('Your answer: '));
    console.log(`Correct answer was ${rightAnswear}`);
    if (userAnswear === rightAnswear) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswear} is wrong answer ;(. Correct answer was ${rightAnswear}.`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};


export default gcdGame;
