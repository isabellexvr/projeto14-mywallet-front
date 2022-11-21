import styled from "styled-components";
import { useState } from "react";
import { PropagateLoader } from "react-spinners";
import { Link, useNavigate } from "react-router-dom";
import HomePage from "../components/HomePage";
import axios from "axios";
import { useToken } from "../contexts/Token";
import { useUsername } from "../contexts/User";

export default function SignInPage() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({});

  const { setToken } = useToken();
  const { setUsername } = useUsername();

  const isLogged = localStorage.getItem("data");
  if (isLogged) {
    const data = JSON.parse(isLogged);
    setToken(data.token);
    setUsername(data.name)
    navigate("/main");
    return;
  }

  function handleForm({ target: { value, name } }) {
    setForm({ ...form, [name]: value });
  }

  function sendForm(e) {
    e.preventDefault();
    setLoading(true);

    axios
      .post("http://localhost:5000/sign-in", form)
      .then((answer) => {
        console.log(answer.data.message);
        navigate("/main");
        console.log(answer.data);
        setUsername(answer.data.name);
        setToken(answer.data.token);
        const serializedToken = JSON.stringify(answer.data);
        localStorage.setItem("data", serializedToken);
      })
      .catch((err) => {
        alert(err.response.data);
        setLoading(false);
      });
  }
  return (
    <>
      {!loading && (
        <HomePage>
          <SignInForm onSubmit={sendForm}>
            <input
              onChange={handleForm}
              placeholder="E-mail"
              name="email"
              type="email"
              required
            />
            <input
              onChange={handleForm}
              placeholder="Senha"
              name="password"
              type="password"
              required
            />
            <SubmitButton color={"#a328d6"}>Entrar</SubmitButton>
          </SignInForm>
          <StyledLink to="/sign-up">Primeira vez? Cadastre-se!</StyledLink>
        </HomePage>
      )}
      {loading && (
        <HomePage>
          <SignInForm disabled>
            <input placeholder="E-mail" disabled />
            <input disabled placeholder="Senha" />
            <SubmitButton disabled color={"#AB78CD"}>
              <PropagateLoader color="white" size={8} />
            </SubmitButton>
          </SignInForm>
          <StyledLink to="sign-up" disabled>
            Primeira vez? Cadastre-se!
          </StyledLink>
        </HomePage>
      )}
    </>
  );
}

const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  input {
    width: 326px;
    height: 58px;
    margin-bottom: 13px;
    border-radius: 5px;
    border: none;
    padding: 15px;
    box-sizing: border-box;
    font-family: "Raleway", sans-serif;
    font-size: 20px;
    font-weight: 400;
    ::placeholder {
      color: #d096f7;
    }
    :disabled {
      background-color: #f4e5ff;
    }
  }
`;

const SubmitButton = styled.button`
  background-color: ${(props) => props.color};
  width: 326px;
  height: 46px;
  border-radius: 5px;
  color: white;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  border: none;
  margin-bottom: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  div {
    position: absolute;
    position: relative;
    top: -40px;
    right: 95px;
    svg {
      position: absolute;
      top: 10;
      left: 20;
    }
  }
`;

const StyledLink = styled(Link)`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  color: white;
  text-decoration: none;
`;
