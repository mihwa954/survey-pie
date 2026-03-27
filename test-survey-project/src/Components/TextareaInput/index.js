import styled from 'styled-components';

//Body에 들어갈 type이 필요하니깐 textinput인 컴포넌트를 먼저 만들어두자
function TextareaInput({ answer, setAnswer, options }) {
  return (
    <TextArea
      type="text"
      value={answer}
      onChange={(e) => {
        setAnswer(e.target.value);
      }}
      placeholder={options.placeholder}
    />
  );
}
//value를 answer로 넣어주고 onChange 즉 사용자가 값을 입력해주면
//이벤트가 발생해서 value에 나타나게 된다

export default TextareaInput;

const TextArea = styled.textarea`
  border: 1px solid #e0e0e0;
  box-sizing: boredr-box;
  border-radius: 10px;
  width: 747px;
  height: 196px;
  angle: 0 deg;
  opacity: 1;
  padding: 8px 18px;
  font-size: 18px;
  line-hdigth: 21px;
  resize: none;
`;
