import playGame from '..';

import generateNumber from '../utilis';

const isEven = number => number % 2 === 0;

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

const generateGameData = () => {
  const question = generateNumber(1, 1000);
  const rightAnswear = isEven(question) ? 'yes' : 'no';
  return { question, rightAnswear };
};

export default () => playGame(generateGameData, gameDescription);
