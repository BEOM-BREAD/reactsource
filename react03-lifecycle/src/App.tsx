import { Route, Routes } from "react-router-dom";
import "./App.css";
import TopNavi from "./TopNavi";
import LifeCycle from "./LifeCycle";

const App = () => {
  return (
    <div>
      <TopNavi />
      <Routes>
        <Route path="/" element={<LifeCycle />} />
      </Routes>
    </div>
  );
};

export default App;
