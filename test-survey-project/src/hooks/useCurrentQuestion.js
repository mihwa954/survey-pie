import { useRecoilValue } from 'recoil';
import questionsState from '../Store/questions/atom';
import useStep from './useStep';

function useCurrentQuestion() {
  const step = useStep();
  const questions = useRecoilValue(questionsState);

  return questions[step];
}
export default useCurrentQuestion;

//QuestionBox 안에 있는 질문들을 가져와서 커스텀훅으로 관리하자
//여기서 이렇게 커스텀 훅으로 관리를 하면 QuestionBox는 코드가 더 간결해질것이다
