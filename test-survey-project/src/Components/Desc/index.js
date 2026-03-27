import styled from 'styled-components';

//이 부분도 데이터의 desc를 받아서 렌더링 해주는 방식으로 만들어두자
//이씨....오타 땜시.... 출력이 안됬었노....하 이런 쉽....읽어버린 영어를 찾아서
//이제 태국어는 버리고 영어로 갈아타자
// function Desc({ children }) {
//   return <h4>{children}</h4>;
// }

const Desc = styled.h4`
  font-size: 18px;
  line-height: 21px;
  color: #463c3c;
  margin-top: 16px;
  margin:bottom: 16px;
  margin-left:38px;
  font-weight: nomal;
  
`;

export default Desc;
