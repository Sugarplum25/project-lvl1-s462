import readlineSync from 'readline-sync';

import {
  generateNumber,
  isEven,
} from '../utilis';


const evenGame = () => {
  const gameRound = 3;
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if number even otherwise answer "no"');

  for (let i = 0; i < gameRound; i += 1) {
    const gameQuestion = generateNumber(1, 1000);
    const rightAnswear = isEven(gameQuestion) ? 'yes' : 'no';
    console.log(`Question: ${gameQuestion}`);
    const userAnswear = readlineSync.question('Your answer: ');
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


export default evenGame;
