import React from "react";

import { Routes, Route } from "react-router-dom";
import FakerDemo from "./components/faker-demo";

import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<SearchResults />} />
        <Route path="/demo" element={<FakerDemo />} />
      </Routes>
    </div>
  );
}

export default App;
