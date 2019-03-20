import readlineSync from 'readline-sync';

export const generateNumber = () => Math.floor(Math.random() * 1000);
export const isEven = number => number % 2 === 0;

export const evenGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if number even otherwise answer "no"');
  const gameRound = 2;
  const letsPlayEven = (gameRound) => {

    const gameQuestion = generateNumber();

    const rightAnswear = isEven(gameQuestion) ? 'yes' : 'no';

    console.log(`Question: ${gameQuestion}`);

    const userAnswear = readlineSync.question('Your answer: ');

    if (gameRound === 0) {
      return console.log(`Congratulations, ${userName}!`);
    }
    console.log(`Correct answer was ${rightAnswear}`);
    if (userAnswear === rightAnswear) {
      console.log('Correct!');
      return letsPlayEven(gameRound - 1);
    }
    return console.log(`${userAnswear} is wrong answer ;(. Correct answer was ${rightAnswear}. Let's try again, ${userName}`);
  };
  letsPlayEven(gameRound);
};
