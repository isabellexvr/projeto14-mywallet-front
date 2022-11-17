import SignInPage from "./HomePages/SignInPage";
import GlobalStyle from "./assets/css/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./HomePages/SignUpPage";
import WelcomePage from "./HomePages/WelcomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage/>}/>
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
