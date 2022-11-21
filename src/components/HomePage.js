import styled from "styled-components";
import logo from "../assets/wallet.png";
import { Link } from "react-router-dom";

export default function HomePage({ children }) {
  return (
    <PageContainer>
      <Title>
        <img alt="logo" src={logo} />
        MyWallet
      </Title>
      {children}
      <div>
        {" "}
        Icons made by{" "}
        <a
          href="https://www.flaticon.com/authors/juicy-fish"
          title="juicy_fish"
        >
          {" "}
          juicy_fish{" "}
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  @media (max-width: 700px) {
    height: 177.5vw;
  }
  height: 48.9vw;
  background-color: #915fbf;
  display: flex;
  align-items: center;

  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  position: relative;
  a {
    text-decoration: none;
  }
  div:last-child {
    position: absolute;
    bottom: 0;
    color: white;
    font-family: "Raleway";
    font-size: 14px;
    a {
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

  img {
    width: 32.5px;
    margin-right: 10px;
  }
`;
