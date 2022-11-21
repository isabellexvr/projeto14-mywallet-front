import styled from "styled-components";
import { MdExitToApp } from "react-icons/md";
import {
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
  AiOutlineDelete,
} from "react-icons/ai";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUsername } from "../contexts/User";
import axios from "axios";
import { useToken } from "../contexts/Token";

const entrysAndOutputs = [
  { date: "24/11", description: "Empréstimo", price: "500,00", type: "entry" },
  { date: "20/11", description: "Almoço mãe", price: "39,90", type: "output" },
  { date: "10/11", description: "Almoço só", price: "29,90", type: "output" },
];

export default function MainPage() {
  const { username } = useUsername();
  const {token} = useToken()


  const navigate = useNavigate();
  const [registries, setRegistries] = useState([""]);

  

  useEffect(() => {

    axios.get("http://localhost:5000/registries", {
      headers: { "Authorization": "Bearer " + token }
  })
    .then( answer => {
      console.log(answer.data)
      setRegistries(answer.data)
    })
    .catch( err => {
      console.log(err.response.data)
    })
  }, []);

  return (
    <>
      {!registries.length && (
        <PageContainer>
          <HeaderStyle>
            <h1>Olá, {username}</h1>
            <MdExitToApp
              onClick={() => {
                localStorage.removeItem("data");
                navigate("/");
              }}
            />
          </HeaderStyle>
          <RegistriesStyle display={"flex"}>
            <h1>Não há registros de entrada ou saída</h1>
          </RegistriesStyle>

          <ButtonsContainer>
            <div onClick={() => navigate("/new-entry")} className="new-entry">
              <AiOutlinePlusCircle />
              <h1>Nova entrada</h1>
            </div>
            <div onClick={() => navigate("/new-output")} className="new-output">
              <AiOutlineMinusCircle />
              <h1>Nova saída</h1>
            </div>
          </ButtonsContainer>
        </PageContainer>
      )}
      {registries.length && (
        <PageContainer>
          <HeaderStyle>
            <h1>Olá, {username}</h1>
            <MdExitToApp
              onClick={() => {
                localStorage.removeItem("data");
                navigate("/");
              }}
            />
          </HeaderStyle>
          <RegistriesStyle paddingTop={"23px"} display={"initial"}>
            {entrysAndOutputs.map((t) => (
              <RegistryStyle>
                <div>
                  <h2>{t.date}</h2>
                  <p>{t.description}</p>
                </div>
                <Price color={t.type === "entry" ? "#03AC00" : "#C70000"}>
                  {t.price}
                </Price>
                <AiOutlineDelete />
              </RegistryStyle>
            ))}
            <Balance>
              <h1>SALDO</h1>
              <p>21312,12</p>
            </Balance>
          </RegistriesStyle>
          <ButtonsContainer>
            <div onClick={() => navigate("/new-entry")} className="new-entry">
              <AiOutlinePlusCircle />
              <h1>Nova entrada</h1>
            </div>
            <div onClick={() => navigate("/new-output")} className="new-output">
              <AiOutlineMinusCircle />
              <h1>Nova saída</h1>
            </div>
          </ButtonsContainer>
        </PageContainer>
      )}
    </>
  );
}

const HeaderStyle = styled.div`
  height: 78px;
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

const PageContainer = styled.div`
  background-color: #915fbf;
  align-items: center;
  height: 177.5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RegistriesStyle = styled.div`
  position: relative;
  width: 87%;
  height: 446px;
  border-radius: 5px;
  background: #ffffff;
  display: ${(props) => props.display};
  padding-top: ${(props) => props.paddingTop};
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  > h1 {
    color: #868686;
    font-family: "Raleway";
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    width: 180px;
  }
`;

const ButtonsContainer = styled.div`
  margin-top: 13px;
  width: 87%;
  display: flex;
  justify-content: space-between;
  > div {
    height: 114px;
    width: 47.54%;
    background-color: #a328d6;
    border-radius: 5px;
    box-sizing: border-box;
    > svg {
      margin-top: 10.5px;
      margin-left: 9.56px;
      font-size: 26px;
      color: white;
    }
    > h1 {
      margin-top: 24px;
      margin-left: 10px;
      width: 64px;
      font-family: "Raleway";
      font-weight: 700;
      font-size: 17px;
      line-height: 20px;
      color: #ffffff;
    }
  }
`;

const RegistryStyle = styled.div`
  margin-bottom: 18px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > div {
    display: flex;
    > h2 {
      font-family: "Raleway";
      font-weight: 400;
      font-size: 16px;
      color: #c6c6c6;
      margin-left: 10px;
      margin-right: 10px;
    }
    > p {
      font-family: "Raleway";
      font-weight: 400;
      font-size: 16px;
      color: #000000;
      text-align: left;
      width: 180px;
    }
  }
  > svg {
    color: grey;
    font-size: 17px;
    margin-right: 8px;
  }
`;

const Price = styled.h3`
  margin-right: 3px;
  color: ${(props) => props.color};
  font-family: "Raleway";
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: right;
`;

const Balance = styled.div`
  display: flex;
  width: 93%;
  justify-content: space-between;
  position: absolute;
  bottom: 10px;
  right: 12px;
  > h1 {
    font-family: "Raleway";
    font-weight: 700;
    font-size: 17px;
    color: #000000;
  }
  > p {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    text-align: right;
    color: #03ac00;
  }
`;
