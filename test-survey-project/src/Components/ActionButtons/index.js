import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import { useRecoilValue } from 'recoil';
import questionLengthState from '../../Store/questions/questionLengthState';
import styled from 'styled-components';
import useStep from '../../hooks/useStep';
//가장 먼저 ActionButtons 컴포넌트를 임의로 만들고 App.js로 보내보자
//일단은 우리가 필요한 버튼들을 다 넣어보자
//이전, 다음, 제출
//항상 이 모든 버튼들이 뜨는것이 아니라 조건이 필요하다
function ActionButtons() {
  const step = useStep();
  const questionsLength = useRecoilValue(questionLengthState);

  //마지막 페이지인지를 구하는 변수를 선언
  const isLast = questionsLength - 1 === step;
  const navigate = useNavigate();
  return (
    <ActionButtionsWrapper>
      {step === 0 || (
        <Button
          type="SECONDARY"
          onClick={() => {
            navigate(`${step - 1}`);
          }}
        >
          이전
        </Button>
      )}
      {/* isLast라면 다음버튼을, isLast가 아니라면 제출버튼 */}
      {isLast ? (
        <Button
          type="PRIMARY"
          onClick={() => {
            navigate('/done');
          }}
        >
          제출
        </Button>
      ) : (
        <Button
          type="PRIMARY"
          onClick={() => {
            //params를 숫자형으로 가져왔을 때에는 에러가났었다
            //``백틱을 사용해서 문자열로 가져와서 넣어주니 동작이 된다
            //그리고 절대경로로 쓰지 않고 `${step + 1}` 이런식으로 쓰다보니 현재 path에서 상대경로로 이동을 해버린다
            //http://localhost:3000/survey/dfe/0 여기에서 1로 이동을하니깐
            //http://localhost:3000/survey/dfe/0/1이런식으로 가버린다
            //그래서 우리는 절대경로로 navigate를 지정해주자
            //id값도 ${id}로 해줘야 정상적으로 id값을 유지한 채로 페이지가 이동을 할 수
            //하지만 이렇게 되버리면 id값을 불러오고 id를 정해주고하는 번거로움이 생기기 때문에
            //상대경로를 통해서 이동할 수 있도록 해보자
            navigate(`${step + 1}`);
          }}
        >
          다음
        </Button>
      )}
    </ActionButtionsWrapper>
  );
}

const ActionButtionsWrapper = styled.div`
  margin-top: 72px;
  display: flex;
  gap: 16px;
  justify-content: center;
`;

export default ActionButtons;
