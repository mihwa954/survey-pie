//이곳은 Title과 desc를 받아서 출력을 해주는 곳이다
//먼저 아래처럼 type를 props로 받아서 각각의 타입에 따라서
//어떤 질문폼이 나타나게 할건지를 하기로 했었다

import TextareaInput from '../TextareaInput';
import TextInput from '../TextInput';
import SelectInput from '../SelectInput';
import styled from 'styled-components';

//input안에서는 answer 데이터를 필요로했다 questions의 options 데이터도 필요로했다
//그러면 answer데이터와 questions의 options 데이터를 input들에게 아톰으로 전달해주는 방법도 있다. 하지만 그렇게 되면 각각의 input들의 상태에 따라서 다른 데이터들을 연결해줘하니 많은 atom을 만들어야 하는 번거로움이 생긴다
//그렇다면! input들의 하나로 담고있는 최상위 컴포넌트에 atom을 두고 거기서 필요한 데이터들을 골라서 가져가게 하면 되지 않을까??
//input들의 최상위 컴포넌트는 Body 컴포넌트였다
//Body 컴포넌트에 answer와 questions데이터를 연결해서 사용하도록 하자
//아! 근데 Titel, Desc에도 필요하다! 이렇게되면 모든 곳에 atom의 데이터를 붙여줘야하나???
//그렇게되면 너무 불필요하다
//그러면 QuestionBox에 Store를 연결하고 question 데이터들을 그 밑으로 내려주는 방식으로 구현을 하자
//ActionButtions에는 다 필요없는데 question.length만 필요하다
//질문의 length에 따라서 버튼의 상태가 달라지기 때문이다 그래서 ActeionButtions는 question atom을 연결해서 관리를 해주자

function Body({ type, answer, setAnswer, options }) {
  //SurveryPage에서 console.log(answers)를 찍었을 때 콘솔창에 새로운 배열로 나열이 되지 않았다
  //질문에 값을 새로운 배열로 관리하는 setAnswers가 제대로 작동을 하지 않고었어서 확인을 해보기 위해서
  //체크를 할 때 배열로 관리를 하는 Body컴포넌트에 setAnswer를 출력을해보니 함수를 잘 전달받고 있었다

  //먼저 InputComponent 를 만들어두고(변하는 값이기 때문에 let) if문 안에서 InputComponent type을 확인 하고 그 type에 맞는 컴포넌트를 출력하라고 설정
  let InputComponent = null;
  if (type === 'select') {
    InputComponent = SelectInput;
  } else if (type === 'text') {
    InputComponent = TextInput;
  } else if (type === 'textarea') {
    InputComponent = TextareaInput;
  }

  return (
    <BodyWrapper>
      <InputComponent answer={answer} setAnswer={setAnswer} options={options} />
    </BodyWrapper>
  );
}

const BodyWrapper = styled.div`
  margin-left: 38px;
  flex: 1;
`;

export default Body;
