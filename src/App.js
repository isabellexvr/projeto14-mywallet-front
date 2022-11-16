import SignInPage from "./HomePages/SignInPage";
import GlobalStyle from "./assets/css/GlobalStyle";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignInPage />}/>
    </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
