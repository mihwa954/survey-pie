import { useRecoilState } from 'recoil';
import answersState from '../Store/answers/atom';
import useStep from './useStep';

function useCurrentAnswer() {
  const step = useStep();
  const [answers, setAnswers] = useRecoilState(answersState);

  const answer = answers[step];
  const setAnswer = (newAnswer) => {
    setAnswers((answers) => {
      const newAnswers = [...answers];
      newAnswers[step] = newAnswer;

      return newAnswers;
    });
  };

  return [answer, setAnswer];
}
export default useCurrentAnswer;

//QuestionBox 안에 있는 질문들을 가져와서 커스텀훅으로 관리하자
//여기서 이렇게 커스텀 훅으로 관리를 하면 QuestionBox는 코드가 더 간결해질것이다
