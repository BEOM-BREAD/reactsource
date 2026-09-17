import "./App.css";
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home ";
import MyPage from "./components/MyPage";
import LoginForm from "./components/LoginForm";
import ProtectedRouter from "./common/ProtectedRouter";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route element={<ProtectedRouter />}>
          <Route path="/mypage" element={<MyPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
