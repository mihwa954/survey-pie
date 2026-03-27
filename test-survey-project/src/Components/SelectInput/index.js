import styled from 'styled-components';

function Item({ children, onChange }) {
  return (
    <ItemWrapper>
      <div>
        <label>
          <input type="checkbox" onChange={onChange} />
          <span />
          <div> {children}</div>
        </label>
      </div>
    </ItemWrapper>
  );
}

function SelectInput({ answer = [], setAnswer, options }) {
  console.log(setAnswer);
  //onChange가 발생이 될 때, handelChange가 발생이 된다
  const handleChange = (isChecked, index) => {
    if (isChecked) {
      //체크된 값을 배열로 관리
      setAnswer([...answer, index]);
    } else {
      setAnswer(answer.filter((item) => item !== index));
    }
  };

  return (
    <SelectInputWrapper>
      {options.items.map((item, index) => {
        return (
          <Item
            key={index}
            //onChange에서 handleChange로 값을 넘길 때, 마침표(.)가 아니라 **쉼표(,)**를 써서 두 개의 데이터를 따로 보내줘야 합니다.
            //아까 checked.index라는 것을 보내라고 했는데 그런건 없으니깐 계속 Array가 0 이었다
            onChange={(e) => handleChange(e.target.checked, index)}
          >
            {item}
          </Item>
        );
      })}
    </SelectInputWrapper>
  );
}

export default SelectInput;
//현재 임시 데이터에서 items라는 option을 추가해서 선택지 항목을 추가했다
//이제 SelectInput 컴포넌트 안에는 임시데이터에서 item들을 받아서 질문들을 나열해 줄 수 있도록 만들어야 한다

const SelectInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ItemWrapper = styled.div`
  input[type='checkbox'] {
    display: none;
  }

  input[type='checkbox'] ~ span {
    width: 24px;
    height: 24px;
    border: 3px solid #e2dfdf;
    box-sizing: border-box;
    display: inline-block;
    border-radius: 100%;
    vertical-align: middle;
    margin-right: 10px;
  }

  input[type='checkbox']: checked ~span {
    border: 8px solid #6542f1;
  }
  input[type='checkbox'] ~ div {
    font-size: 14px;
    line-height: 18px;
    display: inline-block;
    vertical-align: middle;
  }

  input[type='checkbox']: checked ~div {
    font-weight: bold;
  }
`;
