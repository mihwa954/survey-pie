import useCurrentQuestion from '../../hooks/useCurrentQuestion';
import useCurrentAnswer from '../../hooks/useCurrentAnswer';
import ActionButtons from '../ActionButtons';

import styled from 'styled-components';
import Body from '../Body';
import Desc from '../Desc';
import Title from '../Title';

//가장 먼저 QuestionBox 컴포넌트를 임의로 만들고 App.js로 보내보자
//전체적인 틀이 완성이 되었다면
//백엔드 데이터들이 아직 오지 않았기 때문에 임시 데이터를 만들어서 넣어보자
//지금은 일일이 손으로 다 데이터를 넣어준 상태이다(이렇게 짜는 것을 하드코딩)
//지금 이 QuestionBox는 단일 질문에 대한 정보만 필요한 상황이다
//모든 데이터들을 이곳에 만들 필요는 없다
//그러면 QuestionBox가 아닌 그 위에 즉, App.js에서 모든 정보를 가지고 있어야한다
//QuestionBox안에 Props를 받기 때문에 {}중괄호 필수!!
function QuestionBox() {
  const [answer, setAnswer] = useCurrentAnswer;

  const question = useCurrentQuestion;

  return (
    <QuestionBoxWrapper>
      <Title>{question.title}</Title>
      <Desc>{question.desc}</Desc>
      <Body
        type={question.type}
        answer={answer}
        setAnswer={setAnswer}
        options={question.options}
      />
      <ActionButtons />
    </QuestionBoxWrapper>
  );
}

const QuestionBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default QuestionBox;
