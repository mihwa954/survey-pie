import './index.css';
import React from 'react';

import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { RecoilRoot } from 'recoil';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* //개발중에 잠재적인 문제를 미리 파악할 수있도록 도와주는 기능
리액트에서 앞으로 지원을 하지 않는 방식이나 안전하지 않는 코드를 사용할 때!
경고메세지를 띄워준다
사용자에게는 보이지 않음 */}
      <RecoilRoot>
        {/* 현재 파일로 RecoilRoot라는 특정 상태를 가져온다 app,js안에 있는 recoil상태를 관리하기 위해서 가장 바깥쪽에 먼저 감싸준다 이렇게 감싸주게되면 atom이나 selector같은 상태들을 자유롭게 사용할 수 있다 */}
        {/* <BrowserRouter> */}
        {/* 사용자가 다른 페이지로 넘어갈 수 있도록 해주는 역할, 특정 주소를 입력하면 그 주소에 맞는 컴포넌트를 화면에 보여주는 역할
      가장 입구에 배치해 주는 이유는 앱 전체를 라우팅이 가능한 환경을 만들어 주기 위해서다
      이렇게 해야 앱 내부의 주소 변화를 감지하고 다른 페이지로 보여줄 수 있다 */}
        <App />
        {/* </BrowserRouter> */}
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
