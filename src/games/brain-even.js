import readlineSync from 'readline-sync';

const generateNumber = () => Math.floor(Math.random() * 1000);
const isEven = number => number % 2 === 0;
const gameRound = 2;


const evenGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if number even otherwise answer "no"');
  const letsPlayEven = (gameRound) => {
    const gameQuestion = generateNumber();

    const rightAnswear = isEven(gameQuestion) ? 'yes' : 'no';

    console.log(`Question: ${gameQuestion}`);

    const userAnswear = readlineSync.question('Your answer: ');

    if (gameRound === 0) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    console.log(`Correct answer was ${rightAnswear}`);
    if (userAnswear === rightAnswear) {
      console.log('Correct!');
      return letsPlayEven(gameRound - 1);
    }
    console.log(`${userAnswear} is wrong answer ;(. Correct answer was ${rightAnswear}. Let's try again, ${userName}`);
  };
  letsPlayEven(gameRound);
};
export default evenGame;
