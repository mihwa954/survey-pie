import { atom } from 'recoil';

const questionsState = atom({
  key: 'questionsState',
  default: [
    {
      title: '질문1 입니다',
      desc: '이 항목은 객관식 입니다',
      type: 'select',
      required: false,
      options: {
        items: ['답변1', '답변2', '답변3', '답변4', '답변5'],
      },
    },
    {
      title: '질문2 입니다',
      desc: '추가 설명입니다. 이 항목은 단답형입니다.',
      type: 'text',
      required: false,
      options: {
        placeholder: '10자 이내로 작성하세요',
      },
    },
    {
      title: '질문3 입니다',
      desc: '추가 설명입니다. 이 항목은 주관식입니다.',
      type: 'textarea',
      required: true,
      //option이 textinpt들이 받을 수 있도록 넘겨주자
      options: {
        placeholder: '400자 이내로 작성하세요',
      },
    },
  ],
});

export default questionsState;
