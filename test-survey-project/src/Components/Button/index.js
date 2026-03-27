//버튼에 특별한 기능이 들어있지 않기 때문에 버튼의 스타일만 바꿔주는 컴포넌트를 만들자

import Styled from 'styled-components';
import { PRIMARY, SECONDARY, TERTIARY } from '../constants/color';

const colorMap = {
  PRIMARY,
  SECONDARY,
  TERTIARY,
};

const Button = Styled.button`

padding: 16px 24px;

width: 200px;
color: ${({ type }) => colorMap[type].BUTTON.DEFAULT.COLOR};
background: ${({ type }) => colorMap[type].BUTTON.DEFAULT.BACKGROUND};
border-radius: 4px;
border: none;
font-weight: bold;
font-size: 18px


&:hover{
color: ${({ type }) => colorMap[type].BUTTON.HOVER.COLOR};
background:${({ type }) => colorMap[type].BUTTON.HOVER.BACKGROUND};
border: ${({ type }) => (type === 'TERTIARY' ? '1px solid ${TERTIARY.BUTTON.HOVER.BORDER}' : 'none')};

}

&:active{
color: ${({ type }) => colorMap[type].BUTTON.PRESSED.COLOR};
background: ${({ type }) => colorMap[type].BUTTON.PRESSED.BACKGROUND};
border: ${({ type }) => (type === 'TERTIARY' ? '1px solid ${TERTIARY.BUTTON.PRESSED}' : 'none')}
}

&:disabled{
color: ${({ type }) => colorMap[type].BUTTON.DISABLED.COLOR};
background:${({ type }) => colorMap[type].BUTTON.DISABLED.BACKGROUND};
border: ${({ type }) => (type === 'TERTIARY' ? '1px solid ${TERTIARY.BUTTON.DISABLED}' : 'none')}
}
`;

export default Button;
// 외곽선 같은 경우에는 마지막 페이지에만 나타나기 때문에 연산자를 사용해서 출력하도록 하기
// &: 자기 자신을 의미한다
