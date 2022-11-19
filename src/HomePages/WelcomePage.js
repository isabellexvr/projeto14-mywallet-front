import HomePage from "../components/HomePage";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function WelcomePage() {
  return (
    <HomePage>
      <Link to="/sign-in">
        <SubmitButton>Iniciar</SubmitButton>
      </Link>
    </HomePage>
  );
}

const SubmitButton = styled.button`
  background-color: white;
  width: 326px;
  height: 46px;
  border-radius: 5px;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  border: none;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: #a328d6;
  font-family: 'Raleway';
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
