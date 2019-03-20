import readlineSync from 'readline-sync';

const generateNumber = () => Math.floor(Math.random() * 100);
const isEven = number => number % 2 === 0;


const evenGame = () => {
  const gameRound = 3;
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if number even otherwise answer "no"');
  const iter = (round) => {
    const gameQuestion = generateNumber();

    const rightAnswear = isEven(gameQuestion) ? 'yes' : 'no';

    console.log(`Question: ${gameQuestion}`);

    const userAnswear = readlineSync.question('Your answer: ');

    if (round === 1) {
      return console.log(`Congratulations, ${userName}!`);
    }
    console.log(`Question: ${gameQuestion}`);
    console.log(`Correct answer was ${rightAnswear}`);
    if (userAnswear === rightAnswear) {
      console.log('Correct!');
      return iter(round - 1);
    }
    return console.log(`${userAnswear} is wrong answer ;(. Correct answer was ${rightAnswear}. Let's try again, ${userName}`);
  };
  iter(gameRound);
};

export default evenGame;
