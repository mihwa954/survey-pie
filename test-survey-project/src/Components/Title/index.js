//제목 부분에선 chlidren을 받아서 제목을 가져올 수 있도록 구현을 미리 해두자

import styled from 'styled-components';

function Title({ children }) {
  return (
    <TitleWrapper>
      <span>Q</span>
      {children}
    </TitleWrapper>
  );
}

const TitleWrapper = styled.h1`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #121111;
  margin-left: 38px;
  span {
    margin-right: 12px;
  }
`;

export default Title;
