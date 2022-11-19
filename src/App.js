import SignInPage from "./HomePages/SignInPage";
import GlobalStyle from "./assets/css/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./HomePages/SignUpPage";
import WelcomePage from "./HomePages/WelcomePage";
import TokenProvider from "./contexts/Token";
import MainPage from "./MainPages/MainPage";

function App() {
  return (
    <TokenProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
        <GlobalStyle />
      </BrowserRouter>
    </TokenProvider>
  );
}

export default App;
