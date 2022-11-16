import styled from "styled-components";
import { useState } from "react";
import logo from "../assets/wallet.png";
import { PropagateLoader } from "react-spinners";
import {Link, useNavigate} from "react-router-dom";

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
        <PageContainer>
            
          <Title>
            <img alt="logo" src={logo} />
            MyWallet
          </Title>

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
          <StyledLink>Primeira vez? Cadastre-se!</StyledLink>
          <div> Icons made by <a href="https://www.flaticon.com/authors/juicy-fish" title="juicy_fish"> juicy_fish </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </PageContainer>
      )}
      {loading && (
        <PageContainer>
          <Title>
            <img alt="logo" src={logo} />
            MyWallet
          </Title>
          <SignInForm disabled>
            <input placeholder="E-mail" disabled />
            <input disabled placeholder="Senha" />
            <SubmitButton disabled color={"#AB78CD"}>
              <PropagateLoader color="white" size={8} />
            </SubmitButton>
          </SignInForm>
          <StyledLink>Primeira vez? Cadastre-se!</StyledLink>
        </PageContainer>
      )}
    </>
  );
}

const PageContainer = styled.div`
  background-color: #915fbf;
  display: flex;
  align-items: center;
  height: 177.5vw;
  flex-direction: column;
  div:last-child{
    color: white;
    font-family: "Raleway";
    font-size: 14px;
    a{
        color: lightgrey;
    }
  }
`;

const Title = styled.h1`
  font-family: "Saira Stencil One";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  color: #ffffff;
  margin-bottom: 24px;
  margin-top: 159px;
  img {
    width: 32.5px;
    margin-right: 10px;
  }
`;

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

const StyledLink = styled(Link)`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  color: white;
  margin-bottom: 180px;
`;
