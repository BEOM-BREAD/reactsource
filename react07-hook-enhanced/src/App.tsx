import { useActionState, useState } from "react";
import "./App.css";
import TopNavi from "./components/TopNavi";
import { Route, Routes } from "react-router-dom";
import UseOptimisticExam from "./components/UseOptimisticExam";
import UseActionStateExam from "./components/UseActionStateExam";
import UseFormStateExam from "./components/UseFormStateExam";

function App() {
  return (
    <>
      <TopNavi />
      <Routes>
        <Route path="/use-optimistic" element={<UseOptimisticExam />} />
        <Route path="/use-action-state" element={<UseActionStateExam />} />
        <Route path="/use-form-status" element={<UseFormStateExam />} />
      </Routes>
    </>
  );
}

export default App;
