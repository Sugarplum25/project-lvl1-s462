import readlineSync from 'readline-sync';

const evenGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if number even otherwise answer "no"');

  const letsPlayEven = (round) => {
    const generateNumber = () => Math.floor(Math.random() * 1000);

    const isEven = number => number % 2 === 0;

    const numberToCheck = generateNumber();

    const check = isEven(numberToCheck) ? 'yes' : 'no';

    const askQuestion = console.log(`Question: ${numberToCheck}`);

    const userAnswear = readlineSync.question('Your answer: ');

    if (round === 0) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    askQuestion;
    userAnswear;
    console.log(`Correct answer was ${check}`);
    if (userAnswear === check) {
      console.log('Correct!');
      return letsPlayEven(round - 1);
    }
    console.log(`${userAnswear} is wrong answer ;(. Correct answer was ${check}. Let's try again, ${userName}`);
  };
  letsPlayEven(2);
};

export default evenGame;