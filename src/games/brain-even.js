import playGame from '..';

import generateNumber from '../utilis';

const isEven = number => number % 2 === 0;

const gameName = 'Answer "yes" if number even otherwise answer "no".';

const getQuestion = () => {
  const question = generateNumber(1, 1000);
  const rightAnswear = isEven(question) ? 'yes' : 'no';
  return { question, rightAnswear };
};

export default () => playGame(getQuestion, gameName);
