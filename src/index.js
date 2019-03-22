
import readlineSync from 'readline-sync';

const wellcome = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  return name;
};

const gamesRound = 3;

const gamePlay = (gameQuestion, gameName) => {
  const userName = wellcome(gameName);
  console.log(gameName);
  for (let i = 0; i < gamesRound; i += 1) {
    const askQuestion = gameQuestion();
    const rightAnswear = gameQuestion();
    console.log(`Question: ${askQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === rightAnswear) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswear}.`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
    console.log(`Congratulations, ${userName}!`);
  }
};
export default gamePlay;
