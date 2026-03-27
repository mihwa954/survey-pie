import { useParams } from 'react-router-dom';

function useStep() {
  const params = useParams();

  return parseInt(params.step);
}
export default useStep;

//QuestionBox 안에 있는 질문들을 가져와서 커스텀훅으로 관리하자
//여기서 이렇게 커스텀 훅으로 관리를 하면 QuestionBox는 코드가 더 간결해질것이다
