import styled from "styled-components";
import { AiOutlineRollback } from "react-icons/ai";

export default function NewOutputPage() {
  return (
    <>
      <PageContainer>
        <HeaderStyle>
          <h1>Nova saída</h1>
          <AiOutlineRollback />
        </HeaderStyle>
        <FormStyle>
          <input name="value" placeholder="Valor" />
          <input name="description" placeholder="Descrição" />
          <button>Salvar saída</button>
        </FormStyle>
      </PageContainer>
    </>
  );
}

const PageContainer = styled.div`
  background-color: #915fbf;
  align-items: center;
  height: 177.5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderStyle = styled.div`
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 87%;
  > h1 {
    font-family: "Raleway";
    font-weight: 700;
    font-size: 26px;
    color: #ffffff;
  }
  > svg {
    color: white;
    font-size: 30px;
  }
`;

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  > input {
    width: 326px;
    height: 58px;
    background: #ffffff;
    border-radius: 5px;
    border: none;
    padding: 16px;
    box-sizing: border-box;
    margin-bottom: 13px;
    ::placeholder {
      font-family: "Raleway";
      font-weight: 400;
      font-size: 20px;
      color: #000000;
    }
  }
  > button {
    width: 326px;
    height: 46px;
    border: none;
    background-color: #a328d6;
    border-radius: 5px;
    font-family: "Raleway";
    font-weight: 700;
    font-size: 20px;
    color: #ffffff;
  }
`;
