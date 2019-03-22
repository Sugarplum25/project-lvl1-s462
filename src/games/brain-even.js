import gamePlay from '..';

import { cons } from 'hexlet-pairs';

import generateNumber from '../utilis';

const isEven = number => number % 2 === 0;

const gameName = 'Answer "yes" if number even otherwise answer "no".';

const gameQuestion = () => {
  const askQuestion = generateNumber(1, 1000);
  const rightAnswear = isEven(askQuestion) ? 'yes' : 'no';
  return cons(askQuestion, rightAnswear);
};

export default () => gamePlay(gameQuestion, gameName);
