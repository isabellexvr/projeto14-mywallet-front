import SignInPage from "./HomePages/SignInPage";
import GlobalStyle from "./assets/css/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./HomePages/SignUpPage";
import WelcomePage from "./HomePages/WelcomePage";
import TokenProvider from "./contexts/Token";
import UsernameProvider from "./contexts/User";
import MainPage from "./MainPages/MainPage";
import NewEntryPage from "./MainPages/NewEntryPage";
import NewOutputPage from "./MainPages/NewOutputPage";

function App() {
  return (
    <UsernameProvider>
      <TokenProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/new-entry" element={<NewEntryPage />} />
            <Route path="/new-output" element={<NewOutputPage />} />
          </Routes>
          <GlobalStyle />
        </BrowserRouter>
      </TokenProvider>
    </UsernameProvider>
  );
}

export default App;
