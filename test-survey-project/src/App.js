import styled from 'styled-components';

import { Routes, Route } from 'react-router-dom';
import SurveyPage from './Components/Pages/SurveyPage';
import CompletionPage from './Components/Pages/CompletionPage';
//임시 데이터를 먼저 App.js에서 만들어두자
//임시로 만들어준 질문박스에서 질문을 픽해서 QuestionBox로 넘겨줘야한다
//질문의 갯수에 따라서 ProgressIndicator가 정보를 받아서 bar들을 몇개를 그려야하는지를 알 수 있도록 해 줄 것이다
function App() {
  return (
    <AppWrapper>
      <Box>
        <Routes>
          {/* null에 해당하는 저 부분에 컴포넌트를 넣게되면 라우트는 해당 컴포넌트를
          페이지로 인식을 해서 그 컴포넌트로 렌더링을 한다 */}
          {/* path를 정할때는 해당 페이지가 어떤 컨텐츠를 가지고 있는지를 명확하게 알려줄 수 있도록 만들어주는게 좋다 */}
          {/* "/survey"페이지에서 추가로 필요한 것이 설문 id이다 어떤 페이지를 불러와서 사용자에게 보여줄건지를 정해줄 필요가 있다 아무런 정보가 없으면 어떤 정보를 보여줘야 할지 모르니 정확하게 어떤 설문을 가져와서 사용자에게 질문을 보여줄지 결정
          url에서 정할 수 있는데 지금은 localhost인데 나중에 배포가 되면 
          https://www.Surveypie.com/survey?id=abc123 이런식으로 받을거다
          이렇게하면 surveypie의 id 즉 파라미터(쿼리스트링)값을 가져다가 id를 보고 id에 맞는 데이터를 db를 가진 서버에서 가져오게된다 */}
          {/* 이렇게 쿼리스트링을 사용하는것은 전통적인 방식인데 다른방식도 있다
          https://www.Surveypie.com/survey.abc123 이런식으로 되었다면
          abx123 저부분을 가져와서 서버로 보내서 데이터를 가져온다 하지만 단점은 저 부분이 데이터를 가지고있는 부분인지가 명확하지 않다 */}
          {/* path에 :(콜론)이 붙은 부분은 path가 아니라 데이터로서 읽어라 라는
          뜻이다 콜론에 붙은 저 부분은 데이터를 불러오는 hooks가 있는데 그것을
          사용해서 데이터를 불러오는 것이다 */}
          {/* step으로 관리를 해주는 이유는 지금 우리는 페이지가 survey,completionpage가 있다
          그럼 질문페이지와 설문완료 페이지를 어떻게 구분을 해야할까?
          단순히 state로 관리를 한다면 안에 있는 질문의 화면만 바꿔주는것도 방법이겠지만
          페이지가 이동을 할 때, 현재 페이지에서 질문만 바꾼 상황이기에
          뒤로가기를 했을 시, 이전 질문 페이지로 넘어가는 것이 아니라 아예 다른 페이지로 넘어갈 수 있는 변수가 생겨버린다
          그래서 서비스 적으로 각각의 step을 라우터로 관리해주는게 사용성면에서 더 편리하다 */}
          {/* <Route path="/survey:surveyId/:step" element={<SurveyPage />} /> */}

          <Route path="/done" element={<CompletionPage />} />
          {/* Route를 이렇게 쪼개주면 :step의 링크들은 Id를 부모 경로로 해서 이동을 하게된다 */}
          {/* 부모페이지, 자식 페이지를 만들기 위해서는 부모가 되는 페이지로 크게 감싸서 사용 */}
          <Route path="/survey/:surveyId" element={<SurveyPage />}>
            <Route path=":step" element={<SurveyPage />} />
          </Route>
        </Routes>
      </Box>
    </AppWrapper>
  );
}

//<ProgressIndicator />
//<QuestionBox /> 가장 처음에 컴포넌트를 이렇게 임시로 만들어서 출력이 잘 되는지 확인하기 위해서는
// <ㅇㅇㅇㅇㅇ/>이런식으로 컴포넌트들을 옆으로 정렬 하도록 만들어야한다
//<ㅔㅣㅣㅣㅣ></ㅣㅣㅣㅣ> 이렇게 놓아버리면 수직구조 때문에 한쪽만 출력이 되어 코드가 잘못되었다고 착각할 수 있다

//먼저 설문지 폼에는 고정된 스타일이 있다
//사용자가 클릭을 할때마다 페이지를 넘기는 과정은 나중으로 생각하고
//우선 스타일을 적용시키자

const AppWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-item: center;
  background-color: #f5f6f6;
  padding-top: 100px;
`;

const Box = styled.div`
  width: 1000px;
  height: 700px;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.07);
  border-radius: 16px;
  padding: 60px;
  display: flex;
  box-sizing: border-box;
  position: relative;
`;

export default App;

console.log('154754688');
console.log('154754688');
console.log('154754688');
console.log('154754688');
console.log('154754688');
console.log('154754688');
console.log('154754688');
console.log('154754688');
console.log('154754688');
