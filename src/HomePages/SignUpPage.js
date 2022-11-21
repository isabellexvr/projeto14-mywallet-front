import styled from "styled-components";
import HomePage from "../components/HomePage";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import axios from "axios";

export default function SignUpPage() {
  const navigate= useNavigate()
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({});

  function handleForm({ target: { value, name } }) {
    setForm({ ...form, [name]: value });
  }
  function sendForm(e) {
    e.preventDefault();

    setLoading(true);
    if (form.password === form.confirmPassword) {
      delete form.confirmPassword
      axios
        .post("http://localhost:5000/sign-up", form)
        .then((answer) => {
          alert(answer.data);
          navigate("/sign-in")
        })
        .catch((err) => {
          console.log(err.response.data);
          alert(err.response.data)
          setLoading(false)
        });
    } else {
      alert("As senhas não coindidem.");
      setLoading(false);
    }
  }

  return (
    <>
      {!loading && (
        <HomePage>
          <SignInForm onSubmit={sendForm}>
            <input
              onChange={handleForm}
              placeholder="Nome"
              name="name"
              type="name"
              required
            />
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
            <input
              onChange={handleForm}
              placeholder="Confirme a senha"
              name="confirmPassword"
              type="password"
              required
            />
            <SubmitButton color={"#a328d6"}>Cadastrar</SubmitButton>
          </SignInForm>
          <StyledLink to="/sign-in">Já tem uma conta? Entre agora!</StyledLink>
        </HomePage>
      )}
      {loading && (
        <HomePage>
          <SignInForm onSubmit={sendForm}>
            <input placeholder="Nome" disabled />
            <input placeholder="E-mail" disabled />
            <input placeholder="Senha" disabled />
            <input placeholder="Confirme a senha" disabled />
            <SubmitButton disabled color={"#a328d6"}>
              <PropagateLoader color="white" size={8} />
            </SubmitButton>
          </SignInForm>
          <StyledLink to="/">Já tem uma conta? Entre agora!</StyledLink>
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
