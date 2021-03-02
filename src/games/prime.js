import playGame from '..';
import generateNumber from '../utilis';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise, answer "no"';

const generateGameData = () => {
  const question = generateNumber(1, 100);
  const rightAnswear = isPrime(question) ? 'yes' : 'no';
  return { question, rightAnswear };
};

export default () => playGame(generateGameData, gameDescription);
