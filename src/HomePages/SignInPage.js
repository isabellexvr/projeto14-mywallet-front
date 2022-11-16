import styled from "styled-components";
import { useState } from "react";
import logo from "../assets/wallet.png";
import { PropagateLoader } from "react-spinners";
import {Link, useNavigate} from "react-router-dom";
import HomePage from "../components/HomePage";

export default function SignInPage() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({});

  function handleForm({ target: { value, name } }) {
    setForm({ ...form, [name]: value });
  }
  function sendForm(e) {
    e.preventDefault();
    setLoading(true);
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
