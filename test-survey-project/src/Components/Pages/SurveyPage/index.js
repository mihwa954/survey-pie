import QuestionBox from '../../QuestionBox';
import ProgressIndicator from '../../ProgressIndicator/index2';
import styled from 'styled-components';

function SurveyPage() {
  // const params = useParams();
  //SurveyPage에서는 questions 데이터를 쓰는 곳이 따로 없다
  //SurveyPage에서는 그냥 질문을 밑으로 내려주는 역할만 하고있다
  //즉, 최상위 state에 두는 것이 아니라 질문 컴포넌트! QuestionBox에 두면된다
  // const questions = useRecoilValue(questionsState);

  //   //step은 현재 질문이 몇 번째 질문인지를, 몇 번째 질문을 바라보고 있는지를 알려주는 데이터
  //   //첫번째는 0, 그 다음은 1, 그 다음은 2
  //   //원래는 변해야 하는 값이라서 state를 사용해서 관리하면 되지만 나중에 다른 방식으로 step을 관리 할 것이기 때문에 우선은 const로 선언을 해준다
  //   //임시로 step값을 변경해주면 변경된 값에 따라서 버튼들이 다르게 나온다

  // const step = parseInt(params.step);
  //지금 useEffect를 통해서 확인해보니 답변의 0번째만 배열로 감싸지고 step이 자꾸 0이 된다
  //그렇다면 지금 어딘가에 현재답변의 값이 고정이 되어있는거 같고 그 값에 따른 step번째만 출력이 되고있는 상황이다
  //현재 답변이 answers이면 answers에 해당되는 것들을 consle.log를 찍어보자
  // useEffect(() => {
  //   console.log('현재답변', answers);
  //   console.log('현재 질문 단계(step):', step);
  // });

  // const [answers, setAnswers] = useState([]);
  //console.log(answers);를 찍었을 때 배열로 관리가 되고있지 않다.
  //useState의 초기값을 빈 배열로 두었으나 에러는 없지만,,,새로운 값을 입력했을 시 id값과 step값이 들어오지 않고있다
  //그러면 기존의 답변을 새로운 배열로 담고있는 setAnswers가 출력이 제대로 안되고 있는거 같다

  return (
    <SurveyPageWrapper>
      <ProgressIndicator />
      {/* question 단일 데이터를 넘기는데 어떤 것을 넘기냐??? questions의 step번째 데이터를 넘겨라 */}
      <QuestionBox

      //모든 답변들을 가져올 필요가 없기 때문에 step번째만 가져오도록 한다
      />
    </SurveyPageWrapper>
  );
}

const SurveyPageWrapper = styled.div`
  width: 100%;
  min-height: 100%;
`;
export default SurveyPage;
