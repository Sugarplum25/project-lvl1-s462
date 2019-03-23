import playGame from '..';

import generateNumber from '../utilis';

const isPrime = (num) => {
  if (num % 2 === 0) {
    return false;
  }
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const gameName = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const getQuestion = () => {
  const number = generateNumber(1, 100);
  const question = `${number}`;
  const rightAnswear = isPrime(number) ? 'yes' : 'no';
  return { question, rightAnswear };
};

export default () => playGame(getQuestion, gameName);
