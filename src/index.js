import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const gamesRound = 3;

const playGame = (generateGameData, gameDescription) => {
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log(gameDescription);
  for (let i = 0; i < gamesRound; i += 1) {
    const { question, rightAnswear } = generateGameData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === rightAnswear) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswear}.`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default playGame;
