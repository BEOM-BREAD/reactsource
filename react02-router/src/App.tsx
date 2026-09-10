import { Route, Routes } from "react-router-dom";
import "./App.css";
import TopNavi from "./declarative/nav1/TopNavi";
import NotFound from "./declarative/nav1/NotFound";
import Home from "./declarative/nav1/Home";
import CommonLayout from "./declarative/nav1/CommonLayout";
import LayoutIndex from "./declarative/nav1/LayoutIndex";
import RouteHooks from "./declarative/nav1/RouteHooks";

// react-router-dom
// URL 관리, 이력관리

// http://localhost:5173
// http://localhost:5173/intro
// http://localhost:5173/intro/router
// http://localhost:5173/xyz
function App() {
  return (
    <>
      <TopNavi />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<CommonLayout />}>
          <Route index element={<LayoutIndex />} />
          <Route path="router" element={<RouteHooks />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
