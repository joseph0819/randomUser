import React from "react";
import { Route, Routes } from "react-router-dom";
import Counter from "./Counter";
import Errorpage from "./Errorpage";
import Home from "./Home";
import { ErrorBoundary } from "./ErrorBoundary";
import About from "./About";

const App = () => {
  return (
    <>
      <div>
        <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counterpage" element={<Counter/>} />
          <Route path="/about" element={<About/>} />
          <Route path="*" element={<Errorpage/>} />
        </Routes>
        </ErrorBoundary>
    
      </div>
    </>
  );
};

export default App;
