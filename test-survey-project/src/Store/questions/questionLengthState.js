import { selector } from 'recoil';
import questionsState from './atom';

const questionLengthState = selector({
  key: 'questionLength',
  get: ({ get }) => {
    const questions = get(questionsState);

    return questions.length;
  },
});

export default questionLengthState;
