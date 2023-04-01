import styled from "styled-components";
import { AiOutlineRollback } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useUsername } from "../contexts/User";
import { useState } from "react";
import { useToken } from "../contexts/Token";

export default function NewEntryPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({});
  const { username } = useUsername();
  const { token } = useToken();

  function handleForm({ target: { value, name } }) {
    setForm({ ...form, [name]: value });
  }

  function sendForm(e) {
    e.preventDefault();
    setLoading(true);

    const newForm = { ...form }
    const currency = new Intl.NumberFormat("en-US", {style: "currency", currency:"USD"})
    currency.format(newForm.value)

    axios
      .post(
        process.env.REACT_APP_API_BASE_URL + "/post-registry",
        {
          ...newForm,
          name: username,
          type: "entry",
        },
        {
          headers: { Authorization: "Bearer " + token },
        }
      )
      .then((answer) => {
        setLoading(false);
        navigate("/main")
      })
      .catch((err) => {
        console.log(err.response.data);
        setLoading(false);
      });
  }

  return (
    <>
      {!loading && (
        <PageContainer>
          <HeaderStyle>
            <h1>Nova entrada</h1>
            <AiOutlineRollback onClick={() => navigate("/main")} />
          </HeaderStyle>
          <FormStyle onSubmit={sendForm}>
            <input
              onChange={handleForm}
              name="value"
              placeholder="Valor"
              required
            />
            <input
              onChange={handleForm}
              name="description"
              placeholder="Descrição"
              required
            />
            <button>Salvar entrada</button>
          </FormStyle>
        </PageContainer>
      )}
      {loading && (
        <PageContainer>
          <HeaderStyle>
            <h1>Nova entrada</h1>
            <AiOutlineRollback />
          </HeaderStyle>
          <FormStyle onSubmit={sendForm}>
            <input placeholder="Valor" disabled />
            <input placeholder="Descrição" disabled />
            <button disabled>Salvar entrada</button>
          </FormStyle>
        </PageContainer>
      )}
    </>
  );
}

const PageContainer = styled.div`
  background-color: #915fbf;
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
